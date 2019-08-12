import ScrollManager from './scroll-manager'

import '../styles/main.scss'
import '../index.html'

const manager = new ScrollManager()
const text = document.getElementById('landingText')
const marker = document.getElementById('timelinePointer')
const timeline = document.getElementById('timeline')

manager.observe({
  from: 0,
  to: 1,
  callback: ({ phase }) => {
    text.style.cssText = `transform: translateY(${phase / 0.02}%); opacity: ${1 - phase}`
  },
})

manager.observe({
  from: 1,
  to: 3,
  callback: ({ phase, width }) => {
    timeline.style.cssText = 'position: sticky'
    const percent = (phase - 1) / 2
    marker.style.cssText = `left: ${percent * width}px`
  },
})

manager.observe({
  from: 3,
  to: Number.MAX_SAFE_INTEGER,
  callback: () => {
    timeline.style.cssText = 'position: relative; top: 200vh'
  },
})
