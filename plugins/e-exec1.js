/* 
+ EXEC 1
+ MADE BY AMIRUL DEV
+ GITHUB: amiruldev20
+ IG: @amirul.dev
*/

//-- MODULE EX
const {
  default: makeWASocket,
  proto,
  downloadContentFromMessage,
  getBinaryNodeChild,
  getBinaryNodeChildren,
  jidDecode,
  areJidsSameUser,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  DisconnectReason,
  BaileysEventMap
} = require('@adiwajshing/baileys')
let syntaxerror = require('syntax-error')
let util = require('util')
let fetch = require('node-fetch')
let cheerio = require('cheerio')
let fs = require('fs')
let axios = require('axios')
let bo = require('@bochilteam/scraper')


let handler = async (m, _2) => {
  let { conn, usedPrefix, noPrefix, args, groupMetadata } = _2
  let _return
  let _syntax = ''
  let _text = (/^=/.test(usedPrefix) ? 'return ' : '') + noPrefix

  let old = m.exp * 1
  try {
    let i = 15
    let f = {
      exports: {}
    }
    let exec = new (async () => { }).constructor('print', 'm', 'handler', 'require', 'fetch', 'cheerio', 'fs', 'axios', 'util', 'bo', 'proto', 'downloadContentFromMessage', 'generateForwardMessageContent', 'generateWAMessageFromContent', 'prepareWAMessageMedia', 'conn', 'Array', 'process', 'args', 'groupMetadata', 'module', 'exports', 'argument', _text)
    _return = await exec.call(conn, (...args) => {
      if (--i < 1) return
      console.log(...args)
      return conn.reply(m.chat, util.format(...args), m)
    }, m, handler, require, fetch, cheerio, fs, axios, util, bo, proto, downloadContentFromMessage, generateForwardMessageContent, generateWAMessageFromContent, prepareWAMessageMedia, conn, CustomArray, process, args, groupMetadata, f, f.exports, [conn, _2])
  } catch (e) {
    let err = await syntaxerror(_text, 'Execution Function', {
      allowReturnOutsideFunction: true,
      allowAwaitOutsideFunction: true
    })
    if (err) _syntax = '```' + err + '```\n\n'
    _return = e
  } finally {
    conn.reply(m.chat, _syntax + util.format(_return), m)
    m.exp = old
  }
}
handler.help = ['> ', '=> ']
handler.tags = ['owner']
handler.customPrefix = /^=?> /
handler.command = /(?:)/i
handler.rowner = true
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

class CustomArray extends Array {
  constructor(...args) {
    if (typeof args[0] == 'number') return super(Math.min(args[0], 10000))
    else return super(...args)
  }
}
