const { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, isOwner, isPrems, command, text, usedPrefix }) => {
    let lang = db.data.users[m.sender].language 
    if(!text) throw `Example: ${usedPrefix}${command} Martin Garrix - Animals`
    m.reply('𝐖𝐚𝐢𝐭 𝐏𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐧𝐠..⏳')
    let anu = await youtubeSearch(text)
    let vid = anu.video
    let vide 
    if (/playrand(om)?$/i.test(command)) vide = conn.rand(vid)
    else vide = vid[0]
    if(!vide) return conn.sendB(m.chat, await conn.trans('Video/Audio Not found'), wm, null, [[await conn.trans('Try Again'), `.play ${text}  Martin Garrix - Animals `]], m) 
    let { authorName, authorAvatar, title, description, url, thumbnail, videoId, durationH, viewH, publishedTime } = await vide
    let capt = `
📌 *Title:* ${title}
⌚ *Duration:* ${durationH}
👁️ *Viewers:* ${viewH}
⏲️ *Uploaded:* ${publishedTime}
👑 *Author Name:* ${authorName}
🚀 *Source:* ${url}`
    await conn.sendBD(m.chat, capt, wm, img, [['Audio', `${usedPrefix}yta ${url}`], ['Video', `${usedPrefix}ytv ${url}`]], m, { 
     contextInfo: {
     externalAdReply :{
     mediaUrl: `${url}`,
     mediaType: 2,
     description: deslink, 
     title: titlink, 
     body: bodlink,
     thumbnail: await(await fetch(thumbnail)).buffer()
     }} 
    })
  let user = db.data.users[m.sender]
  if (user.limit < 1 ) return  
  let limit
  if((isOwner || isPrems)) limit = 100
  else limit = 30
  try {
  let audi = await youtubedl(url)
  let { thumbnail, audio, title } = audi
  let det = audi.audio['128kbps']
  let { quality, fileSizeH, fileSize } = det
  let audiox = await det.download()
  let isLimit = (isPrems || isOwner ? limit : limit) * 1024 < fileSize
  if (!isLimit) await conn.sendMessage(m.chat, { document: { url: audiox }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: m})
  } catch {
  try {
  let audi = await youtubedlv2(url)
  let { thumbnail, audio, title } = audi
  let det = audi.audio['128kbps']
  let { quality, fileSizeH, fileSize } = det
  let audiox = await det.download()
  let isLimit = (isPrems || isOwner ? limit : limit) * 1024 < fileSize
  if (!isLimit) await conn.sendMessage(m.chat, { document: { url: audiox }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: m})
  } catch {
  try {
  let audi = await youtubedlv3(url)
  let { thumbnail, audio, title } = audi
  let det = audi.audio['128kbps']
  let { quality, fileSizeH, fileSize } = det
  let audiox = await det.download()
  let isLimit = (isPrems || isOwner ? limit : limit) * 1024 < fileSize
  if (!isLimit) await conn.sendMessage(m.chat, { document: { url: audiox }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: m})
  }  catch {
  try {
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb: thumbnail, title, filesize, filesizeF } = await yta(url, servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? limit : limit) * 1024 < filesize
  if (!isLimit) await conn.sendMessage(m.chat, { document: { url: dl_link }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: m})
  } catch {
    throw false 
        }
      }
    }
  }
}
handler.help = ['play'].map(v => v + '<query>')
handler.tags = ['downloader']
handler.command = /^play$/i

module.exports = handler

