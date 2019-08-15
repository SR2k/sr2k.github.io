import React, { FC, useEffect } from 'react'
import './index.scss'

export interface IModalProps {
  active: boolean
  onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const body = document.querySelector('body')

const Modal: FC<IModalProps> = ({ children, active, onClose }) => {
  useEffect(() => {
    if (body) {
      body.style.cssText = active ? 'overflow-y: hidden' : ''
    }
  })

  return active ? (
    <div className="modal-mask">
      <div className="modal-body">
        <button onClick={onClose} className="modal-close-btn">&times;</button>
        {children}
      </div>
    </div>
  ) : null
}

export default Modal
