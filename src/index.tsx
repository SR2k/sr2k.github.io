import About from './sections/about'
import ExpAndEdu from './sections/exp-and-edu'
import Footer from './sections/footer'
import Header from './sections/header'
import { I18nextProvider } from 'react-i18next'
import Landing from './sections/landing'
import React from 'react'
import ReactDOM from 'react-dom'
import Skills from './sections/skills'
import i18n from './i18n'
import 'normalize.css/normalize.css'
import './index.scss'

const App: React.FC = () => (
  <>
    <Header />
    <Landing />
    <About />
    <ExpAndEdu />
    <Skills />
    <Footer />
  </>
)

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById('mountNode')
)
