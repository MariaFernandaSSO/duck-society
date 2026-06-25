const FONT_STEP = 5
const FONT_MIN = 10
const FONT_MAX = 80
const FONT_DEFAULT = 40

function getViewportMax() {
  return Math.max(FONT_DEFAULT, Math.min(FONT_MAX, Math.floor(window.innerWidth / 15)))
}

const navbarHTML = `
<header class="navbar">
  <div class="navbar-main">
    <a href="index.html" class="logo">
      <img src="assets/images/duck-head.svg" alt="The Duck Society logo" class="logo-img" />
    </a>
    <button class="hamburger" id="navToggle" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="nav-group">
      <nav class="nav-links">
        <a href="index.html" class="nav-link" data-i18n="nav-home">Home</a>
        <a href="pages/blog.html" class="nav-link" data-i18n="nav-blog">Blog</a>
        <a href="pages/projetos.html" class="nav-link" data-i18n="nav-projetos">Projetos</a>
        <a href="pages/about.html" class="nav-link" data-i18n="nav-about">About</a>
      </nav>
      <nav class="nav-controls">
        <button class="nav-link lang-toggle" id="langToggle" data-i18n="lang-btn">PT</button>
        <button class="nav-link font-toggle" id="fontFamilyToggle">Aa</button>
        <button class="nav-link font-toggle" id="fontDec">A-</button>
        <button class="nav-link font-toggle" id="fontInc">A+</button>
        <button class="nav-link theme-toggle" id="themeToggle">&#9728;</button>
      </nav>
    </div>
  </div>
</header>
`

const translations = {
  pt: {
    'nav-home': 'In\u00edcio',
    'nav-blog': 'Blog',
    'nav-projetos': 'Projetos',
    'nav-about': 'Sobre',
    'lang-btn': 'PT',
    'hero-sub': '\u2265 Apenas dev \u2264',
    welcome: 'Seja bem vindo(a)!',
    'card-posts-title': '\u00daltimos posts',
    'card-about-title': 'Sobre mim',
    'card-link-posts': 'ver todos \u2192',
    'card-link-about': 'mais sobre mim \u2192',
    'about-snippet': 'Desenvolvedora apaixonada por backend, mas que n\u00e3o foge do front. Aqui compartilho o que aprendo no dia a dia — c\u00f3digo, arquitetura e algumas pataquadas fora disso.',

    'about-title': 'Oi, eu sou a Mari!',

    'about-bio-1': 'Desenvolvedora com foco em backend \u2014 Java \u00e9 minha linguagem principal, mas tenho experi\u00eancia com Node.js/NestJS tamb\u00e9m e n\u00e3o fujo do front quando precisa. Tenho cerca de 2 anos e meio no setor banc\u00e1rio e de pagamentos, trabalhando com microsservi\u00e7os, APIs e integra\u00e7\u00f5es financeiras, e 2 anos com projetos freelance. Por aqui escrevo sobre o que aprendo no dia a dia: c\u00f3digo, arquitetura, ferramentas e os desafios de construir sistemas. Fora alguns t\u00f3picos fora disso tamb\u00e9m, quem sabe. Fora do trabalho, gosto de criar coisa \u2014 inclusive essa fonte que voc\u00ea t\u00e1 lendo agora. \ud83e\udd86',
    'about-bio-2': '',
    'about-bio-2-alt': 'Fora do trabalho, gosto de criar coisa \u2014 (igual a fonte que tem nesse site, mas, n\u00e3o \u00e9 essa de agora n\u00e3o) \ud83e\udd86',
    'stack-title': 'Habilidades T\u00e9cnicas',
    'why-title': 'Por que \u2018The Duck Society\u2019 ?',
    'why-text': '\u00c9 simples, eu s\u00f3 gosto de patos mesmo :)',
    'read-more': 'ler \u2192',
    'blog-title': 'Blog',
    'sort-newest': 'Mais recentes',
    'sort-oldest': 'Mais antigos',
    'all-tags': 'Todas categorias',
    'all-dates': 'Todos os meses',
    'notfound-msg': 'Nada por aqui... s\u00f3 um pato perdido.',
    'notfound-back': 'voltar pro ninho \u2192',
    'projetos-title': 'Em breve',
    'projetos-msg': 'Portf\u00f3lio em desenvolvimento...',
  },
  en: {
    'nav-home': 'Home',
    'nav-blog': 'Blog',
    'nav-projetos': 'Projects',
    'nav-about': 'About',
    'lang-btn': 'EN',
    'hero-sub': '\u2265 Just a dev \u2264',
    welcome: 'Welcome!',
    'card-posts-title': 'Latest posts',
    'card-about-title': 'About me',
    'card-link-posts': 'see all \u2192',
    'card-link-about': 'more about me \u2192',
    'about-snippet': 'Backend enthusiast who doesn\u2019t run from frontend either. Here I share what I learn daily \u2014 code, architecture, and some ducky shenanigans along the way.',

    'about-title': 'Hi, I\u2019m Mari!',

    'about-bio-1': 'Backend-focused developer \u2014 Java is my main language, but I also have experience with Node.js/NestJS and I don\u2019t run from frontend when needed. About 2.5 years in banking and payments, working with microservices, APIs and financial integrations, plus 2 years with freelance projects. Here I write about what I learn daily: code, architecture, tools and the challenges of building systems. Maybe some other topics too, who knows. Outside work, I like to create things \u2014 including this font you\u2019re reading right now. \ud83e\udd86',
    'about-bio-2': '',
    'about-bio-2-alt': '',
    'stack-title': 'Technical Skills',
    'why-title': 'Why \u2018The Duck Society\u2019 ?',
    'why-text': 'It\u2019s simple, I just like ducks :)',
    'read-more': 'read \u2192',
    'blog-title': 'Blog',
    'sort-newest': 'Newest',
    'sort-oldest': 'Oldest',
    'all-tags': 'All categories',
    'all-dates': 'All months',
    'notfound-msg': 'Nothing here... just a lost duck.',
    'notfound-back': 'back to the nest \u2192',
    'projetos-title': 'Coming soon',
    'projetos-msg': 'Portfolio under construction...',
  },
}

function applyLanguage(lang) {
  document.documentElement.lang = lang
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n')
    var text = translations[lang] && translations[lang][key]
    if (text !== undefined && text !== null) el.textContent = text
  })
  var btn = document.getElementById('langToggle')
  if (btn) btn.textContent = translations[lang]['lang-btn']

  var bio = document.getElementById('aboutBio2')
  if (bio) {
    var isAlt = document.documentElement.classList.contains('font-alt')
    var k = isAlt ? 'about-bio-2-alt' : 'about-bio-2'
    var t = translations[lang] && translations[lang][k]
    if (t) bio.textContent = t
  }

  document.querySelectorAll('[data-post-lang]').forEach(function(el) {
    el.hidden = el.getAttribute('data-post-lang') !== lang
  })
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  var btn = document.getElementById('themeToggle')
  if (btn) btn.textContent = theme === 'dark' ? '\u2600' : '\u263E'
}

function applyFontSize(size) {
  document.documentElement.style.fontSize = size + 'px'
  localStorage.setItem('duck-font', size)
}

function applyFontFamily(useAlt) {
  var html = document.documentElement
  if (useAlt) {
    html.classList.add('font-alt')
  } else {
    html.classList.remove('font-alt')
  }
  localStorage.setItem('duck-font-family', useAlt ? 'alt' : 'custom')

  var bio = document.getElementById('aboutBio2')
  if (bio) {
    var lang = document.documentElement.lang || 'pt'
    var k = useAlt ? 'about-bio-2-alt' : 'about-bio-2'
    var t = translations[lang] && translations[lang][k]
    if (t) bio.textContent = t
  }
}

function injectNavbar() {
  var placeholder = document.getElementById('navbar')
  if (!placeholder) return
  var html = navbarHTML
  var path = window.location.pathname
  var pagesIdx = path.indexOf('/pages/')
  if (pagesIdx !== -1) {
    var afterPages = path.substring(pagesIdx + 7)
    var depth = 1 + (afterPages.match(/\//g) || []).length
    var prefix = Array(depth).fill('..').join('/')
    html = html.replace(/(href=")(?!http|#|\/)/g, '$1' + prefix + '/')
    html = html.replace(/(src=")(?!http|#|\/)/g, '$1' + prefix + '/')
  }
  placeholder.outerHTML = html
}

function injectFavicon() {
  var path = window.location.pathname
  var pagesIdx = path.indexOf('/pages/')
  var prefix = ''
  if (pagesIdx !== -1) {
    var afterPages = path.substring(pagesIdx + 7)
    var depth = 1 + (afterPages.match(/\//g) || []).length
    prefix = Array(depth).fill('..').join('/') + '/'
  }
  var link = document.createElement('link')
  link.rel = 'icon'
  link.type = 'image/svg+xml'
  link.sizes = 'any'
  link.href = prefix + 'assets/images/duck-head-logo.svg'
  document.head.appendChild(link)
}

function initNavbar() {
  var savedLang = localStorage.getItem('duck-lang') || 'pt'
  var savedTheme = localStorage.getItem('duck-theme') || 'dark'
  var savedFont = parseInt(localStorage.getItem('duck-font'), 10) || FONT_DEFAULT
  var savedFontFamily = localStorage.getItem('duck-font-family') || 'custom'

  try { applyFontFamily(savedFontFamily === 'alt') } catch(e) {}
  try { applyLanguage(savedLang) } catch(e) {}
  try { applyTheme(savedTheme) } catch(e) {}
  try { applyFontSize(Math.min(savedFont, getViewportMax())) } catch(e) {}

  var toggle = document.getElementById('navToggle')
  if (toggle) {
    toggle.addEventListener('click', function() {
      document.querySelector('.navbar').classList.toggle('nav-open')
    })
  }

  var navbar = document.querySelector('.navbar')
  navbar.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      navbar.classList.remove('nav-open')
    })
  })

  var current = window.location.pathname
  document.querySelectorAll('.nav-link[href]').forEach(function(link) {
    var href = link.getAttribute('href')
    if (!href) return
    var clean = href.replace('../', '').replace('./', '')
    if (current.indexOf(clean) !== -1 || current.endsWith(clean)) {
      document.querySelectorAll('.nav-link').forEach(function(l) { l.classList.remove('active') })
      link.classList.add('active')
    }
  })

  var langBtn = document.getElementById('langToggle')
  if (langBtn) {
    langBtn.addEventListener('click', function() {
      var langs = { pt: 'en', en: 'pt' }
      var next = langs[document.documentElement.lang] || 'en'
      applyLanguage(next)
      localStorage.setItem('duck-lang', next)
      try { initBlogFilters() } catch(e) {}
      try { initHomePosts() } catch(e) {}
    })
  }

  var fontToggle = document.getElementById('fontFamilyToggle')
  if (fontToggle) {
    fontToggle.addEventListener('click', function() {
      var isAlt = document.documentElement.classList.contains('font-alt')
      applyFontFamily(!isAlt)
    })
  }

  var themeBtn = document.getElementById('themeToggle')
  if (themeBtn) {
    themeBtn.addEventListener('click', function() {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
      applyTheme(next)
      localStorage.setItem('duck-theme', next)
    })
  }

  var fontInc = document.getElementById('fontInc')
  if (fontInc) {
    fontInc.addEventListener('click', function() {
      var current = parseInt(localStorage.getItem('duck-font'), 10) || FONT_DEFAULT
      var next = Math.min(current + FONT_STEP, getViewportMax())
      applyFontSize(next)
    })
  }

  var fontDec = document.getElementById('fontDec')
  if (fontDec) {
    fontDec.addEventListener('click', function() {
      var current = parseInt(localStorage.getItem('duck-font'), 10) || FONT_DEFAULT
      var next = Math.max(current - FONT_STEP, FONT_MIN)
      applyFontSize(next)
    })
  }
}

function initHomePosts() {
  var list = document.getElementById('homePostList')
  if (!list || typeof postsData === 'undefined') return

  list.innerHTML = ''

  var lang = document.documentElement.lang || 'pt'

  var filtered = postsData.filter(function(p) {
    return lang === 'pt' || p.titleEn
  })

  var sorted = filtered.slice().sort(function(a, b) {
    return b.dateFilter.localeCompare(a.dateFilter)
  })

  var recent = sorted.slice(0, 3)

  recent.forEach(function(post) {
    var pTitle = post.titleEn && lang === 'en' ? post.titleEn : post.title
    var item = document.createElement('div')
    item.className = 'post-item'
    item.innerHTML =
      '<span class="post-date">' + post.date + '</span>' +
      '<a href="pages/posts/' + post.slug + '.html" class="post-link">' + pTitle + '</a>'
    list.appendChild(item)
  })
}

function initDuckQuack() {
  var ducks = document.querySelectorAll('.stack-duck, .work-duck')
  if (!ducks.length) return

  var depth = window.location.pathname.indexOf('/pages/') !== -1 ? '../' : ''

  var quackAudio = new Audio(depth + 'assets/duck-sound.mp3')
  var constructionAudios = [
    new Audio(depth + 'assets/duck_construction.mp3'),
    new Audio(depth + 'assets/duck_makita.mp3')
  ]

  var constructionPhrases = {
    pt: ['Quack! Martelo!', 'Quack! Serra!', 'Quack! Prego!', 'Quack! Trena!', 'Quack! Broca!', 'Quack! Parafuso!'],
    en: ['Quack! Hammer!', 'Quack! Saw!', 'Quack! Nail!', 'Quack! Tape measure!', 'Quack! Drill!', 'Quack! Screw!']
  }
  var makitaPhrases = { pt: 'Quack Makita!', en: 'Quack Makita!' }

  var playing = false
  var nextAudio = null

  function showBubble(text, duck) {
    var bubble = document.createElement('span')
    bubble.className = 'quack-bubble'
    bubble.textContent = text

    var rect = duck.getBoundingClientRect()
    var x = rect.left + rect.width / 2 + (Math.random() - 0.5) * rect.width * 0.6
    var y = rect.top + (Math.random() - 0.5) * rect.height * 0.4

    bubble.style.left = x + 'px'
    bubble.style.top = y + 'px'
    document.body.appendChild(bubble)
    setTimeout(function() { bubble.remove() }, 800)
  }

  function playNext() {
    if (!nextAudio) { playing = false; return }
    playing = true
    var audio = nextAudio
    nextAudio = null
    audio.currentTime = 0
    audio.play()
    audio.onended = playNext
  }

  ducks.forEach(function(duck) {
    duck.style.cursor = 'pointer'
    duck.addEventListener('click', function(e) {
      var lang = document.documentElement.lang || 'pt'
      var audio, text

      if (duck.classList.contains('work-duck')) {
        var idx = Math.floor(Math.random() * constructionAudios.length)
        audio = constructionAudios[idx]
        if (idx === 1) {
          text = makitaPhrases[lang] || makitaPhrases.pt
        } else {
          var phrases = constructionPhrases[lang] || constructionPhrases.pt
          text = phrases[Math.floor(Math.random() * phrases.length)]
        }
      } else {
        audio = quackAudio
        text = 'Quack!'
      }

      showBubble(text, duck)
      nextAudio = audio
      if (!playing) playNext()
    })
  })
}

function initBlogFilters() {
  var grid = document.getElementById('postGrid')
  if (!grid || typeof postsData === 'undefined') return
  if (grid.dataset.initialized) return
  grid.dataset.initialized = 'true'

  var controls = document.querySelector('.blog-controls')

  if (postsData.length === 0) {
    if (controls) controls.style.display = 'none'
    return
  }

  if (controls) controls.style.display = ''
  grid.innerHTML = ''

  var lang = document.documentElement.lang || 'pt'
  var filtered = postsData.filter(function(p) { return lang === 'pt' || p.titleEn })

  var cards = []
  var tags = []
  var seenTag = {}
  var dates = []
  var seenDate = {}

  filtered.forEach(function(post) {
    if (post.tag && !seenTag[post.tag]) { seenTag[post.tag] = true; tags.push(post.tag) }
    if (post.dateFilter && !seenDate[post.dateFilter]) { seenDate[post.dateFilter] = true; dates.push(post.dateFilter) }

    var card = document.createElement('article')
    card.className = 'post-card'
    card.setAttribute('data-tag', post.tag || '')
    card.setAttribute('data-date', post.dateFilter || '')

    var lang = document.documentElement.lang || 'pt'
    var pTitle = post.titleEn && lang === 'en' ? post.titleEn : post.title
    var pExcerpt = post.excerptEn && lang === 'en' ? post.excerptEn : post.excerpt

    card.innerHTML =
      '<div class="post-tag">' + (post.tag || '') + '</div>' +
      '<h3 class="post-card-title"><a href="posts/' + post.slug + '.html">' + pTitle + '</a></h3>' +
      '<p class="post-card-excerpt">' + pExcerpt + '</p>' +
      '<div class="post-card-meta">' +
        '<span class="post-date">' + post.date + '</span>' +
        '<a href="posts/' + post.slug + '.html" class="read-more" data-i18n="read-more">ler \u2192</a>' +
      '</div>'

    grid.appendChild(card)
    cards.push(card)

    ;(function(c, s, l) {
      fetch('posts/' + s + '.html').then(function(r) { return r.text() }).then(function(html) {
        var parser = new DOMParser()
        var doc = parser.parseFromString(html, 'text/html')
        var div = doc.querySelector('[data-post-lang="' + l + '"]')
        var p = div ? div.querySelector('p') : null
        if (p) {
          var text = p.textContent.trim().substring(0, 200)
          var excerptEl = c.querySelector('.post-card-excerpt')
          if (excerptEl) excerptEl.textContent = text
        }
      }).catch(function() {})
    })(card, post.slug, lang)
  })

  tags.sort()

  dates.sort().reverse()

  var lang = document.documentElement.lang || 'pt'

  var tagFilter = document.getElementById('tagFilter')
  if (tagFilter) {
    tagFilter.innerHTML = ''
    var all = document.createElement('option')
    all.value = 'all'
    all.textContent = (translations[lang] && translations[lang]['all-tags']) || 'Todas categorias'
    tagFilter.appendChild(all)
    tags.forEach(function(t) {
      var opt = document.createElement('option')
      opt.value = t
      opt.textContent = t
      tagFilter.appendChild(opt)
    })
  }

  var dateFilter = document.getElementById('dateFilter')
  if (dateFilter) {
    dateFilter.innerHTML = ''
    var allD = document.createElement('option')
    allD.value = 'all'
    allD.textContent = (translations[lang] && translations[lang]['all-dates']) || 'Todos os meses'
    dateFilter.appendChild(allD)
    dates.forEach(function(d) {
      var opt = document.createElement('option')
      opt.value = d
      var parts = d.split('-')
      var y = parts[0], m = parts[1]
      var months = {
        'pt': ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        'en': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
      opt.textContent = (months[lang] && months[lang][parseInt(m, 10) - 1] || '') + ' ' + y
      dateFilter.appendChild(opt)
    })
  }

  function filterAndSort() {
    var selectedTag = tagFilter ? tagFilter.value : 'all'
    var selectedDate = dateFilter ? dateFilter.value : 'all'
    var activeBtn = document.querySelector('.sort-btn.active')
    var sortOrder = activeBtn ? activeBtn.getAttribute('data-sort') : 'newest'

    var filtered = cards.filter(function(c) {
      var tagMatch = selectedTag === 'all' || c.getAttribute('data-tag') === selectedTag
      var dateMatch = selectedDate === 'all' || c.getAttribute('data-date') === selectedDate
      return tagMatch && dateMatch
    })

    filtered.sort(function(a, b) {
      var dA = a.getAttribute('data-date'), dB = b.getAttribute('data-date')
      return sortOrder === 'newest' ? dB.localeCompare(dA) : dA.localeCompare(dB)
    })

    filtered.forEach(function(c) { grid.appendChild(c); c.style.display = 'flex' })
    cards.forEach(function(c) {
      if (filtered.indexOf(c) === -1) c.style.display = 'none'
    })
  }

  if (tagFilter) tagFilter.addEventListener('change', filterAndSort)
  if (dateFilter) dateFilter.addEventListener('change', filterAndSort)

  document.querySelectorAll('.sort-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.sort-btn').forEach(function(b) { b.classList.remove('active') })
      btn.classList.add('active')
      filterAndSort()
    })
  })

  filterAndSort()
}

document.addEventListener('DOMContentLoaded', function() {
  try { injectNavbar() } catch(e) {}
  try { injectFavicon() } catch(e) {}
  try { initNavbar() } catch(e) {}
  try { initBlogFilters() } catch(e) {}
  try { initHomePosts() } catch(e) {}
  try { initDuckQuack() } catch(e) {}
})
