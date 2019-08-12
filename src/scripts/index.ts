import { ScrollManager } from './scroll-manager'

import '../index.html'
import '../styles/main.scss'

const manager = new ScrollManager()

const text: HTMLElement = document.getElementById('landingText')
const marker: HTMLElement = document.getElementById('timelinePointer')
const timeline: HTMLElement = document.getElementById('timeline')

manager.observe({
  from: 0,
  to: 1,
  callback: ({ currentProgress }) => {
    text.style.cssText = `transform: translateY(${currentProgress / 0.02}%); opacity: ${1 - currentProgress}`
  },
})

manager.observe({
  from: 1,
  to: 3,
  callback: ({ currentProgress, width }) => {
    timeline.style.cssText = 'position: sticky'
    marker.style.cssText = `left: ${currentProgress * width}px`
  },
})

manager.observe({
  from: 3,
  to: Number.MAX_SAFE_INTEGER,
  callback: () => {
    timeline.style.cssText = 'position: relative; top: 200vh'
  },
})
