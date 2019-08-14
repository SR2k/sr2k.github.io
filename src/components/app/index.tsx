import React from 'react'
import Header from '../header'
import Section from '../section'
import Landing from '../landing'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Landing />
      <Section>
        Hello world
      </Section>
    </>
  )
}

export default App
