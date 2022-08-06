const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `Reply to pictures with commands\n\n${usedPrefix + command} <${atas ? atas : 'text above'}>|<${bawah ? bawah : 'text below'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Meme ${mime} are not supported!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    conn.sendStimg(m.chat, meme, m, { packname: packname, author: author })

}
handler.help = ['stickermeme <text>|<text>']
handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?me(me)?)$/i

handler.limit = false

module.exports = handler
