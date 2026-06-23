const FONT_STEP = 5
const FONT_MIN = 10
const FONT_MAX = 40
const FONT_DEFAULT = 20

const navbarHTML = `
<header class="navbar">
  <div class="navbar-main">
    <a href="index.html" class="logo">
      <img src="assets/images/duck-head.svg" alt="The Duck Society logo" class="logo-img" />
    </a>
    <nav>
      <a href="index.html" class="nav-link" data-i18n="nav-home">Home</a>
      <a href="pages/blog.html" class="nav-link" data-i18n="nav-blog">Blog</a>
      <a href="pages/about.html" class="nav-link" data-i18n="nav-about">About</a>
      <button class="nav-link lang-toggle" id="langToggle" data-i18n="lang-btn">PT</button>
      <button class="nav-link font-toggle" id="fontFamilyToggle">Aa</button>
      <button class="nav-link font-toggle" id="fontDec"><span class="a-lg">A</span><span class="a-sm">A</span></button>
      <button class="nav-link font-toggle" id="fontInc"><span class="a-sm">A</span><span class="a-lg">A</span></button>
      <button class="nav-link theme-toggle" id="themeToggle">&#9728;</button>
    </nav>
  </div>
</header>
`

const translations = {
  pt: {
    'nav-home': 'In\u00edcio',
    'nav-blog': 'Blog',
    'nav-about': 'Sobre',
    'lang-btn': 'PT',
    'hero-sub': '\u2265 Apenas dev \u2264',
    welcome: 'Seja bem vindo(a)!',
    'card-posts-title': '\u00daltimos posts',
    'card-about-title': 'Sobre mim',
    'card-link-posts': 'ver todos \u2192',
    'card-link-about': 'me conhecer \u2192',
    'about-snippet': 'Apenas uma desenvolvedora que ama patos e t\u00e1 tentando escrever o aprendizado e compartilhar :).',
    'about-title': 'Oi, eu sou a Mari!',
    'about-bio-1': 'Desenvolvedora backend Java apaixonada por sistemas de pagamento, microsservi\u00e7os e boas pr\u00e1ticas de engenharia. Trabalho com Spring Boot, AWS e todo aquele universo de fintech. Aqui eu escrevo sobre o que aprendo, o que me desafia e o que me diverte no mundo do dev.',
    'about-bio-2': 'Fora do trabalho, gosto de criar coisa \u2014 inclusive essa fonte que voc\u00ea t\u00e1 lendo agora. \ud83e\udd86',
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
  },
  en: {
    'nav-home': 'Home',
    'nav-blog': 'Blog',
    'nav-about': 'About',
    'lang-btn': 'EN',
    'hero-sub': '\u2265 Just a dev \u2264',
    welcome: 'Welcome!',
    'card-posts-title': 'Latest posts',
    'card-about-title': 'About me',
    'card-link-posts': 'see all \u2192',
    'card-link-about': 'know me \u2192',
    'about-snippet': 'Backend Java developer, passionate about payment systems, ducks, and good code practices.',
    'about-title': 'Hi, I\u2019m Mari!',
    'about-bio-1': 'Backend Java developer passionate about payment systems, microservices, and good engineering practices. I work with Spring Boot, AWS, and the whole fintech universe. Here I write about what I learn, what challenges me, and what I enjoy in the dev world.',
    'about-bio-2': 'Outside work, I like to create things \u2014 including this font you\u2019re reading right now. \ud83e\udd86',
    'about-bio-2-alt': 'Outside work, I like to create things \u2014 (same font as this site, but not this one right now) \ud83e\udd86',
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
  var isInPages = window.location.pathname.indexOf('/pages/') !== -1
  var html = navbarHTML
  if (isInPages) {
    html = html.replace(/(href=")(?!http|#|\/)/g, '$1../')
    html = html.replace(/(src=")(?!http|#|\/)/g, '$1../')
  }
  placeholder.outerHTML = html
}

function initNavbar() {
  var savedLang = localStorage.getItem('duck-lang') || 'pt'
  var savedTheme = localStorage.getItem('duck-theme') || 'dark'
  var savedFont = parseInt(localStorage.getItem('duck-font'), 10) || FONT_DEFAULT
  var savedFontFamily = localStorage.getItem('duck-font-family') || 'custom'

  try { applyFontFamily(savedFontFamily === 'alt') } catch(e) {}
  try { applyLanguage(savedLang) } catch(e) {}
  try { applyTheme(savedTheme) } catch(e) {}
  try { applyFontSize(savedFont) } catch(e) {}

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
      var next = Math.min(current + FONT_STEP, FONT_MAX)
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

function initBlogFilters() {
  var grid = document.getElementById('postGrid')
  if (!grid) return

  var cards = Array.from(grid.querySelectorAll('.post-card'))
  var controls = document.querySelector('.blog-controls')

  if (cards.length === 0) {
    if (controls) controls.style.display = 'none'
    return
  }

  if (controls) controls.style.display = ''

  var tags = []
  var seen = {}
  cards.forEach(function(c) {
    var t = c.getAttribute('data-tag')
    if (t && !seen[t]) { seen[t] = true; tags.push(t) }
  })
  tags.sort()

  var dates = []
  var seenD = {}
  cards.forEach(function(c) {
    var d = c.getAttribute('data-date')
    if (d && !seenD[d]) { seenD[d] = true; dates.push(d) }
  })
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

function isInternalLink(href) {
  if (!href) return false
  return href.indexOf('http') !== 0 && href.indexOf('mailto:') !== 0 && href.indexOf('#') !== 0
}

document.addEventListener('DOMContentLoaded', function() {
  try { injectNavbar() } catch(e) {}
  try { initNavbar() } catch(e) {}
  try { initBlogFilters() } catch(e) {}

  document.querySelectorAll('a[href]').forEach(function(link) {
    var href = link.getAttribute('href')
    if (!isInternalLink(href)) return
    link.addEventListener('click', function(e) {
      e.preventDefault()
      document.body.style.transition = 'opacity 0.2s ease'
      document.body.style.opacity = '0'
      var target = link.getAttribute('href')
      setTimeout(function() { window.location.href = target }, 200)
    })
  })
})
