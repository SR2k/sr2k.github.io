interface IObserverCallbackParams {
  /**
   * The total progress within the whole page
   */
  pageProgress?: number

  /**
   * Progress within the current phase
   */
  currentProgress?: number

  /**
   * Current scroll top
   */
  top?: number

  /**
   * 100vh
   */
  height?: number

  /**
   * 100vw
   */
  width?: number
}

type ObserverCallback = (params: IObserverCallbackParams) => void

interface IObserver {
  /**
   *
   */
  from: number
  to: number
  callback: ObserverCallback
}

export class ScrollManager {
  private landing: HTMLElement = document.getElementById('landing')
  private observers: IObserver[] = []

  constructor() {
    window.addEventListener('scroll', () => { this.execute() })
  }

  public observe(observer: IObserver): void {
    this.observers.push(observer)
  }

  private execute(): void {
    const { top, height, width } = this.landing.getBoundingClientRect()
    const pageProgress = -1 * top / height

    this.observers.forEach(({ callback, from, to }) => {
      if (pageProgress >= from && pageProgress <= to) {
        const currentProgress = (pageProgress - from) / (to - from)
        callback({
          pageProgress, top, height, width, currentProgress,
        })
      }
    })
  }
}
