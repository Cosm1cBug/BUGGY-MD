let handler = async (m, { conn, text, usedPrefix, args, participants }) => {
  var time = db.data.users[m.sender].lastjoin + 86400000
  if (new Date - db.data.users[m.sender].lastjoin < 86400000) throw `You've been using the daily bot invite limit today\n wait for ${msToTime(time - new Date())} seconds and try again`
  var linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  var delay = time => new Promise(res => setTimeout(res, time))
 
  var name = m.sender
  var fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '918075495979@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  var [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `Which link?` 
  if (!code) throw `Link not valid!`
  var anubot = owner[0]
  m.reply(`Wait 3 seconds the bot will join`)
  await delay(3000)
  try {
  var res = await conn.groupAcceptInvite(code)
  var b = await conn.groupMetadata(res)
  var d = b.participants.map(v => v.id)
  var member = d.toString()
  var e = await d.filter(v => v.endsWith(anubot + '@s.whatsapp.net'))
  var jumlahHari = 86400000 * 0.1
  var now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
  else global.db.data.chats[res].expired = now + jumlahHari
  if (e.length) await m.reply(`Successfully invited bot to the group\n\n${await conn.getName(res)}\n\nThe bot will exit automatically after *${msToDate(global.db.data.chats[res].expired - now)}*`)
  if (e.length) await m.reply(res, `Hey @${anubot} I am here!
`, fkonn, {
    mentions: d
     }).then(async () => {
     await delay(5000)
     }).then( async () => {
     await conn.reply(res, `Hello Everyone👋🏻`, 0)
     await conn.reply(owner[0]+'@s.whatsapp.net', `*INVITING!*\n\n@${m.sender.split('@')[0]} Invited ${conn.user.name} to a group!\n\n𝙂𝙍𝙊𝙐𝙋 𝙉𝘼𝙈𝙀\n${await conn.getName(res)}\n\n${res}\n\nMessage : ${args[0]}\n`, null, {mentions: [m.sender]})
     })
     if (!e.length) await conn.reply(owner[0]+'@s.whatsapp.net', `*INVITING!*\n\n@${m.sender.split('@')[0]} Invited ${conn.user.name} to group\n\n${await conn.getName(res)}\n\n${res}\n\nMessage : ${args[0]}\n`, null, {mentions: [m.sender]})
     if (!e.length) await m.reply(`Successfully invited bot to the group\n\n𝙂𝙍𝙊𝙐𝙋 𝙉𝘼𝙈𝙀\n${await conn.getName(res)}\n`).then(async () => {
     let mes = `Hello Everyone👋🏻`
  await conn.sendB(res, mes, wm, null, [`Menu`, `${usedPrefix}menu`], fkonn, {
        mentions: d
         })
     })
  db.data.users[m.sender].lastjoin = new Date * 1
    } catch(e) {
      console.log(e)
        throw `Sorry the bot can't join this group!`
        if (devmode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, { text:'Speed.js error\nNo: *' + m.sender.split `@` [0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*' })
            }
        }
    }
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['main']
handler.command = /^join$/i

module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " hari " + hours + " jam " + minutes + " menit";
    // +minutes+":"+sec;
}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
  seconds = Math.floor((duration / 1000) % 60),
  minutes = Math.floor((duration / (1000 * 60)) % 60),
  hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit"
}

