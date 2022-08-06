let handler = async (m, { conn, command, usedPrefix, text }) => {
  let fetch = require('node-fetch')
  let _uptime = process.uptime() * 1000
  let a = require('moment-timezone').tz('Asia/Kolkata').format('HH:mm:ss') 
  let d = new Date(new Date + 3600000)
  let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  let runtime = clockString(_uptime)
  let usergakdaftar = Object.keys(global.db.data.users).length
  let userdaftar = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let infonyacok = `
${sa}${kki} 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 ${kka}
${gy} 𝐍𝐚𝐦𝐞: 𝐁𝐔𝐆𝐆𝐘
${gy} 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: *${versibot}*
${gy} 𝐋𝐢𝐛𝐫𝐚𝐫𝐲: 𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃
${gy} 𝐋𝐚𝐧𝐠𝐮𝐚𝐠𝐞: 𝐉𝐚𝐯𝐚𝐬𝐜𝐫𝐢𝐩𝐭
${gy} 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞: 𝐌𝐨𝐧𝐠𝐨𝐃𝐁
${gy} 𝐔𝐩𝐭𝐢𝐦𝐞: *${runtime}*
${gy} 𝐏𝐫𝐞𝐟𝐢𝐱: *「 ${usedPrefix} 」*
${gy} 𝐌𝐨𝐝𝐞: *${global.opts['self'] ? 'Self' : 'Public'}*
${gy} 𝐔𝐬𝐞𝐫𝐬: *${usergakdaftar}*
${sb}
`.trim()
var as = `Date : ${week}, ${date}\nTime : ${a} `
 //conn.sendTBL(m.chat, infonyacok, as, fla + `${command}`, `Source Code Bot ✨`, `https://github.com/raselcomel/lucubot-md`, null, null, `Menu`, `${usedPrefix}menu`, null, null, null, null, m, 
     conn.sendBL(m.chat, infonyacok, as, fla + `${command}`, [[`Menu`, `.m`]], m,        
           {mentions: ['918075495979@s.whatsapp.net']})

}
handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(info(bot)?)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

