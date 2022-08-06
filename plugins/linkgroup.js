let handler = async (m, { conn }) => {
  try {
    conn.reply(m.chat, `*Group link:* ${await conn.getName(m.chat)}\n\nhttps://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat) + `\n\n${conn.user.name}`, m)
  } catch {
    conn.reply(m.chat, `Make @${conn.user.jid.split('@')[0]} as an admin to use this command!`, m, { mentions: [conn.user.jid] })
  }
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link$/i

handler.group = true
//handler.botAdmin = true

module.exports = handler
