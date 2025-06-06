// if this script errors, you may need to run `node node_modules/puppeteer/install.js`

var fs = require('fs')
var path = require('path')
const puppeteer = require('puppeteer')
const yaml = require('js-yaml')
const frontmatter = require('gray-matter')
var queue = require('queue')
const { utoa } = require('unicode-encode')

const sizes = {
  // height, width
  og: [630, 1200],
  pinterest: [1500, 1000],
  instagram: [1080, 1080]
}

// get arguments from npm script
const args = {}
process.argv.slice(2).forEach(arg => {
  const [ key, value ] = arg.split(':')
  args[key] = value
})

// determine if this is one post or many
let posts = []
if (fs.lstatSync(args.path).isDirectory()) {
  fs.readdirSync(args.path).forEach(file => {
    if (path.extname(file) === '.md' || path.extname(file) === '.markdown') {
      const filePath = `${args.path}${file}`
      const data = frontmatter(fs.readFileSync(filePath, 'utf8')).data
      posts.push({
        file,
        post: data
      })
    }
  })
} else {
  const filePath = args.path
  const data = frontmatter(fs.readFileSync(filePath, 'utf8')).data
  posts.push({
    file: path.basename(filePath),
    post: data
  })
}

// get the data for all authors
const authors = yaml.load(fs.readFileSync('./_data/authors.yml', 'utf8'))

// helper method to pass data to html page
function objectToParams(object) {
  const params = new URLSearchParams()
  Object.entries(object).map(entry => {
    let [key, value] = entry
    params.set(key, value)
  })
  return params.toString()
}

// get only data relevant to screenshot
const urls = posts.map(({ post }) => objectToParams({
    'post-title': post.seo_title || post.title || '',
    'post-excerpt': post.description || post.excerpt || '',
    'author-name': post.author && authors[post.author]?.name || authors['lsolesen'].name || '',
    'author-image': post.author && authors[post.author]?.avatar || authors['lsolesen'].avatar || '',
    'post-image': post.header?.featured_image || post.header?.image || post.header?.overlay_image || post.header?.teaser || 'https://images.unsplash.com/photo-1535743686920-55e4145369b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80',
}))
.map(params => {
  const url = `http://127.0.0.1:4040/generate-image/${args.type}?${utoa(params)}`
  return url
})

// call chromium, get a buffer
async function takeScreenshot(url, file_path) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({
    height: sizes[args.type][0],
    width: sizes[args.type][1],
    deviceScaleFactor: 1,
  })
  await page.goto(url)
  await page.screenshot({
    path: file_path,
    type: "jpeg",
    fullPage: true
  })
  await page.close()
  await browser.close()
}

// take a buffer, save an image
async function generateImage(url, path) {
  // strip leading and trailing slashes off of link
  const fixedPath = () => {
    const letters = [...path]
    if (letters[0] === '/') { delete letters[0] }
    if (letters[letters.length - 1] === '/') { delete letters[letters.length - 1] }
    return letters.join('').replace(/\//g, '-')
  }
  let fileName = `./build/generated/${args.type}/${fixedPath()}.jpg`
  await takeScreenshot(url, fileName)
  console.log('file saved to ', fileName)
}

// set up a queue so 200+ chromium instances don't open...
var taskList = queue({ results: [] })
taskList.concurrency = 1

// match up urls and posts, save images with the correct file name
// push them to the queue
posts.map(async ({ file, post }, index) => {
  if (!post.category || !post.category[0]) {
    console.error(`Missing category at index ${index}: File = ${file}`, post);
  }

  if(post.permalink) {
    // not every page has a set permalink...
    taskList.push(() => generateImage(urls[index], post.permalink))
  } else {
    // ... so follow the `permalink: /:categories/:title/` pattern from _config.yaml
    const category = post.category[0].toLowerCase()
    
    // build the title different if this is a single file or from a directory
    let title
    if (fs.lstatSync(args.path).isDirectory()) {
      title = `${args.path}${file.match(/\d\d\d\d-\d\d-\d\d-(.*).md/)[1]}`
    } else {
      title = file.match(/\d\d\d\d-\d\d-\d\d-(.*).md/)[1]
    }

    const permalink = `${category}/${title}`
    taskList.push(() => generateImage(urls[index], permalink))
  }
})

taskList.start(function (err) {
  if (err) throw err
  console.log('done generating images')
})
