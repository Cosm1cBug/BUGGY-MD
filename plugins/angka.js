let bonus = `${Math.floor(Math.random() * 300)}`.trim()
let handler = async (m, { conn, usedPrefix, command, text, args }) => {

    if (args.length == 0) return conn.reply(m.chat, `Harap masukan pilihan angkamu`, m)
    if (args[0] == '0' || args[0] == '1' || args[0] == '2' || args[0] == '3' || args[0] == '4' || args[0] == '5' || args[0] == '6' || args[0] == '7' || args[0] == '8' || args[0] == '9') {
    let random = `${pickRandom(['2','9','19','25','36','58','70','92','100','500'])}`

  conn.sendBL(m.chat, `
Angka Kamu : ${text}
Angka Bot : ${pickRandom(['0','1','2','3','4','5','6','7','8','9'])}
Apakah Angkamu Dengan Bot Sama?
+${bonus} XP!
`, wm, fla + `tebak angka`, [['Angka Random', `${usedPrefix + command} ${pickRandom(['0','1','2','3','4','5','6','7','8','9'])}`]
], m)
    global.db.data.users[m.sender].exp += bonus * 1
        } else {
      conn.sendB(m.chat, `Pilih Angka 0 sampai 9!\nAtau bisa klik Random untuk memilih angka secara acak`, wm, null, [
        ['Random', `#angka ${pickRandom(['0','1','2','3','4','5','6','7','8','9'])}`]
      ], m)
    }
}
handler.help = ['angka <0-9>']
handler.tags = ['game']
handler.command = /^(angka)/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
