export interface IObserverParams {
  top: number
  left: number
  height: number
  width: number
}

export interface IObserver {
  from?: number
  to?: number
  execute: (params: IObserverParams) => any,
  otherwise?: (params: IObserverParams) => any,
}

/**
 * Helper singleton class for observer window scroll event
 *
 * Use `instance` property to get the singleton instead of
 * `new` a instance
 */
class ScrollManager {
  private observers: IObserver[] = []

  private static internalInstance: ScrollManager;

  /**
   * Get the singleton instance of ScrollManager class
   */
  public static get instance(): ScrollManager {
    if (!ScrollManager.internalInstance) {
      ScrollManager.internalInstance = new ScrollManager()
    }
    return ScrollManager.internalInstance
  }

  /**
   * **DO NOT** use this constructor, use `instance` field instead
   */
  constructor() {
    if (ScrollManager.internalInstance) {
      throw new Error('ScrollManager singleton instance has already been initialized, use '
      + '`ScrollManager.instance` to access it instead of build a new one')
    }

    window.addEventListener('scroll', () => {
      const { documentElement } = document
      const {
        clientHeight: height,
        clientWidth: width,
      } = documentElement
      const {
        pageYOffset: top,
        pageXOffset: left,
      } = window

      this.observers.forEach(({ from, to, execute, otherwise }) => {
        const fromExact = from ? from * height : Number.MIN_SAFE_INTEGER
        const toExact = to ? to * height : Number.MAX_SAFE_INTEGER

        if (top >= fromExact && top <= toExact) {
          execute({ top, left, height, width })
        } else if (otherwise) {
          otherwise({ top, left, height, width })
        }
      })
    })
  }

  /** Add a new scroll observer */
  public observe(observer: IObserver) {
    const { from, to } = observer
    if (from && to && from > to) {
      throw new Error('`from` must be smaller than `to`')
    }
    this.observers.push(observer)
  }
}

export default ScrollManager
