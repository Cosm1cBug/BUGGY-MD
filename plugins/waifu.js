let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
  try {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  let json = await res.json()
  conn.sendBI(m.chat, `Requested by @${m.sender.split('@')[0]}`, wm, json.url, [[`Next`, `${usedPrefix}${command}`]], m, {mentions: [m.sender], jpegThumbnail: await(await fetch(json.url)).buffer()})
  } catch {
    throw eror 
  }
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i

handler.limit = true

module.exports = handler
