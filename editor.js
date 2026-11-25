import { DEFAULT_PLAN } from './data.js?v=2';
import { renderOne, applyTheme, esc, ICON_NAMES, KIND_LABELS, safeUrl, isVideoUrl } from './render.js?v=3';
import { firebaseConfig, PLAN_DOC, SDK } from './config.js?v=2';

const { initializeApp } = await import(SDK + 'firebase-app.js');
const A = await import(SDK + 'firebase-auth.js');
const F = await import(SDK + 'firebase-firestore.js');
const S = await import(SDK + 'firebase-storage.js');
const fb = initializeApp(firebaseConfig);
const auth = A.getAuth(fb), db = F.getFirestore(fb), storage = S.getStorage(fb);
const app = document.getElementById('app');
const toastEl = document.getElementById('toast'); let tt;
const toast = (m, ms = 3200) => { toastEl.textContent = m; toastEl.classList.add('show'); clearTimeout(tt); if (ms) tt = setTimeout(() => toastEl.classList.remove('show'), ms); };
const clone = o => JSON.parse(JSON.stringify(o));

// ---------- campos por tipo de página
const T = (k, label, hint) => ({ k, t: 'text', label, hint });
const TA = (k, label, hint) => ({ k, t: 'area', label, hint });
const IMG = (k, label) => ({ k, t: 'media', accept: 'image/*', label });
const VID = (k, label) => ({ k, t: 'media', accept: 'video/*', label: label || 'Vídeo da página (opcional)', video: true });
const ANY = (k, label) => ({ k, t: 'media', accept: 'image/*,video/*', label, any: true });
const GAL = { k: 'gallery', t: 'list', gallery: true, label: 'Galeria de fotos e vídeos', add: { url: '', caption: '' }, fields: [ANY('url', 'Foto ou vídeo'), T('caption', 'Legenda (opcional)')] };
const ICONF = { k: 'icon', t: 'icon', label: 'Ícone' };
const HL = 'Use *asteriscos* para destacar palavras em azul. Ex.: Nossa história é construída *todos os dias.*';
const SCHEMA = {
  cover: [IMG('image', 'Imagem da capa (1080 × 1920)'), VID('video', 'Vídeo da capa (opcional, toca sem som em loop)'), T('title', 'Texto alternativo da capa', 'Usado por leitores de tela e quando não há imagem.')],
  story: [T('badge', 'Etiqueta (canto superior)'), T('eyebrow', 'Sobretítulo'), T('title', 'Título', HL), TA('text', 'Texto', 'Deixe uma linha em branco para separar parágrafos.'),
    IMG('image', 'Foto (opcional)'), T('imageCaption', 'Legenda da foto'), VID('video'),
    { k: 'items', t: 'list', label: 'Cards', add: { icon: 'star', title: 'Novo card', text: '' }, fields: [ICONF, T('title', 'Título'), TA('text', 'Texto')] },
    T('quote', 'Frase de destaque (caixa azul)'), GAL],
  stats: [T('badge', 'Etiqueta'), T('eyebrow', 'Sobretítulo'), T('title', 'Título', HL), TA('text', 'Texto'), VID('video'),
    { k: 'items', t: 'list', label: 'Indicadores (o 1º fica em destaque)', add: { icon: 'target', value: '0', label: 'Novo indicador', note: '' }, fields: [ICONF, T('value', 'Número'), T('label', 'Descrição'), T('note', 'Observação (opcional)')] },
    T('note', 'Aviso no rodapé (opcional)'), GAL],
  plan: [T('badge', 'Etiqueta'), T('title', 'Nome do plano'), { k: 'tier', t: 'select', label: 'Cor do cartão', opts: { sky: 'Azul', red: 'Vermelho', navy: 'Azul-marinho', orange: 'Laranja' } },
    { k: 'stars', t: 'select', label: 'Estrelas', opts: { 0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5' } }, T('monthly', 'Investimento mensal'), T('annual', 'Investimento anual'), T('ctaLabel', 'Texto do botão do WhatsApp', 'Padrão: Contrate agora. O botão usa o telefone da página Contato.'), VID('video'),
    { k: 'items', t: 'list', label: 'Benefícios', add: { icon: 'check', title: 'Novo benefício', text: '' }, fields: [ICONF, T('title', 'Benefício'), TA('text', 'Descrição')] }, GAL],
  benefit: [T('badge', 'Etiqueta'), T('number', 'Numeração (ex.: Benefício 01)'), ICONF, T('subtitle', 'Subtítulo'), T('title', 'Título', HL), TA('text', 'Texto'),
    { k: 'plans', t: 'plans', label: 'Disponível nos planos', hint: 'Escreva o detalhe (ex.: 6 meses) ou "Incluso". Deixe vazio se o plano não tem.' },
    VID('video'), IMG('image', 'Foto ou arte (opcional)'), T('format', 'Formato (ex.: Stories 1080 × 1920)'), GAL],
  contact: [T('badge', 'Etiqueta'), T('title', 'Título', HL), TA('text', 'Texto'), T('name', 'Nome'), T('role', 'Cargo'), T('phone', 'Telefone / WhatsApp'), T('email', 'E-mail'), IMG('photo', 'Foto da pessoa (opcional)'), VID('video'), GAL],
  closing: [T('title', 'Título'), T('subtitle', 'Subtítulo', HL), TA('text', 'Agradecimento'), VID('video'), GAL],
};
const NEW = {
  story: { badge: 'Nova seção', eyebrow: '', title: 'Novo *título*', text: 'Escreva o texto aqui.', image: '', imageCaption: '', video: '', items: [], quote: '' },
  stats: { badge: 'Números', eyebrow: '', title: 'Nossos *números*', text: '', video: '', items: [{ icon: 'target', value: '0', label: 'Indicador', note: '' }], note: '' },
  plan: { badge: 'Planos 2027', title: 'Novo plano', tier: 'sky', stars: 1, monthly: 'R$ 0,00', annual: 'R$ 0,00', video: '', items: [] },
  benefit: { badge: 'Portfólio de benefícios', number: 'Benefício', icon: 'star', subtitle: '', title: 'Novo benefício', text: '', plans: { essencial: '', premium: '', master: '' }, format: '', image: '', video: '' },
  contact: { badge: 'Contato', title: 'Fale com a gente', text: '', name: '', role: '', phone: '', email: '', photo: '', video: '' },
  closing: { title: 'Obrigado', subtitle: '', text: '', video: '' },
  cover: { image: '', video: '', title: 'Capa' },
};

let plan = null, sel = 0, dirty = false, fromDefault = false, user = null;
const setDirty = v => { dirty = v; document.querySelector('.ed-top')?.classList.toggle('dirty', v); const b = document.getElementById('save'); if (b) b.textContent = v ? 'Salvar alterações' : 'Salvo'; };
addEventListener('beforeunload', e => { if (dirty) { e.preventDefault(); e.returnValue = ''; } });
const pageName = p => (p.kind === 'cover' ? 'Capa' : (p.kind === 'plan' ? 'Plano ' : '') + String(p.title || p.badge || 'Sem título').replace(/\*/g, ''));

// ---------- login
function loginView(msg = '') {
  app.innerHTML = '<form class="login" id="lf"><h1>Editor do plano<br><span style="color:var(--sky)">Manaíra 2027</span></h1>' +
    '<div class="f"><label for="em">E-mail</label><input type="email" id="em" autocomplete="username" required></div>' +
    '<div class="f"><label for="pw">Senha</label><input type="password" id="pw" autocomplete="current-password" required></div>' +
    '<p class="msg" id="msg">' + esc(msg) + '</p><button class="b y" style="width:100%">Entrar</button>' +
    '<p class="hint" style="margin-top:14px;text-align:center"><a href="./">Ver o site público</a></p></form>';
  document.getElementById('lf').addEventListener('submit', async e => {
    e.preventDefault(); const m = document.getElementById('msg'); m.textContent = 'Entrando…';
    try { await A.signInWithEmailAndPassword(auth, document.getElementById('em').value.trim(), document.getElementById('pw').value); }
    catch (err) { m.textContent = 'E-mail ou senha incorretos.'; }
  });
}

async function loadPlan() {
  try {
    const snap = await F.getDoc(F.doc(db, ...PLAN_DOC));
    if (snap.exists() && Array.isArray(snap.data().pages)) { fromDefault = false; return snap.data(); }
  } catch (e) { toast('Não consegui ler o banco de dados. Confira as regras do Firestore.', 6000); }
  fromDefault = true; return clone(DEFAULT_PLAN);
}

// ---------- interface principal
function shell() {
  app.innerHTML =
    '<header class="ed-top"><span class="t"><b>Editor</b> · Plano Anual 2027</span><span class="dot" title="Alterações não salvas"></span>' +
    '<button class="b y" id="save">Salvo</button><a class="b g" href="./" target="_blank" rel="noopener">Ver site</a><button class="b g" id="out">Sair</button></header>' +
    '<div class="layout"><div id="left"></div><aside class="pv"><h3>Pré-visualização no celular</h3><div class="phone"><div class="screen"><main id="pv"></main></div></div></aside></div>';
  document.getElementById('save').addEventListener('click', save);
  document.getElementById('out').addEventListener('click', async () => { if (dirty && !confirm('Sair sem salvar as alterações?')) return; dirty = false; await A.signOut(auth); });
  drawLeft(); drawPreview(); setDirty(fromDefault);
}

function drawLeft() {
  const L = document.getElementById('left');
  const p = plan.pages[sel];
  L.innerHTML =
    (fromDefault ? '<div class="warn">Este é o conteúdo inicial do plano. Clique em <b>Salvar</b> para publicá-lo no site.</div>' : '') +
    '<section class="box"><h2>Páginas</h2><ul class="pages">' + plan.pages.map((q, i) =>
      '<li class="' + (i === sel ? 'sel ' : '') + (q.visible === false ? 'hid' : '') + '"><button class="nm" data-a="sel" data-i="' + i + '"><span>' + String(i + 1).padStart(2, '0') + '</span>' + esc(pageName(q)) + ' <small>· ' + esc(KIND_LABELS[q.kind] || q.kind) + '</small></button>' +
      '<button class="ico" data-a="up" data-i="' + i + '" aria-label="Subir">↑</button><button class="ico" data-a="down" data-i="' + i + '" aria-label="Descer">↓</button></li>').join('') + '</ul>' +
    '<div class="row" style="margin-top:12px"><select id="newKind" aria-label="Tipo da nova página">' + Object.entries(KIND_LABELS).map(([k, v]) => '<option value="' + k + '">' + esc(v) + '</option>').join('') + '</select><button class="b s" data-a="add">+ Nova página</button></div></section>' +
    '<section class="box"><h2>' + esc(pageName(p)) + '</h2><div class="row" style="margin-bottom:16px">' +
      '<button class="b s" data-a="vis">' + (p.visible === false ? 'Mostrar no site' : 'Ocultar do site') + '</button><button class="b s" data-a="dup">Duplicar</button><button class="b s r" data-a="del">Excluir página</button></div>' +
      '<div id="form">' + (SCHEMA[p.kind] || []).map(f => field(f, p, '')).join('') + '</div></section>' +
    '<section class="box"><h2>Identidade</h2><div data-root="plan">' + field(IMG('logo', 'Logo (PNG com fundo transparente)'), plan.brand || (plan.brand = {}), 'brand.') + '</div></section>' +
    '<section class="box"><h2>Cores do plano</h2><div class="colors">' +
      [['navy', 'Azul-marinho'], ['sky', 'Azul'], ['red', 'Vermelho'], ['yellow', 'Amarelo'], ['orange', 'Laranja']].map(([k, n]) =>
        '<label><input type="color" data-theme="' + k + '" value="' + esc((plan.theme || {})[k] || '#000000') + '">' + n + '</label>').join('') +
    '</div><div class="row" style="margin-top:12px"><button class="b s" data-a="resetColors">Voltar às cores originais</button></div></section>';
}

function field(f, obj, base) {
  const path = base + f.k, v = obj[f.k];
  const id = 'f-' + path.replace(/\W/g, '-');
  const hint = f.hint ? '<small>' + esc(f.hint) + '</small>' : '';
  if (f.t === 'text') return '<div class="f"><label for="' + id + '">' + esc(f.label) + '</label><input type="text" id="' + id + '" data-p="' + path + '" value="' + esc(v) + '">' + hint + '</div>';
  if (f.t === 'area') return '<div class="f"><label for="' + id + '">' + esc(f.label) + '</label><textarea id="' + id + '" data-p="' + path + '">' + esc(v) + '</textarea>' + hint + '</div>';
  if (f.t === 'select') return '<div class="f"><label for="' + id + '">' + esc(f.label) + '</label><select id="' + id + '" data-p="' + path + '">' + Object.entries(f.opts).map(([k, n]) => '<option value="' + esc(k) + '"' + (String(v) === k ? ' selected' : '') + '>' + esc(n) + '</option>').join('') + '</select></div>';
  if (f.t === 'icon') return '<div class="f"><label for="' + id + '">' + esc(f.label) + '</label><select id="' + id + '" data-p="' + path + '">' + Object.entries(ICON_NAMES).map(([k, n]) => '<option value="' + k + '"' + (v === k ? ' selected' : '') + '>' + esc(n) + '</option>').join('') + '</select></div>';
  if (f.t === 'plans') { const pl = v || {}; return '<div class="f"><span class="lab">' + esc(f.label) + '</span>' + hint + '<div class="colors">' +
    [['essencial', 'Essencial'], ['premium', 'Premium'], ['master', 'Master']].map(([k, n]) => '<div class="f"><label for="' + id + k + '">' + n + '</label><input type="text" id="' + id + k + '" data-p="' + path + '.' + k + '" value="' + esc(pl[k]) + '" placeholder="não incluso"></div>').join('') + '</div></div>'; }
  if (f.t === 'media') {
    const u = safeUrl(v);
    const vid = f.video || (f.any && isVideoUrl(u));
    const prev = !u ? '<small>Nenhum arquivo.</small>' : (vid ? (/youtu/.test(u) ? '<small>YouTube: ' + esc(u) + '</small>' : '<video class="thumb" src="' + esc(u) + '" controls playsinline preload="metadata"></video>') : '<img class="thumb" src="' + esc(u) + '" alt="">');
    return '<div class="f"><span class="lab">' + esc(f.label) + '</span><div class="mf" data-drop="' + path + '" data-accept="' + f.accept + '">' + prev +
      '<small class="drophint">Arraste ' + (f.any ? 'uma foto ou um vídeo' : f.video ? 'um vídeo' : 'uma imagem') + ' para cá ou use o botão abaixo.</small>' +
      '<div class="bar2" hidden><i></i></div><div class="row">' +
      '<label class="b s" style="cursor:pointer">Enviar arquivo<input type="file" hidden accept="' + f.accept + '" data-up="' + path + '"></label>' +
      (u ? '<button class="b s r" data-a="clearMedia" data-p="' + path + '">Remover</button>' : '') + '</div>' +
      '<input type="text" data-p="' + path + '" value="' + esc(v) + '" placeholder="' + (f.video || f.any ? 'ou cole um link https (YouTube, .mp4 ou imagem)' : 'ou cole um link https da imagem') + '" aria-label="Link do arquivo"></div></div>';
  }
  if (f.t === 'list') {
    const arr = Array.isArray(v) ? v : [];
    return '<div class="f' + (f.gallery ? ' gal" data-gallery="' + path : '') + '"><span class="lab">' + esc(f.label) + ' (' + arr.length + ')</span>' +
      (f.gallery ? '<small>Adicione quantas fotos e vídeos quiser. Eles aparecem nesta ordem, um embaixo do outro. Dá para arrastar vários arquivos de uma vez para esta área.</small>' : '') + arr.map((it, j) =>
      '<div class="item"><div class="hd"><strong>' + (j + 1) + '. ' + esc(String(it.title || it.label || it.caption || (f.gallery ? (isVideoUrl(it.url || '') ? 'Vídeo' : it.url ? 'Foto' : 'Vazio') : '')).replace(/\*/g, '')) + '</strong>' +
      '<button class="ico" data-a="iup" data-p="' + path + '" data-j="' + j + '" aria-label="Subir">↑</button><button class="ico" data-a="idown" data-p="' + path + '" data-j="' + j + '" aria-label="Descer">↓</button><button class="ico" data-a="idel" data-p="' + path + '" data-j="' + j + '" aria-label="Remover">✕</button></div>' +
      f.fields.map(sf => field(sf, it, path + '.' + j + '.')).join('') + '</div>').join('') +
      '<div class="bar2" hidden><i></i></div><div class="row">' +
      (f.gallery ? '<label class="b s" style="cursor:pointer">+ Enviar fotos/vídeos<input type="file" hidden multiple accept="image/*,video/*" data-many="' + path + '"></label>' : '') +
      '<button class="b s" data-a="iadd" data-p="' + path + '" data-k="' + f.k + '">' + (f.gallery ? '+ Adicionar por link' : '+ Adicionar') + '</button></div></div>';
  }
  return '';
}

const getAt = (o, path) => path.split('.').reduce((a, k) => (a == null ? a : a[k]), o);
function setAt(o, path, val) { const ks = path.split('.'); let a = o; ks.slice(0, -1).forEach(k => { if (a[k] == null) a[k] = {}; a = a[k]; }); a[ks[ks.length - 1]] = val; }

let pvT;
function drawPreview() {
  clearTimeout(pvT);
  pvT = setTimeout(() => {
    const pv = document.getElementById('pv'); if (!pv) return;
    applyTheme(plan.theme, pv);
    pv.innerHTML = renderOne(plan.pages[sel], plan);
  }, 120);
}

// ---------- eventos
app.addEventListener('input', e => {
  const t = e.target;
  if (t.dataset.theme) { plan.theme = plan.theme || {}; plan.theme[t.dataset.theme] = t.value; setDirty(true); drawPreview(); return; }
  if (!t.dataset.p) return;
  let val = t.value; if (t.dataset.p === 'stars') val = +val;
  setAt(t.closest('[data-root]') ? plan : plan.pages[sel], t.dataset.p, val); setDirty(true); drawPreview();
});
app.addEventListener('change', e => {
  const t = e.target;
  if (t.dataset.many && t.files && t.files.length) uploadMany(Array.from(t.files), t.dataset.many, t.closest('.gal'));
  else if (t.dataset.up && t.files && t.files[0]) upload(t.files[0], t.dataset.up, t.closest('.mf'), !!t.closest('[data-root]'));
  else if (t.dataset.p && /(^|\.)(title|label)$/.test(t.dataset.p)) { const y = scrollY; drawLeft(); scrollTo(0, y); }
});
app.addEventListener('click', e => {
  const b = e.target.closest('[data-a]'); if (!b) return;
  const a = b.dataset.a, i = +b.dataset.i, P = plan.pages;
  const y = scrollY; let redraw = true;
  if (a === 'sel') sel = i;
  else if (a === 'up' && i > 0) { [P[i - 1], P[i]] = [P[i], P[i - 1]]; sel = i - 1; setDirty(true); }
  else if (a === 'down' && i < P.length - 1) { [P[i + 1], P[i]] = [P[i], P[i + 1]]; sel = i + 1; setDirty(true); }
  else if (a === 'add') { const k = document.getElementById('newKind').value; P.splice(sel + 1, 0, { id: k + '-' + Date.now().toString(36), kind: k, visible: true, ...clone(NEW[k]) }); sel++; setDirty(true); }
  else if (a === 'dup') { const c = clone(P[sel]); c.id = c.kind + '-' + Date.now().toString(36); P.splice(sel + 1, 0, c); sel++; setDirty(true); }
  else if (a === 'del') { if (P.length < 2 || !confirm('Excluir a página "' + pageName(P[sel]) + '"? Você ainda pode desfazer saindo sem salvar.')) return; P.splice(sel, 1); sel = Math.max(0, sel - 1); setDirty(true); }
  else if (a === 'vis') { P[sel].visible = P[sel].visible === false; setDirty(true); }
  else if (a === 'clearMedia') { setAt(b.closest('[data-root]') ? plan : P[sel], b.dataset.p, ''); setDirty(true); }
  else if (a === 'resetColors') { plan.theme = clone(DEFAULT_PLAN.theme); setDirty(true); }
  else if (a.startsWith('i')) {
    const arr = getAt(P[sel], b.dataset.p) || []; const j = +b.dataset.j;
    if (a === 'iadd') { const f = (SCHEMA[P[sel].kind] || []).find(x => x.k === b.dataset.k); arr.push(clone(f ? f.add : {})); setAt(P[sel], b.dataset.p, arr); }
    else if (a === 'iup' && j > 0) [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    else if (a === 'idown' && j < arr.length - 1) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    else if (a === 'idel') { if (!confirm('Remover este item?')) return; arr.splice(j, 1); }
    setDirty(true);
  } else redraw = false;
  if (redraw) { drawLeft(); drawPreview(); if (a !== 'sel') scrollTo(0, y); else document.getElementById('form').closest('.box').scrollIntoView({ block: 'start' }); }
});

// ---------- arrastar e soltar arquivos
const dropBox = e => e.target.closest && (e.target.closest('.mf[data-drop]') || e.target.closest('.gal[data-gallery]'));
const okType = (file, accept) => accept.split(',').some(a => file.type.startsWith(a.replace('*', '')));
const hasFiles = e => e.dataTransfer && Array.from(e.dataTransfer.types || []).includes('Files');
addEventListener('dragover', e => {
  if (!hasFiles(e)) return;
  e.preventDefault(); // evita que o navegador abra o arquivo ao soltar fora da caixa
  const box = dropBox(e);
  e.dataTransfer.dropEffect = box ? 'copy' : 'none';
  document.querySelectorAll('.mf.over').forEach(b => { if (b !== box) b.classList.remove('over'); });
  if (box) box.classList.add('over');
});
addEventListener('dragleave', e => { const box = dropBox(e); if (box && !box.contains(e.relatedTarget)) box.classList.remove('over'); });
addEventListener('drop', e => {
  if (!hasFiles(e)) return;
  e.preventDefault();
  document.querySelectorAll('.mf.over').forEach(b => b.classList.remove('over'));
  const box = dropBox(e); if (!box) return;
  if (box.dataset.gallery) { uploadMany(Array.from(e.dataTransfer.files), box.dataset.gallery, box); return; }
  const file = e.dataTransfer.files[0]; if (!file) return;
  if (!okType(file, box.dataset.accept)) { const a = box.dataset.accept; toast(a.includes(',') ? 'Este campo aceita foto ou vídeo.' : a.startsWith('video') ? 'Este campo aceita apenas vídeo.' : 'Este campo aceita apenas imagem.', 5000); return; }
  upload(file, box.dataset.drop, box, !!box.closest('[data-root]'));
});

function upload(file, path, box, rootLevel, onDone) {
  const target = rootLevel ? plan : plan.pages[sel];
  const isV = file.type.startsWith('video/'), isI = file.type.startsWith('image/');
  if (!isV && !isI) { toast('Escolha uma imagem ou um vídeo.'); return; }
  if (file.size > 300 * 1024 * 1024) { toast('Arquivo acima de 300 MB. Comprima antes de enviar.', 6000); return; }
  if (isV && file.size > 80 * 1024 * 1024) toast('Vídeo grande: pode demorar e pesar no celular de quem assiste. Ideal: até 50 MB.', 6000);
  const bar = box && box.querySelector('.bar2'), fill = bar && bar.querySelector('i');
  if (bar) bar.hidden = false;
  const name = Date.now() + '-' + file.name.normalize('NFD').replace(/[^\w.-]+/g, '_').slice(-60);
  const task = S.uploadBytesResumable(S.ref(storage, 'midias/' + name), file, { contentType: file.type, cacheControl: 'public,max-age=31536000' });
  task.on('state_changed', s => { if (fill) fill.style.width = (s.bytesTransferred / s.totalBytes * 100).toFixed(0) + '%'; toast('Enviando… ' + (s.bytesTransferred / s.totalBytes * 100).toFixed(0) + '%', 0); },
    () => { toast('Falha no envio. Confira se o Storage está ativado e as regras publicadas.', 7000); if (bar) bar.hidden = true; },
    async () => {
      const url = await S.getDownloadURL(task.snapshot.ref);
      if (onDone) onDone(url); else setAt(target, path, url);
      setDirty(true);
      const y = scrollY; drawLeft(); drawPreview(); scrollTo(0, y);
      if (!onDone) toast('Arquivo enviado. Clique em "Salvar alterações" para publicar.', 5000);
    });
  return task;
}

// envia vários arquivos para a galeria, um de cada vez
async function uploadMany(files, path, box) {
  const ok = files.filter(f => okType(f, 'image/*,video/*'));
  if (!ok.length) { toast('Escolha fotos ou vídeos.'); return; }
  const page = plan.pages[sel];
  let n = 0;
  for (const file of ok) {
    const task = upload(file, path, box && box.isConnected ? box : document.querySelector('.gal[data-gallery="' + path + '"]'), false, url => {
      const arr = getAt(page, path) || []; arr.push({ url, caption: '' }); setAt(page, path, arr);
    });
    if (!task) continue;
    try { await task; n++; } catch (e) { /* aviso já mostrado */ }
  }
  if (n) toast((n === 1 ? '1 arquivo enviado' : n + ' arquivos enviados') + ' para a galeria. Clique em "Salvar alterações" para publicar.', 5000);
}

async function save() {
  const b = document.getElementById('save'); b.disabled = true; b.textContent = 'Salvando…';
  try {
    plan.updatedAt = new Date().toISOString();
    await F.setDoc(F.doc(db, ...PLAN_DOC), plan);
    fromDefault = false; setDirty(false); const y = scrollY; drawLeft(); scrollTo(0, y);
    toast('Salvo! O site público já mostra a nova versão.');
  } catch (e) { toast('Não foi possível salvar: ' + (e.code === 'permission-denied' ? 'sem permissão (confira as regras do Firestore).' : 'tente de novo.'), 7000); setDirty(true); }
  b.disabled = false;
}

A.onAuthStateChanged(auth, async u => {
  user = u;
  if (!u) { loginView(); return; }
  app.innerHTML = '<p class="loading">Carregando plano…</p>';
  plan = await loadPlan(); sel = 0; shell();
});
