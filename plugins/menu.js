let { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')
const defaultMenu = {
          before: `Bot Usage Info:\n*${lim} : Limited Usage*\n*${prem} : Premium Users Only*\n\n${ucpn}%readmore`.trimStart(),
  header: `\n${sa}${kki} ${zt}%category${zt} ${kka}`,
  body: `${gy} ${zc}%cmd${zc} %islimit %isPremium`,
  footer: `${sb}\n`,
          after: ``,
}

let handler = async (m, { conn, usedPrefix: _p, args, command, DevMode }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'anime', 'maker', 'random', 'game', 'xp', 'stiker', 'rpg', 'quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'vote', 'nsfw', 'audio',  'info', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
      'main': 'MAIN', 
      'anime': 'ANIME', 
      'admin': `ADMIN ${global.opts['restrict'] ? '' : '(Disabled)'}`,
      'group': 'GROUP',
      'absen': 'ROLL CALL',
      'anonymous': 'ANONYMOUS CHAT', 
      'audio': 'AUDIO', 
      'downloader': 'DOWNLOADER', 
      'fun': 'FUN',
      'game': 'GAME',
      'xp': 'EXP & LIMIT',
      'info': 'INFO',
      'internet': 'INTERNET', 
      'nsfw': 'NSFW',
      'quotes': 'QUOTES',
      'rpg': 'RPG', 
      'random': 'RANDOM',
      'sticker': 'STICKER',
      'tools': 'TOOLS',
      
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'XP & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Disabled)'}`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'update') tags = {
    'update': 'Update'
  }
 

  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Kolkata').format('HH:mm:ss')
    
let aoa = `Hello ${name}.`.trim()
let anu = `✾ 𝐍𝐚𝐦𝐞: 𝐁𝐔𝐆𝐆𝐘\n✾ 𝐌𝐨𝐝𝐞: 𝐏𝐮𝐛𝐥𝐢𝐜\n✾ 𝐔𝐩𝐭𝐢𝐦𝐞: ${uptime}`.trim()
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  })
    if (teks == '404') {
        const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: aoa,
            description: anu,
            buttonText: 'Click Here',
            listType: 1,
            footerText: wm,
            mtype: 'listMessage',
            sections: [
              {title: ` MENU `,
                rows: [
                        {title: `💬  All menu`, rowId: ".? all", description: "Shows all commands"},
                        {title: `🌱  Rpg`, rowId: ".? rpg", description: "Role play games"},
                        {title: `✨  Exp`, rowId: ".? xp", description: "Let's raise your rank!"},
                        {title: `🎮  Game`, rowId: ".? game", description: "Games"},
                        {title: `🧩  Fun`, rowId: ".? fun", description: "Fun features"},
                        {title: `📑  Quotes`, rowId: ".? quotes", description: "Random quotes"},
                        {title: `⛩️  Anime`, rowId: ".? anime", description: "Anime menu"},
                        {title: `🌟  Premium`, rowId: ".? premium", description: "For premium users"},
                        {title: `🎭  Anonymous Chats`, rowId: ".? anonymous", description: "Talk to strangers"},
                        {title: `🌎  Internet`, rowId: ".? internet", description: "Search"},
                        {title: `📩  Downloads`, rowId: ".? downloader", description: "Download files"},
                        {title: `🎨  Stikers`, rowId: ".? stiker", description: "Create stickers"},
                        {title: `🎧  Audio`, rowId: ".? audio", description: "Voice changer"},
                        {title: `🏢  Group`, rowId: ".? group", description: "Works in groups only"},
                        {title: `👑  Admin`, rowId: ".? admin", description: "For group admins"},
                        {title: `🛠️  Tools`, rowId: ".? tools", description: "Some useful tools"},
                        {title: `ℹ️  Info`, rowId: ".? info", description: "Bot info"},
                        {title: `👩‍💻  Owner`, rowId: ".? owner", description: "For owner only"},
                        {title: `❓  No Category`, rowId: ".? nocategory", description: ""},
                      ]
              },
                    ], "contextInfo": {
                      "stanzaId": m.key.id,
                      "participant": m.sender,
                      "quotedMessage": m.message
            }
    }}), { userJid: m.participant || m.key.remoteJid, quoted: m });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
    }
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : ` `) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%islimit/g, menu.limit ? `${lim}` : '')
                  .replace(/%isPremium/g, menu.premium ? `${prem}` : '')
                  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name,
      ucapan: ucapan(),
      name, weton, week, date, dateIslamic, time,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    const pp = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => path.join(__dirname, '../src/avatar_contact.png'))
    //await conn.sendTBL(m.chat, text.trim(), wm, fla + teks, dtu, urlnya, dtc, nmbrnya, `🏅Owner`, `${_p}owner`, `🎖ThanksTo`, `${_p}tqto`, `🎗  Info Bot  🎗`, `${_p}infobot`, m)
    await conn.sendTBD(m.chat, text, wm, thumbd, dtu, urlnya, dtc, nmbrnya,)
    } catch (e) {
    conn.reply(m.chat, 'Menu error!', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|m|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "jangan lupa tidur yaah, lop yu<3"
  if (time >= 4) {
    res = "Selamat Pagi ☀"
  }
  if (time > 10) {
    res = "Selamat Siang 🌞"
  }
  if (time >= 15) {
    res = "Selamat Sore 🌝"
  }
  if (time >= 18) {
    res = "Selamat Malam 🌚"
  }
  return res
}
