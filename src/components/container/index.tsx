import React, { FC } from 'react'
import './index.scss'

interface IContainerProps {
  /** Vertical margin in `rem` */
  verticalPadding?: number
  className?: string
}

const Container: FC<IContainerProps> = ({ children, verticalPadding = 0, className = '' }) => (
  <div
    className={`container ${className}`}
    style={{
      paddingTop: `${verticalPadding}rem`,
      paddingBottom: `${verticalPadding}rem`,
    }}>
    {children}
  </div>
)

export default Container
