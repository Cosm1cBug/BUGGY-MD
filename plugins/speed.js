let os = require('os')
let util = require('util')
let { performance } = require('perf_hooks')
let { sizeFormatter } = require('human-readable')
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))
let format = sizeFormatter({
  std: 'SI', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 1,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix }) => {
  const chats = Object.keys(await conn.chats)
  const groupsIn = chats.filter(id => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  m.reply('_Testing speed..._')
  await delay(1000)
  let neww = performance.now()
  let speed = neww - old
  await conn.sendButton(m.chat, `Respond in *${speed} Ms*`, wm, null,[['OOH']], m)
}
handler.help = ['ping']
handler.tags = ['info']

handler.command = /^(ping)$/i

module.exports = handler
