// Conteúdo inicial do Plano Anual 2027. O editor salva uma cópia no Firebase;
// enquanto nada for salvo, o site público usa este conteúdo.
const ALL = { essencial: 'Incluso', premium: 'Incluso', master: 'Incluso' };
const ACOES = 'Possibilidade de participação em ativações, degustações e outras ações promocionais realizadas pelo supermercado, mediante planejamento e alinhamento prévio.';
const RADIO = 'Divulgação de marcas, produtos, slogans e mensagens promocionais na programação interna do supermercado.';

export const DEFAULT_PLAN = {
  version: 1,
  title: 'Plano Anual 2027 — Supermercado Manaíra',
  brand: { logo: 'assets/logo.png' },
  theme: { navy: '#1E1A6B', sky: '#0A7EC2', red: '#E31E24', yellow: '#FFED2E', orange: '#F39A3E' },
  pages: [
    { id: 'capa', kind: 'cover', visible: true, image: 'assets/capa.jpg', video: '', title: '57 anos de tradição. Um novo ano de oportunidades.' },

    { id: 'quem-somos', kind: 'story', visible: true, badge: 'Quem somos', eyebrow: '57 anos de história',
      title: 'Nossa história é construída *todos os dias.*',
      text: 'Há 57 anos, o Supermercado Manaíra faz parte da história do varejo paraibano.\n\nFundado por José Leodácio de Souza, o Seu Dedé, nasceu de uma visão empreendedora que atravessou gerações e consolidou uma trajetória marcada pelo trabalho, pela confiança e pelo compromisso com a qualidade.\n\nAo longo dessas décadas, acompanhamos a transformação dos hábitos de consumo, ampliamos nossa estrutura e diversificamos nossos serviços, sem perder a essência que nos trouxe até aqui: oferecer variedade, qualidade e uma experiência de compra que faz parte do cotidiano de milhares de famílias.\n\nHoje, seguimos evoluindo, valorizando nossas origens e investindo continuamente no desenvolvimento do supermercado.',
      image: '', imageCaption: 'José Leodácio de Souza · Seu Dedé, fundador', video: '',
      items: [ { icon: 'clock', title: 'Tradição', text: '' }, { icon: 'shield', title: 'Confiança', text: '' }, { icon: 'sprout', title: 'Evolução', text: '' } ],
      quote: '57 anos de história, com o olhar voltado para o futuro.' },

    { id: 'proposito', kind: 'story', visible: true, badge: 'Nosso propósito', eyebrow: 'Nosso propósito',
      title: 'Mais presença. *Mais visibilidade.* *Mais oportunidades.*',
      text: 'Acreditamos que uma parceria comercial deve ir além da presença de produtos nas prateleiras.\n\nPor isso, desenvolvemos o Plano Anual 2027 com o propósito de ampliar as oportunidades de divulgação e valorização das marcas que fazem parte do nosso supermercado.\n\nNossa proposta reúne estratégias de comunicação, exposição de produtos e ações promocionais que acompanham o comportamento de compra dos nossos clientes, valorizando cada marca em diferentes momentos e canais.',
      image: '', imageCaption: '', video: '',
      items: [ { icon: 'acoes', title: 'Comunicação', text: 'Estratégias que levam sua marca aos canais do Manaíra.' },
               { icon: 'ponto', title: 'Exposição', text: 'Produtos em destaque nos espaços certos da loja.' },
               { icon: 'star', title: 'Ações promocionais', text: 'Ativações que acompanham o comportamento de compra.' } ],
      quote: 'Queremos proporcionar aos nossos fornecedores uma presença consistente, planejada e alinhada às oportunidades comerciais do Manaíra ao longo do ano.' },

    { id: 'numeros', kind: 'stats', visible: true, badge: 'Nossa força em números', eyebrow: 'Nossa força em números',
      title: 'Números que representam *nossa presença.*',
      text: 'A relevância do Supermercado Manaíra também pode ser percebida pela movimentação de consumidores, desempenho comercial e alcance dos nossos canais de comunicação.',
      video: '',
      items: [
        { icon: 'people', value: '+300 mil', label: 'Fluxo de clientes', note: 'período e critério de contagem a confirmar' },
        { icon: 'money', value: 'R$ 85 mi', label: 'Faturamento e volume de vendas', note: '' },
        { icon: 'insta', value: '48 mil', label: 'Seguidores no Instagram', note: '' },
        { icon: 'reach', value: '320 mil', label: 'Alcance mensal no Instagram', note: '' },
        { icon: 'eye', value: '1,5 mi', label: 'Visualizações de Reels e Stories', note: '' },
        { icon: 'heart', value: '6,8%', label: 'Engajamento nas redes sociais', note: '' },
        { icon: 'bag', value: '12 mil', label: 'Pedidos e acessos ao delivery e ao site', note: '' },
        { icon: 'target', value: '+35%', label: 'Resultados de ações e campanhas comerciais', note: '' } ],
      note: 'Valores de exemplo: substitua pelos números reais antes de compartilhar.' },

    { id: 'presenca-digital', kind: 'story', visible: true, badge: 'Presença digital', eyebrow: 'Nossa presença digital',
      title: 'Nossa presença vai *além da loja.*',
      text: 'A comunicação do Supermercado Manaíra acompanha nossos clientes dentro e fora do ambiente de compra.\n\nPor meio das redes sociais e dos nossos canais digitais, divulgamos ofertas, apresentamos novidades, valorizamos produtos e compartilhamos conteúdos que fazem parte da rotina dos consumidores.\n\nEssa presença amplia as possibilidades de divulgação dos nossos parceiros, permitindo que suas marcas estejam presentes tanto na comunicação diária do supermercado quanto nas campanhas e ações desenvolvidas ao longo do ano.',
      image: '', imageCaption: 'Feed · Reels · Stories', video: '',
      items: [ { icon: 'reach', title: '320 mil', text: 'Alcance mensal' }, { icon: 'eye', title: '1,5 mi', text: 'Visualizações' }, { icon: 'heart', title: '6,8%', text: 'Engajamento' } ],
      quote: 'A força da nossa operação física, ampliada pela visibilidade dos nossos canais digitais.' },

    { id: 'plano-essencial', kind: 'plan', visible: true, badge: 'Planos 2027', title: 'Essencial', tier: 'sky', stars: 1,
      monthly: 'R$ 3.000,00', annual: 'R$ 36.000,00', video: '',
      items: [
        { icon: 'encarte', title: 'Encarte digital', text: 'Inclusão de produtos em encarte digital durante 4 dias por mês.' },
        { icon: 'acoes', title: 'Ações internas e externas', text: ACOES },
        { icon: 'radio', title: 'Rádio interna', text: RADIO },
        { icon: 'site', title: 'Banner no site', text: 'Exposição publicitária no site do Supermercado Manaíra durante 6 meses ao longo do ano.' },
        { icon: 'correlato', title: 'Correlato sazonal', text: 'Oportunidade de exposição de produtos em espaços promocionais, conforme o calendário comercial e a disponibilidade da loja.' } ] },

    { id: 'plano-premium', kind: 'plan', visible: true, badge: 'Planos 2027', title: 'Premium', tier: 'red', stars: 2,
      monthly: 'R$ 6.000,00', annual: 'R$ 72.000,00', video: '',
      items: [
        { icon: 'encarte', title: 'Encarte digital', text: 'Inclusão de produtos em encarte digital durante 6 dias por mês.' },
        { icon: 'acoes', title: 'Ações internas e externas', text: ACOES },
        { icon: 'radio', title: 'Rádio interna', text: RADIO },
        { icon: 'site', title: 'Banner no site', text: 'Exposição publicitária no site do Supermercado Manaíra durante 6 meses ao longo do ano.' },
        { icon: 'tv', title: 'TV interna', text: 'Divulgação publicitária nas TVs internas do supermercado durante os 12 meses do plano anual.' },
        { icon: 'telao', title: 'Telão externo', text: 'Exibição de conteúdos publicitários no telão externo durante os 12 meses do plano anual.' },
        { icon: 'ponto', title: 'Ponto extra sazonal', text: 'Oportunidade de exposição diferenciada de produtos em períodos sazonais, conforme planejamento e disponibilidade dos espaços.' },
        { icon: 'correlato', title: 'Correlato sazonal', text: 'Exposição promocional de produtos em períodos estratégicos, conforme disponibilidade.' },
        { icon: 'foto', title: 'Foto no feed', text: '1 produção fotográfica para publicação no Instagram do Supermercado Manaíra.' } ] },

    { id: 'plano-master', kind: 'plan', visible: true, badge: 'Planos 2027', title: 'Master', tier: 'navy', stars: 3,
      monthly: 'R$ 20.000,00', annual: 'R$ 240.000,00', video: '',
      items: [
        { icon: 'encarte', title: 'Encarte digital', text: 'Inclusão de produtos em encarte digital durante 8 dias por mês.' },
        { icon: 'acoes', title: 'Ações internas e externas', text: ACOES },
        { icon: 'radio', title: 'Rádio interna', text: RADIO },
        { icon: 'site', title: 'Banner no site', text: 'Exposição publicitária no site do Supermercado Manaíra durante os 12 meses do plano anual.' },
        { icon: 'tv', title: 'TV interna', text: 'Divulgação publicitária nas TVs internas do supermercado durante os 12 meses do plano anual.' },
        { icon: 'telao', title: 'Telão externo', text: 'Exibição de conteúdos publicitários no telão externo durante os 12 meses do plano anual.' },
        { icon: 'correlato', title: 'Correlato sazonal', text: 'Exposição promocional de produtos em períodos estratégicos, conforme disponibilidade e planejamento.' },
        { icon: 'ponto', title: 'Ponto extra sazonal', text: 'Oportunidade de exposição diferenciada de produtos em espaços estratégicos da loja, conforme disponibilidade.' },
        { icon: 'piso', title: 'Adesivo de piso sazonal', text: 'Aplicação de comunicação visual da marca em espaços promocionais, conforme planejamento e disponibilidade.' },
        { icon: 'display', title: 'Display sazonal', text: 'Exposição de produtos por meio de displays promocionais, de acordo com os espaços disponíveis e o calendário comercial.' },
        { icon: 'vitrine', title: 'Vitrine de produtos no site', text: 'Destaque de produtos da marca em vitrine personalizada no site do supermercado durante 6 meses.' },
        { icon: 'video', title: 'Vídeo no feed', text: '1 produção audiovisual para publicação no Instagram do Supermercado Manaíra.' },
        { icon: 'foto', title: 'Foto no feed', text: '1 produção fotográfica para publicação no Instagram do Supermercado Manaíra.' } ] },

    ...[
      ['encarte-digital', 'encarte', 'Encarte digital', 'Ofertas em campanhas digitais', 'Seus produtos e preços em destaque nos encartes promocionais do Manaíra, divulgados nas campanhas digitais e compartilhados com nossos clientes.', { essencial: '4 dias/mês', premium: '6 dias/mês', master: '8 dias/mês' }, 'Stories 1080 × 1920 (9:16)'],
      ['foto-no-feed', 'foto', 'Produção fotográfica', 'Foto no feed do Instagram', 'Fotografias comerciais produzidas para divulgar seus produtos no Instagram do Supermercado Manaíra, valorizando produto, composição e a identidade da sua marca.', { premium: '1 foto', master: '1 foto' }, 'Feed 1080 × 1350 (4:5)'],
      ['video-no-feed', 'video', 'Produção audiovisual', 'Vídeo no feed do Instagram (Reels)', 'Vídeos comerciais que apresentam produtos e marcas nas redes sociais do Manaíra, com linguagem próxima do nosso público.', { master: '1 vídeo' }, 'Reels 1080 × 1920 (9:16)'],
      ['acoes', 'acoes', 'Ações promocionais e experiências', 'Ações internas e externas', 'Degustações, cafés da manhã, ativações promocionais e ações dentro e fora da loja, que aproximam sua marca dos consumidores no momento da compra.', ALL, 'Foto 3:2'],
      ['radio-interna', 'radio', 'Comunicação em rádio interna', 'Na programação da loja', 'Sua marca na programação interna do supermercado: slogans, características dos produtos, ofertas e ações promocionais ao longo do dia.', ALL, 'Foto 16:9'],
      ['telao', 'telao', 'Publicidade no telão', 'Telão externo', 'Sua campanha exibida no telão externo do Supermercado Manaíra, com grande visibilidade para quem passa pela loja.', { premium: '12 meses', master: '12 meses' }, 'Arte 1920 × 1080 (Full HD)'],
      ['tv-interna', 'tv', 'Publicidade em TV interna', 'TVs dentro da loja', 'Campanhas exibidas nas TVs instaladas no supermercado, falando com o cliente durante a jornada de compra.', { premium: '12 meses', master: '12 meses' }, 'Arte 1920 × 1080 (Full HD)'],
      ['banner-site', 'site', 'Banner digital', 'Banner no site e no app', 'Exposição publicitária da sua marca no site do Supermercado Manaíra, em posição de destaque para quem navega e compra online.', { essencial: '6 meses', premium: '6 meses', master: '12 meses' }, 'Site/App 2300 × 450 · Celular 720 × 525'],
      ['vitrine', 'vitrine', 'Vitrine de produtos', 'Vitrine no site', 'Uma vitrine personalizada que agrupa os produtos da sua marca no site do supermercado, facilitando a descoberta e a compra.', { master: '6 meses' }, 'Captura de tela 16:9'],
      ['ponto-extra', 'ponto', 'Exposição em ponto extra', 'Ponto extra sazonal', 'Seus produtos expostos em locais estratégicos da loja, além das posições habituais, nos períodos sazonais de maior movimento.', { premium: 'Incluso', master: 'Incluso' }, 'Foto 3:4'],
      ['correlatos', 'correlato', 'Exposição de produtos correlatos', 'Correlato sazonal', 'Produtos complementares expostos juntos, em espaços que favorecem a compra associada e aumentam a visibilidade da sua marca.', ALL, 'Foto 3:4'],
      ['displays-adesivos', 'display', 'Comunicação visual no ponto de venda', 'Displays e adesivos de piso', 'Displays promocionais e adesivos de piso que levam a identidade da sua marca para o ambiente de compra.', { master: 'Incluso' }, 'Foto 3:4'],
    ].map(([id, icon, title, subtitle, text, plans, format], i) => ({
      id, kind: 'benefit', visible: true, badge: 'Portfólio de benefícios', number: 'Benefício ' + String(i + 1).padStart(2, '0'),
      icon, title, subtitle, text, plans: { essencial: '', premium: '', master: '', ...plans }, format, image: '', video: '' })),

    { id: 'condicoes', kind: 'story', visible: true, badge: 'Condições gerais', eyebrow: 'Condições gerais',
      title: 'Planejamento *e execução.*', text: '', image: '', imageCaption: '', video: '',
      items: [
        { icon: 'calendar', title: 'Planejamento prévio', text: 'As ações e divulgações previstas nos planos serão organizadas por meio de planejamento prévio entre o Supermercado Manaíra e os fornecedores participantes.' },
        { icon: 'store', title: 'Disponibilidade', text: 'As ativações presenciais e os formatos de exposição física estarão sujeitos à disponibilidade de espaço, adequação dos produtos e alinhamento do calendário comercial.' },
        { icon: 'doc', title: 'Especificações técnicas', text: 'Os materiais publicitários deverão atender às especificações técnicas e aos prazos estabelecidos pelo setor de Marketing.' },
        { icon: 'pen', title: 'Formalização', text: 'As condições comerciais e a distribuição das entregas serão formalizadas nos respectivos instrumentos contratuais.' } ],
      quote: '' },

    { id: 'contato', kind: 'contact', visible: true, badge: 'Contato', title: 'Vamos construir um novo ano de *oportunidades.*',
      text: 'Fale com o nosso time de Marketing para escolher o plano ideal para a sua marca em 2027.',
      name: 'Anny Beatriz', role: 'Gerência de Marketing', phone: '(83) 99134-9268', email: 'supermercadomanairamkt@gmail.com', photo: '', video: '' },

    { id: 'encerramento', kind: 'closing', visible: true, title: '57 anos de história.', subtitle: 'Um futuro de *novas parcerias.*',
      text: 'Obrigado por fazer parte da nossa história.', video: '' },
  ],
};
