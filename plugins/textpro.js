let split = '|'
let handler = async (m, { conn, args: [effect], text: txt }) => {
  let { effects } = await (await (fetch(global.API('xteam', '/textpro')))).json()
  if (!effect) throw '*Daftar Efek*\n\n' + effects.sort((a, b) => a - b).join('\n')
  effect = effect.toLowerCase()
  if (!effect in effects) throw `Efek *${effect}* tidak ditemukan`
  let [text, ...text2] = txt.replace(effect, '').trimStart().split(split)
  text2 = text2.join(split)
  let url = global.API('xteam', '/textpro/' + effect, { text, text2 }, 'APIKEY')
  await conn.sendMedia(m.chat, url, m, {jpegThumbnail: await(await fetch(url)).buffer(), caption: `*TEXTPRO*\n*Efek:* ${effect}` })
}
handler.help = ['textpro'].map(v => v + ' <efek> <teks>|<teks>')
handler.tags = ['tools']
handler.command = /^(textpro|tp)$/i

handler.limit = true

module.exports = handler

