import ReactDOM from 'react-dom'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import Header from './sections/header'
import Landing from './sections/landing'
import About from './sections/about'
import Skills from './sections/skills'
import ExpAndEdu from './sections/exp-and-edu'
import Footer from './sections/footer'
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
