import React, { Component } from "react"
import i18n from '../../i18n'
import Container from '../../components/container'
import ScrollManager from '../../common/scroll-manager'
import "./index.scss"

class Header extends Component {
  state = {
    transform: 'translateY(-100%)',
    language: 'en'
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

  toggleLanguage = () => {
    const { language } = this.state
    const newLang = language === 'en' ? 'zh' : 'en'
    i18n.changeLanguage(newLang)
    this.setState({
      language: newLang
    })
  }

  render() {
    const { transform, language } = this.state

    return (
      <header style={{ transform, }}>
        <Container verticalPadding={1} className="header-container">
          <span className="title">Siyuan Cao</span>
          <ul>
            <a href="javascript:" onClick={this.toggleLanguage} className="header-lang-toggler">
              <span className={language === 'zh' ? 'active' : ''}>中</span> / <span className={language === 'en' ? 'active' : ''}>EN</span>
            </a>
          </ul>
        </Container>
      </header>
    )
  }
}

export default Header
