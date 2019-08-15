import ReactDOM from 'react-dom'
import React from 'react'
import Header from './sections/header'
import Landing from './sections/landing'
import About from './sections/about'
import Skills from './sections/skills'
import ExpAndEdu from './sections/exp-and-edu'

import 'normalize.css/normalize.css'
import './index.scss'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Landing />
      <About />
      <ExpAndEdu />
      <Skills />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('mountNode'))
