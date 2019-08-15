import React, { FC } from 'react'
import Section from '../../components/section'
import Container from '../../components/container'
import Marquee from '../../components/marquee'
import './index.scss'

const descriptions = [
  'frontend engineer',
  'student',
  'applaud for every single pixel',
  'little monster',
]

const Landing: FC = () => (
  <Section className="landing-container">
    <Container>
      <p>Hoooooooola!</p>
      <p className="slogan">SR2k</p>
      <Marquee text={descriptions} />
    </Container>

    <div className="scroll-hint"></div>
  </Section>
)

export default Landing
