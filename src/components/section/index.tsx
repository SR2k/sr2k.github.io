import React, { FC, CSSProperties } from 'react'
import './index.scss'

export interface ISectionProps {
  className?: string
  style?: CSSProperties
}

const Section: FC<ISectionProps> = ({ children, className = '', style }) => (
  <div className={`section ${className}`} style={style}>
    { children }
  </div>
)

export default Section
