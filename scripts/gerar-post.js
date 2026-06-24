const fs = require('fs')
const path = require('path')

const args = process.argv.slice(2)

if (args.length >= 4) {
  var content = args[4] || ''
  var contentEn = args[5] || ''
  generate(args[0], '', args[1], args[2], args[3], content, contentEn)
} else {
  const readline = require('readline')
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  const ask = (q) => new Promise((r) => rl.question(q, r))

  ;(async () => {
    console.log('--- Digite em português os parâmetros ---')
    const title = await ask('Título: ')
    var date = await ask('Data (Enter para hoje): ')
    if (!date) {
      var d = new Date()
      var months = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez']
      date = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear()
    }
    const tag = await ask('Categoria: ')
    const slug = title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    const filename = await ask(`Arquivo (Enter para "${slug}"): `) || slug

    console.log('--- Digite em inglês ---')
    const titleEn = await ask('Title: ')

    generate(title, titleEn, date, tag, filename, '', '')
    rl.close()
  })()
}

function generate(title, titleEn, date, tag, filename, content, contentEn) {
  const postsPath = path.join(__dirname, '..', 'assets', 'js', 'posts.js')
  const outputPath = path.join(__dirname, '..', 'pages', 'posts', `${filename}.html`)

  var postsJs = fs.readFileSync(postsPath, 'utf-8')
  var slugExists = new RegExp('slug:\\s*"' + filename + '"').test(postsJs)
  var fileExists = fs.existsSync(outputPath)

  if (slugExists || fileExists) {
    console.log('ERRO: Já existe um post com o slug "' + filename + '".')
    process.exit(1)
  }

  var c = content || '<p>conte\u00fado pt br</p>'
  var cEn = contentEn || '<p>content en</p>'

  function firstP(html) {
    var m = html.match(/<p[^>]*>([\s\S]*?)<\/p>/)
    return m ? m[1].replace(/<[^>]+>/g, '').trim().substring(0, 120) : ''
  }

  const template = fs.readFileSync(path.join(__dirname, 'template-post.html'), 'utf-8')
  const html = template
    .replace(/\{\{postPageDate\}\}/g, date)
    .replace(/\{\{postPageTag\}\}/g, tag)
    .replace(/\{\{postPageTitle\}\}/g, title)
    .replace(/\{\{postPageTitleEn\}\}/g, titleEn || title)
    .replace(/\{\{postPageContent\}\}/g, c)
    .replace(/\{\{postPageContentEn\}\}/g, cEn)
  fs.writeFileSync(outputPath, html, 'utf-8')

const months = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez','jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
  const newEntry = `  {
    slug: "${filename}",
    title: "${title}",
    titleEn: "${titleEn || title}",
    date: "${date}",
    dateFilter: "${date.split(' ').pop()}-${String(months.indexOf(date.split(' ')[1].toLowerCase()) % 12 + 1).padStart(2, '0')}",
    tag: "${tag}",
    excerpt: "${firstP(c)}",
    excerptEn: "${firstP(cEn)}"
  },`

  postsJs = postsJs.replace(/\n\]/, '\n' + newEntry + '\n]')
  fs.writeFileSync(postsPath, postsJs, 'utf-8')

  console.log(`\nCriado: pages/posts/${filename}.html`)
  console.log(`Atualizado: assets/js/posts.js`)
}
