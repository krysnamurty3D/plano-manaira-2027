// Desenha o plano (site público e pré-visualização do editor).
export const ICONS = {
  encarte: '<rect x="3" y="4" width="14" height="16" rx="2"/><path d="M17 8h3v10a2 2 0 0 1-2 2"/><path d="M7 8h6M7 12h6M7 16h4"/>',
  acoes: '<path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1z"/><path d="M17 9a4 4 0 0 1 0 6"/><path d="M19.5 6.5a8 8 0 0 1 0 11"/>',
  radio: '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M7 8l10-5"/><circle cx="15.5" cy="14" r="3"/><path d="M6 12h4M6 15h4"/>',
  site: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><rect x="6" y="12" width="12" height="5" rx="1"/>',
  tv: '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>',
  telao: '<rect x="2" y="3" width="20" height="12" rx="1.5"/><path d="M8 15v6M16 15v6M5 21h14"/><path d="M6 11l3-3 3 3 2-2 4 4"/>',
  ponto: '<path d="M3 21h18"/><rect x="5" y="13" width="6" height="8"/><rect x="13" y="13" width="6" height="8"/><rect x="9" y="5" width="6" height="8"/>',
  correlato: '<circle cx="8.5" cy="12" r="5"/><circle cx="15.5" cy="12" r="5"/>',
  foto: '<path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="4"/>',
  video: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l6-3v10l-6-3z"/>',
  display: '<path d="M6 3h12v12H6z"/><path d="M9 15l-2 6M15 15l2 6M9 7h6M9 11h4"/>',
  piso: '<ellipse cx="12" cy="17" rx="9" ry="4"/><path d="M12 3v10"/><path d="M8.5 9.5L12 13l3.5-3.5"/>',
  vitrine: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  people: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.5a5 5 0 0 1 5.5 5"/>',
  insta: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  reach: '<path d="M3 20h18"/><path d="M5 16l5-5 4 3 6-7"/><path d="M15 7h5v5"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  heart: '<path d="M12 20s-7-4.5-9-9a4.5 4.5 0 0 1 9-3 4.5 4.5 0 0 1 9 3c-2 4.5-9 9-9 9z"/>',
  bag: '<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  money: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 12h.01M18 12h.01"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  store: '<path d="M3 9l2-5h14l2 5"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 12v8h14v-8"/><path d="M10 20v-5h4v5"/>',
  doc: '<path d="M6 3h8l5 5v13H6z"/><path d="M14 3v5h5M9 13h7M9 17h7"/>',
  pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
  phone: '<path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  check: '<path d="M5 12l5 5L20 7"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  sprout: '<path d="M12 21V11"/><path d="M12 11c0-4 3-6 7-6 0 4-3 6-7 6z"/><path d="M12 14c0-3-2-5-6-5 0 3 2 5 6 5z"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  down: '<path d="M6 9l6 6 6-6"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/>',
};
export const ICON_NAMES = {
  encarte: 'Encarte', acoes: 'Megafone / ações', radio: 'Rádio', site: 'Site / banner', tv: 'TV', telao: 'Telão',
  ponto: 'Ponto extra', correlato: 'Correlatos', foto: 'Câmera', video: 'Vídeo', display: 'Display', piso: 'Adesivo de piso',
  vitrine: 'Vitrine', people: 'Pessoas', insta: 'Instagram', reach: 'Crescimento', eye: 'Visualizações', heart: 'Engajamento',
  bag: 'Sacola / pedidos', money: 'Dinheiro', calendar: 'Calendário', store: 'Loja', doc: 'Documento', pen: 'Contrato',
  phone: 'Telefone', mail: 'E-mail', check: 'Check', target: 'Alvo', clock: 'Relógio', shield: 'Escudo', sprout: 'Broto',
  star: 'Estrela', user: 'Pessoa', image: 'Imagem',
};

export const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
// *palavra* vira destaque colorido
export const rich = s => esc(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');
const paras = s => String(s || '').split(/\n\s*\n/).map(p => p.trim()).filter(Boolean).map(p => '<p>' + rich(p).replace(/\n/g, '<br>') + '</p>').join('');
export const safeUrl = u => {
  u = String(u || '').trim();
  return /^(https:\/\/|assets\/)/.test(u) ? u : '';
};
export const icon = (k, cls = 'ic') => '<svg class="' + cls + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[k] || ICONS.check) + '</svg>';

function ytId(u) { const m = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([\w-]{6,})/.exec(u); return m ? m[1] : ''; }
export const isVideoUrl = u => !!ytId(u) || /\.(mp4|webm|mov|m4v|ogv)(\?|#|$)/i.test(u);
export function videoBlock(url, cls = '', caption = '') {
  const u = safeUrl(url); if (!u) return '';
  const yt = ytId(u), cap = caption ? '<figcaption>' + esc(caption) + '</figcaption>' : '';
  if (yt) return '<figure class="media yt ' + cls + '"><iframe src="https://www.youtube-nocookie.com/embed/' + esc(yt) + '?rel=0&playsinline=1" title="' + esc(caption || 'Vídeo') + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe>' + cap + '</figure>';
  return '<figure class="media ' + cls + '"><video src="' + esc(u + (u.includes('#') ? '' : '#t=0.1')) + '" controls playsinline preload="metadata"></video>' + cap + '</figure>';
}
function imageBlock(url, caption, cls = '') {
  const u = safeUrl(url); if (!u) return '';
  return '<figure class="media ' + cls + '"><img src="' + esc(u) + '" alt="' + esc(caption || '') + '" loading="lazy">' + (caption ? '<figcaption>' + esc(caption) + '</figcaption>' : '') + '</figure>';
}
// Galeria: vários vídeos e fotos, um embaixo do outro
const gallery = list => {
  const it = (Array.isArray(list) ? list : []).filter(g => g && safeUrl(g.url));
  return it.length ? '<div class="gallery">' + it.map(g => isVideoUrl(g.url) ? videoBlock(g.url, '', g.caption) : imageBlock(g.url, g.caption)).join('') + '</div>' : '';
};
const badge = t => t ? '<div class="badge"><span>' + esc(t) + '</span></div>' : '';
const swoosh = '<svg class="swoosh" viewBox="0 0 160 120" aria-hidden="true"><path d="M0 0h70C40 25 18 55 0 92z" fill="var(--blue2)"/><path d="M70 0h22C55 28 26 62 0 110V92C18 55 40 25 70 0z" fill="var(--red)"/><path d="M92 0h18C70 30 38 66 0 120v-10C26 62 55 28 92 0z" fill="var(--yellow)"/></svg>';

let BRAND = {}, WA = '', VISIBLE = [];
export const WA_ICON = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.7 11.7 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3z"/></svg>';
const cta = (p, cls) => { if (!WA) return ''; const msg = 'Olá! Tenho interesse no Plano ' + String(p.title || '').replace(/\*/g, '') + ' do Plano Anual 2027 do Supermercado Manaíra. Pode me passar mais informações?'; return '<a class="cta ' + cls + '" href="https://wa.me/' + WA + '?text=' + encodeURIComponent(msg) + '" target="_blank" rel="noopener">' + WA_ICON + esc(p.ctaLabel || 'Contrate agora') + '</a>'; };
export const waLink = msg => WA ? 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg) : '';
const norm = s => String(s || '').replace(/\*/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();
function setCtx(plan) { VISIBLE = ((plan && plan.pages) || []).filter(p => p.visible !== false && KINDS[p.kind]); BRAND = (plan && plan.brand) || {}; const c = ((plan && plan.pages) || []).find(x => x.kind === 'contact' && x.phone); let d = c ? String(c.phone).replace(/\D/g, '') : ''; if (d && !d.startsWith('55')) d = '55' + d; WA = d.length >= 12 ? d : ''; }
const logo = (cls) => { const u = safeUrl(BRAND.logo); return u ? '<img class="' + cls + '" src="' + esc(u) + '" alt="Supermercado Manaíra — Você já é de casa">' : '<div class="wordmark"><small>Supermercado</small><b>MANAÍRA</b><em>Você já é de casa</em></div>'; };
const KINDS = {
  cover(p) {
    const img = safeUrl(p.image), vid = safeUrl(p.video);
    return '<div class="cover">' +
      (vid && !ytId(vid) ? '<video class="cover-media" src="' + esc(vid) + '" ' + (img ? 'poster="' + esc(img) + '" ' : '') + 'autoplay muted loop playsinline></video>'
        : img ? '<img class="cover-media" src="' + esc(img) + '" alt="' + esc(p.title || 'Capa') + '">' : '<div class="cover-media cover-empty">' + logo('logo') + '<h1>' + rich(p.title) + '</h1></div>') +
      '<a class="scroll-cue" href="#p-' + 1 + '" data-next>Deslize para ver ' + icon('down', 'ic down') + '</a></div>';
  },
  story(p) {
    return swoosh + badge(p.badge) + '<div class="wrap">' +
      (p.eyebrow ? '<p class="eyebrow">' + esc(p.eyebrow) + '</p>' : '') +
      '<h2>' + rich(p.title) + '</h2>' +
      imageBlock(p.image, p.imageCaption) +
      (p.text ? '<div class="body">' + paras(p.text) + '</div>' : '') +
      videoBlock(p.video) + gallery(p.gallery) +
      ((p.items || []).length ? '<ul class="cards ' + ((p.items || []).some(i => i.text) ? 'cards-wide' : 'cards-mini') + '">' + p.items.map(i =>
        '<li class="card">' + '<span class="ibub">' + icon(i.icon) + '</span><div><h3>' + rich(i.title) + '</h3>' + (i.text ? '<p>' + rich(i.text) + '</p>' : '') + '</div></li>').join('') + '</ul>' : '') +
      (p.quote ? '<blockquote>' + rich(p.quote) + '</blockquote>' : '') + '</div>';
  },
  stats(p) {
    const it = p.items || [];
    return swoosh + badge(p.badge) + '<div class="wrap">' +
      (p.eyebrow ? '<p class="eyebrow">' + esc(p.eyebrow) + '</p>' : '') + '<h2>' + rich(p.title) + '</h2>' +
      (p.text ? '<div class="body">' + paras(p.text) + '</div>' : '') + videoBlock(p.video) + gallery(p.gallery) +
      '<ul class="stats">' + it.map((s, i) =>
        '<li class="stat' + (i === 0 ? ' hero' : '') + '"><span class="ibub">' + icon(s.icon) + '</span><strong>' + esc(s.value) + '</strong><span class="lbl">' + esc(s.label) + '</span>' + (s.note ? '<small>' + esc(s.note) + '</small>' : '') + '</li>').join('') + '</ul>' +
      (p.note ? '<p class="note">' + icon('check') + esc(p.note) + '</p>' : '') + '</div>';
  },
  plan(p) {
    const n = Math.max(0, Math.min(5, +p.stars || 0));
    return swoosh + badge(p.badge) + '<div class="wrap">' +
      '<div class="plan-card tier-' + esc(p.tier || 'sky') + '">' +
        '<div class="plan-top"><div class="pc-name"><span class="kicker">Plano</span><h2>' + rich(p.title) + '</h2></div>' +
          '<div class="pc-side">' + (n ? '<div class="stars">' + Array(n).fill(icon('star', 'ic star')).join('') + '</div>' : '') +
          (p.annual ? '<div class="annual"><span>Anual</span><strong>' + esc(p.annual) + '</strong></div>' : '') + '</div></div>' +
        '<div class="price-wrap"><span class="kicker">Investimento mensal</span><div class="plan-bottom"><div class="price"><strong>' + esc(p.monthly) + '</strong></div>' + cta(p, 'in-card') + '</div></div></div>' +
      videoBlock(p.video) + gallery(p.gallery) +
      '<h3 class="list-title">' + icon('check') + 'Benefícios <span>· ' + (p.items || []).length + ' entregas</span></h3>' +
      '<ul class="benefits">' + (p.items || []).map(i => '<li><span class="ibub">' + icon(i.icon) + '</span><div><h4>' + esc(i.title) + '</h4><p>' + rich(i.text) + '</p></div></li>').join('') + '</ul>' + cta(p, 'big') + '</div>';
  },
  benefit(p) {
    const pl = p.plans || {};
    const chip = (k, name) => pl[k] ? '<li class="chip on ' + k + '">' + icon('check') + name + (pl[k] && pl[k] !== 'Incluso' ? ' · ' + esc(pl[k]) : '') + '</li>' : '<li class="chip off">' + name + '</li>';
    return swoosh + badge(p.badge) + '<div class="wrap">' +
      '<div class="bhead"><span class="ibub big">' + icon(p.icon) + '</span><div><p class="eyebrow">' + esc(p.number) + '</p><p class="sub">' + esc(p.subtitle) + '</p></div></div>' +
      '<h2>' + rich(p.title) + '</h2>' + (p.text ? '<div class="body">' + paras(p.text) + '</div>' : '') +
      '<p class="mini">Disponível nos planos</p><ul class="chips">' + chip('essencial', 'Essencial') + chip('premium', 'Premium') + chip('master', 'Master') + '</ul>' +
      videoBlock(p.video) + imageBlock(p.image, '') + gallery(p.gallery) +
      (p.format ? '<p class="format">' + icon('image') + 'Formato: ' + esc(p.format) + '</p>' : '') + '</div>';
  },
  // Comparativo: monta a tabela sozinho a partir das páginas de Plano e de Benefício
  compare(p) {
    const plans = VISIBLE.filter(x => x.kind === 'plan');
    const bens = VISIBLE.map((x, i) => ({ x, i })).filter(o => o.x.kind === 'benefit');
    const head = swoosh + badge(p.badge) + '<div class="wrap"><h2>' + rich(p.title) + '</h2>' + (p.text ? '<div class="body">' + paras(p.text) + '</div>' : '');
    if (!plans.length || !bens.length) return head + '<p class="note">' + icon('check') + 'O comparativo aparece quando houver páginas de Plano e de Benefício visíveis.</p></div>';
    const cols = plans.map(x => ({ key: norm(x.title), name: String(x.title || '').replace(/\*/g, ''), tier: x.tier || 'sky', monthly: x.monthly }));
    const val = (b, c) => String(((b.plans || {})[c.key]) || '').trim();
    const cell = v => !v ? '<td class="no"><span aria-label="Não incluso">–</span></td>'
      : '<td class="ok">' + icon('check', 'ic ck') + (/^incluso$/i.test(v) ? '<span class="sr">Incluso</span>' : '<small>' + esc(v) + '</small>') + '</td>';
    return head + '<div class="cmp-wrap"><table class="cmp"><thead><tr><th class="bn" scope="col">Benefício</th>' +
      cols.map((c, j) => '<th scope="col" class="tier-' + esc(c.tier) + '"><button type="button" data-col="' + (j + 2) + '" aria-pressed="false"><span class="cn">' + esc(c.name) + '</span>' + (c.monthly ? '<span class="cp">' + esc(c.monthly) + '</span><small>por mês</small>' : '') + '</button></th>').join('') +
      '</tr></thead><tbody>' + bens.map(({ x, i }) => '<tr><th scope="row"><a href="#p-' + i + '">' + icon(x.icon) + '<span>' + esc(String(x.title || '').replace(/\*/g, '')) + '</span></a></th>' + cols.map(c => cell(val(x, c))).join('') + '</tr>').join('') +
      '</tbody><tfoot><tr><th scope="row">Total de benefícios</th>' + cols.map(c => '<td>' + bens.filter(o => val(o.x, c)).length + '</td>').join('') + '</tr></tfoot></table></div>' +
      '<p class="cmp-hint">Toque no nome de um plano para destacá-lo. Toque num benefício para ver os detalhes.</p>' +
      (p.note ? '<p class="note">' + icon('check') + esc(p.note) + '</p>' : '') + '</div>';
  },
  contact(p) {
    const tel = String(p.phone || '').replace(/\D/g, '');
    const photo = safeUrl(p.photo);
    return swoosh + badge(p.badge) + '<div class="wrap">' +
      '<h2>' + rich(p.title) + '</h2>' + (p.text ? '<div class="body">' + paras(p.text) + '</div>' : '') +
      '<div class="contact"><div class="who">' + (photo ? '<img src="' + esc(photo) + '" alt="' + esc(p.name) + '">' : '<span class="avatar">' + icon('user') + '</span>') +
      '<div><strong>' + esc(p.name) + '</strong><span>' + esc(p.role) + '</span></div></div>' +
      (tel ? '<a class="crow" href="https://wa.me/55' + esc(tel) + '" target="_blank" rel="noopener"><span class="ibub">' + icon('phone') + '</span><div><small>WhatsApp</small>' + esc(p.phone) + '</div></a>' : '') +
      (p.email ? '<a class="crow" href="mailto:' + esc(p.email) + '"><span class="ibub">' + icon('mail') + '</span><div><small>E-mail</small>' + esc(p.email) + '</div></a>' : '') + '</div>' +
      videoBlock(p.video) + gallery(p.gallery) + '</div>';
  },
  closing(p) {
    const bg = safeUrl(p.bg), sh = Math.max(0, Math.min(0.9, +p.shade || 0));
    const bgm = bg && !ytId(bg) ? (isVideoUrl(bg) ? '<video class="bgm" src="' + esc(bg) + '" autoplay muted loop playsinline aria-hidden="true"></video>' : '<img class="bgm" src="' + esc(bg) + '" alt="">') : '';
    const col = /^#[0-9a-fA-F]{6}$/.test(p.bgColor || '') ? ' style="background:' + p.bgColor + '"' : '';
    if (p.hideText === '1') { // só a imagem/vídeo de fundo, inteira e no formato original
      const full = bg && !ytId(bg) ? (isVideoUrl(bg) ? '<video class="bgfull" src="' + esc(bg) + '" autoplay muted loop playsinline></video>' : '<img class="bgfull" src="' + esc(bg) + '" alt="' + esc(String(p.title || '').replace(/\*/g, '')) + '">') : '<div class="bgempty"></div>';
      const extra = videoBlock(p.video) + gallery(p.gallery);
      return '<div class="closing only-bg"' + col + '>' + full + (extra ? '<div class="bgextra">' + extra + '</div>' : '') + '</div>';
    }
    const cls = 'closing' + (p.tone === 'light' ? ' light' : '') + (p.foot === 'hide' ? ' nofoot' : '');
    return '<div class="' + cls + '"' + col + '>' + bgm + (sh ? '<div class="bgshade" style="background:rgba(0,0,0,' + sh + ')"></div>' : '') + logo('logo') +
      '<h2>' + rich(p.title) + '</h2>' + (p.subtitle ? '<p class="subt">' + rich(p.subtitle) + '</p>' : '') +
      videoBlock(p.video) + gallery(p.gallery) + (p.text ? '<p class="thanks">' + rich(p.text) + '</p>' : '') +
      (p.foot === 'hide' ? '' : '<div class="foot"><strong>Supermercado Manaíra</strong><em>Você já é de casa.</em></div>') + '</div>';
  },
};
export const KIND_LABELS = { cover: 'Capa', story: 'Texto + cards', stats: 'Números', plan: 'Plano (preço)', compare: 'Comparativo de planos', benefit: 'Benefício', contact: 'Contato', closing: 'Encerramento' };

export function applyTheme(theme, el = document.documentElement) {
  const t = theme || {};
  const ok = c => /^#[0-9a-fA-F]{6}$/.test(c || '');
  [['navy', '--navy'], ['sky', '--sky'], ['red', '--red'], ['yellow', '--yellow'], ['orange', '--orange']].forEach(([k, v]) => { if (ok(t[k])) el.style.setProperty(v, t[k]); });
}

export function renderPlan(plan, root) {
  setCtx(plan);
  const pages = (plan.pages || []).filter(p => p.visible !== false && KINDS[p.kind]);
  root.innerHTML = pages.map((p, i) => '<section class="pg k-' + p.kind + '" id="p-' + i + '" data-title="' + esc(p.title || p.badge || '') + '">' + KINDS[p.kind](p).replace('href="#p-1"', 'href="#p-' + (i + 1) + '"') + '</section>').join('');
  return pages;
}
export function renderOne(page, plan) {
  setCtx(plan);
  return KINDS[page.kind] ? '<section class="pg k-' + page.kind + '">' + KINDS[page.kind](page) + '</section>' : '';
}
