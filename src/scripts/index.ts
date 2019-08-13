import { ScrollManager } from './scroll-manager'

import '../index.html'
import '../styles/main.scss'
import 'normalize.css/normalize.css'

const getEl = (selector: string) => document.getElementById(selector)

const manager = new ScrollManager()

const text: HTMLElement = getEl('landingText')
const marker: HTMLElement = getEl('timelinePointer')
const timeline: HTMLElement = getEl('timeline')

const experiences: HTMLElement[] = [
  getEl('experience1'),
  getEl('experience2'),
  getEl('experience3'),
]

manager.observe({
  from: 0,
  to: 1,
  callback: ({ currentProgress }) => {
    text.style.cssText = `transform: translateY(${currentProgress / 0.02}%); opacity: ${1 - currentProgress}`
  },
})

const activateExperience = (no: number) => {
  const len = experiences.length
  for (let i = 0; i < len; i++) {
    experiences[i].classList.remove('active')
    experiences[i].classList.remove('past')
  }
  if (no > 0) {
    experiences[no - 1].classList.add('past')
  }
  experiences[no].classList.add('active')
}

manager.observe({
  from: 1,
  to: 4,
  callback: ({ currentProgress, width, pageProgress }) => {
    timeline.style.cssText = 'position: sticky'
    marker.style.cssText = `left: ${currentProgress * width}px`
    activateExperience(parseInt((pageProgress - 1).toString()))
  },
})

manager.observe({
  from: 4,
  to: Number.MAX_SAFE_INTEGER,
  callback: () => {
    timeline.style.cssText = 'position: relative; top: 300vh'
  },
})
