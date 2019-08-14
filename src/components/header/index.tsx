import React, { Component } from "react"
import Container from '../container'
import ScrollManager from '../../common/scroll-manager'
import "./index.scss"

class Header extends Component {
  state = {
    transform: 'translateY(-100%)',
  }

  componentDidMount() {
    ScrollManager.instance.observe({
      from: 0.4,
      execute: () => this.setState({
        transform: 'translateY(0)',
      }),
      otherwise: () => this.setState({
        transform: 'translateY(-100%)',
      }),
    })
  }

  render() {
    const { transform } = this.state

    return (
      <header style={{ transform }}>
        <Container verticalPadding={1} className="header-container">
          <span className="title">Siyuan Cao</span>
          <ul>
            <li>contact</li>
          </ul>
        </Container>
      </header>
    )
  }
}

export default Header
