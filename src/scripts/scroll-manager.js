export default class {
  constructor() {
    this.landing = document.getElementById('landing')
    this.observers = []
    window.addEventListener('scroll', () => { this.execute() })
  }

  observe(observer) {
    this.observers.push(observer)
  }

  execute() {
    const { top, height, width } = this.landing.getBoundingClientRect()
    const phase = -1 * top / height

    this.observers.forEach(({ callback, from, to }) => {
      if (phase >= from && phase <= to) {
        callback({
          phase, top, height, width,
        })
      }
    })
  }
}
