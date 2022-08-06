let fetch = require('node-fetch')
let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

const someRegex = /xnxx|porn|xvideos|hentai|pornhub|gay|lesbian|fuck|ass|boobs|breast|big boops|boobies|as s|milf|slut|stepsister|xhamster|he n ta i|fucking|tits|titties|boobies|butt|buttfuck|porno|sex|sexy|stepdaughter|teen daughter/i

let handler  = async (m, { conn, usedPrefix, command, args, text }) => {
  if (!text) return m.reply(`Where's the query?`)
  if (someRegex.test(text)) throw 'Search blocked!'
  try {
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return m.reply('Sorry image not found!')
  let sell = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`
  await conn.sendBI(m.chat, sell, wm, url, [[`Next`, `${usedPrefix}${command} ${text}`]], m, {jpegThumbnail: await(await fetch(url)).buffer() })
  } catch {
    throw eror 
    }
  }
handler.help = ['image <query>']
handler.tags = ['internet']
handler.command = /^(gimage|image)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
