import React, { FC } from 'react'
import List, { ListItem, IListItemProps } from '../../components/list'
import Hero from '../../components/hero'

const skills: IListItemProps[] = [
  {
    title: 'Languages',
    items: [
      'JavaScript',
      'TypeScript',
      'CSS',
      'SASS / SCSS / LESS',
      'HTML',
      'C#'
    ]
  }, {
    title: 'Dev Tools',
      items: [
      'JetBrains suite',
      'Visual Studio Code',
      'Sketch',
      'Xcode',
      'GUI of macOS / Windows',
      'CLI of macOS / Linux',
      'Git / Git based platforms',
      'Microsoft Office',
      'Adobe Photoshop / Illustrator / InDesign',
    ]
  }, {
    title: 'Frameworks & Dev Toolchains',
    items: [
      'React',
      'Redux',
      'Angular',
      'Webpack',
      'Gulp',
    ]
  }
]

const Skills: FC = () => (
  <Hero title="skills" subtitle="what I am capable of" theme="light">
    <List>
      {
        skills.map((skillItem, key) =>
          <ListItem {...skillItem} key={key} />)
      }
    </List>
  </Hero>
)

export default Skills
