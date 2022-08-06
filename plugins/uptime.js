let handler = async (m, { usedPrefix, command }) => {
    let _uptime = process.uptime() * 1000
    let uptimex = clockString(_uptime)
    m.reply(uptimex)
    //conn.sendBL(m.chat, `${uptime}`, wm, await(await fetch(fla + `${command}`)).buffer(), [['Menu', `${usedPrefix}menu`]], m) 
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return ['*' + h + ' Hour* ', '*' + m + ' Minute* ', '*' + s + ' Second*'].map(v => v.toString().padStart(2, 0)).join(' ')
}
