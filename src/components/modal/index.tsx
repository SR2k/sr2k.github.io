import React, { FC } from 'react'
import './index.scss'

export interface IModalProps {
  active: boolean
  onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Modal: FC<IModalProps> = ({ children, active, onClose }) => (
  <>
    {
      active && <div className="modal-mask">
        <div className="modal-body">
          <button onClick={onClose} className="modal-close-btn">&times;</button>
          {children}
        </div>
      </div>
    }
  </>
)

export default Modal
