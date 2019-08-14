import React, { Component } from 'react'
import './index.scss'

export interface IMarqueeProps {
  text: string
  change: Function
}

class Marquee extends Component<IMarqueeProps> {
  state = {
    index: 0
  }

  isDeletingMode = false

  componentDidMount() {
    const changeText = () => {
      const { index } = this.state
      const { text, change } = this.props

      if (index < text.length && !this.isDeletingMode) {
        this.setState({
          index: index + 1
        })
        const next = text.slice(index, index + 1)
        setTimeout(changeText, next === '' ? 100 : 50)
      } else if (index === text.length && !this.isDeletingMode) {
        setTimeout(changeText, 1500)
        this.isDeletingMode = true
      } else if (index >= 0 && this.isDeletingMode) {
        this.setState({
          index: index - 1
        })
        setTimeout(changeText, 50)
      } else {
        this.isDeletingMode = false
        change()
        this.setState({ index: 0 })
        setTimeout(changeText, 200)
      }
    }

    setTimeout(changeText, 200)
  }

  render() {
    const { text } = this.props
    const { index } = this.state

    return (
      <div className="marquee">
        <p>
          {text.slice(0, index >= 0 ? index : 0)}
        </p>
      </div>
    )
  }
}

export default Marquee
