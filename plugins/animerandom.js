
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/random.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
  await conn.sendBI(m.chat, `Requested by @${m.sender.split('@')[0]}`, wm, cita, [[`Woohoo`, ``]], m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
handler.tags = ['anime']
handler.help = ['randomanime']
handler.command = /^(randomanime|animerandom|ranime)$/i

handler.register = true
handler.limit = true

module.exports = handler
