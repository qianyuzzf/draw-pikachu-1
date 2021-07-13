import string from './css'

const player = {
  interId: undefined,
  time: 50,
  n: 0,
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnOrdinary': 'ordinary',
    '#btnSpeed': 'speed'
  },
  init: () => {
    document.querySelector('#style').innerHTML = string.substring(0, player.n)
    document.querySelector('#html2').innerText = string.substring(0, player.n)
    player.bindEvents()
    player.play()
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        document.querySelector(key).onclick = player[player.events[key]]
      }
    }
  },
  run: () => {
    player.n += 1
    document.querySelector('#style').innerHTML = string.substring(0, player.n)
    document.querySelector('#html2').innerText = string.substring(0, player.n)
    document.querySelector('#html2').scrollTop = document.querySelector('#html2').scrollHeight
    if (player.n >= string.length) {
      clearInterval(player.interId)
    }
  },
  play: () => {
    player.pause()
    player.interId = setInterval(player.run, player.time)
  },
  pause: () => {
    clearInterval(player.interId)
  },
  slow: () => {
    player.time = 200
    player.play()
  },
  ordinary: () => {
    player.time = 50
    player.play()
  },
  speed: () => {
    player.time = 0
    player.play()
  }
}

player.init()
