import React, { FC } from 'react'
import Container from '../container'
import './index.scss'

export interface IHeroProps {
  subtitle: string
  title: string
  theme?: 'light' | 'accent'
}

const Hero: FC<IHeroProps> = ({ title, subtitle, children, theme = 'light' }) => (
  <div className={`hero hero-${theme}`}>
    <Container verticalPadding={6}>
      <p className="hero-subtitle theme-subtitle">{subtitle}</p>
      <h2 className="hero-title theme-title">{title}</h2>
      {children}
    </Container>
  </div>
)

export default Hero

