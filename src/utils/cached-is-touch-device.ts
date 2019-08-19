import isTouchDevice from 'is-touch-device'

let internalIsTouchDevice: boolean | undefined = undefined

const cachedIsTouchDevice = (): boolean => {
  if (typeof internalIsTouchDevice === 'boolean') {
    return internalIsTouchDevice
  }

  internalIsTouchDevice = isTouchDevice()
  return internalIsTouchDevice
}

export default cachedIsTouchDevice
