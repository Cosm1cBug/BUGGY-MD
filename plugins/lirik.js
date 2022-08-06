let fetch = require('node-fetch')
let handler = async (m, { text, conn }) => {
  if(!text) throw `Where's the song title?`
  let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', { title: text }))
  if (!res.ok) throw `lyrics not found`
  let json = await res.json()
  if (!json.thumbnail.genius) throw m.reply(`
*${json.title}*

_${json.author}_

${json.lyrics}

${json.links.genius}
`)
  conn.sendMedia(m.chat, json.thumbnail.genius, m, {caption: `

*${json.title}*

_${json.author}_

${json.lyrics}

${json.links.genius}
`, jpegThumbnail: await(await fetch(json.thumbnail.genius)).buffer()})
}
handler.help = ['lyrics'].map(v => v + '<song name>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|ly)$/i

module.exports = handler
