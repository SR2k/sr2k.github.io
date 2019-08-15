import React, { Component } from 'react'
import './index.scss'

export interface IMarqueeProps {
  text: string[]
}

class Marquee extends Component<IMarqueeProps> {
  state = {
    index: 0,
    characterIndex: 0
  }

  isDeletingMode = false

  nextString = () => {
    const { length } = this.props.text
    const { index } = this.state

    this.setState({
      index: index < length - 1 ? index + 1 : 0
    })
  }

  componentDidMount() {
    const changeText = () => {
      const { characterIndex, index } = this.state
      const { text } = this.props
      const string = text[index]

      if (characterIndex < string.length && !this.isDeletingMode) {
        this.setState({
          characterIndex: characterIndex + 1
        })
        const next = string.slice(characterIndex, characterIndex + 1)
        setTimeout(changeText, next === ' ' ? 100 : 75)
      } else if (characterIndex === string.length && !this.isDeletingMode) {
        setTimeout(changeText, 1500)
        this.isDeletingMode = true
      } else if (characterIndex >= 0 && this.isDeletingMode) {
        this.setState({
          characterIndex: characterIndex - 1
        })
        setTimeout(changeText, 30)
      } else {
        this.isDeletingMode = false
        this.nextString()
        this.setState({ characterIndex: 0 })
        setTimeout(changeText, 200)
      }
    }

    setTimeout(changeText, 200)
  }

  render() {
    const { text } = this.props
    const { characterIndex, index } = this.state

    return (
      <div className="marquee">
        <p>
          {text[index].slice(0, characterIndex >= 0 ? characterIndex : 0)}
          <span className="marquee-blink"></span>
        </p>
      </div>
    )
  }
}

export default Marquee
