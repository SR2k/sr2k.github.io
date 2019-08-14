import React, { Component } from 'react'
import Section from '../section'
import Container from '../container'
import Marquee from '../marquee'
import './index.scss'
import bg from '../../assets/background.jpg'

const descriptions = [
  'frontend',
  'student',
  'applaud for every single pixel',
  'little monster',
]

class Landing extends Component{
  state = {
    index: 0
  }

  // TODO: move this method to Mqrquee component
  handleChangeText = () => {
    const { length } = descriptions
    const { index } = this.state

    this.setState({
      index: index < length - 1 ? index + 1 : 0
    })
  }

  render() {
    const { index } = this.state

    return (
      <Section className="landing-container" style={{ backgroundImage: `url(${bg})` }}>
        <Container>
          <p>Hoooooooola!</p>
          <p className="slogan">SR2k</p>
          <Marquee text={descriptions[index]} change={this.handleChangeText} />
        </Container>

        <div className="scroll-hint"></div>
      </Section>
    )
  }
}

export default Landing
