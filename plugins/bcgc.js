let handler = async (m, { conn,isOwner, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    let pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'Text?'
    m.reply(`Sending Broadcasts To ${anu.length} Chat, Ends in ${anu.length * 0.5} seconds`)
    for (let i of anu) {
    await delay(500)
    conn.reply(i,pesan).catch(_ => _)
    }
  m.reply(`Successfully Sent Broadcasts To ${anu.length} Groups`)
}
handler.help = ['bcgc <text>']
handler.tags = ['owner']
handler.command = /^(broadcastgc|bcgc)$/i

handler.owner = true

module.exports = handler
