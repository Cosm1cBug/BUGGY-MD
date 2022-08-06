let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command, text, args }) => {
    //try {
    var q = m.quoted ? m.quoted : m
    if (!q) throw `Send or reply to media with caption *${usedPrefix}${command}*\nnote: 10 second's max video`
    var mime = (q.msg || q).mimetype || ''
    try {
        if (/webp/.test(mime)) {
            var med = await q.download()
            //var med = await webp2png(ras)
            var sel = med
            //conn.sendStimg(m.chat, sel, m, { packname: packname, author: author })
        }
        else if (/image/.test(mime)) {
            var med = await q.download()
            var sel = med
            //conn.sendStimg(m.chat, sel, m, { packname: packname, author: author })
        }
        else if (/video/.test(mime)) {
            var med = await q.download()
            var sel = med
            //conn.sendStimg(m.chat, sel, m, { packname: packname, author: author })
        }
        else if (isUrl) {
            var url = `${args[0]}`
            var sel = url
            //conn.sendStimg(m.chat, sel, m, { packname: packname, author: author })
        }
    } finally {
        if (sel) conn.sendStimg(m.chat, sel, m, { packname: packname, author: author })
        else throw `Send or reply to media with caption *${usedPrefix}${command}*\nnote: 10 second's max video`
        //throw e //`Kirim atau balas media dengan caption *${usedPrefix}${command}*\nnote: video maksimal 10 detik`
    }
}
handler.help = ['sticker <reply/send media>']
handler.tags = ['sticker']
handler.command = /^(sticker|s)$/i

module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
