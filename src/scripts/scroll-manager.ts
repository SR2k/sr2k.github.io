interface IObserverCallbackParams {
  phase?: number
  top?: number
  height?: number
  width?: number
}

type ObserverCallback = (params: IObserverCallbackParams) => void

interface IObserver {
  from: number
  to: number
  callback: ObserverCallback
}

export default class {
  private landing: HTMLElement = document.getElementById('landing')
  private observers: IObserver[] = []

  constructor() {
    window.addEventListener('scroll', () => { this.execute() })
  }

  observe(observer: IObserver): void {
    this.observers.push(observer)
  }

  execute(): void {
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
