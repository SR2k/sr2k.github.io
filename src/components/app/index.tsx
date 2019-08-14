import React from 'react'
import Header from '../header'
import Landing from '../landing'
import Hero from '../hero'
import Accordion from '../accordion'
import Divider from '../divider'
import List, { ListItem, IListItemProps } from '../list'
import SocialLink from '../social-link'
import './index.scss'

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

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Landing />
      <Hero title="about me" subtitle="who I am" theme="accent">
        <p>Hello! My name is Siyuan Cao, usually I use <i>SR2k</i> out there. I am a Frontend Engineer who currently lives and works in Hangzhou, China.</p>

        <p>I have always had a passion for creating things. Nowadays I use this creativity to design and develop software to impact, excite and positively influence people.</p>

        <div className="about-social-links">
          <SocialLink
            title="@SR2k"
            link="https://weibo.com/234970213"
            description="Weibo"
            icon="weibo"
            className="about-social-link" />
          <SocialLink
            title="@SR2k"
            link="https://github.com/SR2k"
            description="GitHub"
            icon="github"
            className="about-social-link" />
          <SocialLink
            title="Email"
            link="mailto:seeran@outlook.com"
            description="Email"
            icon="mail"
            className="about-social-link" />
        </div>
      </Hero>

      <Hero title="experience" subtitle="what I've been thru" theme="light">
        <Accordion title="Alibaba Inc." subtitle="Frontend Engineer Intern" from="Jul '19">
          <p>There's a saying that frontend engineers in China are either working for Alibaba, or on the way to Alibaba. So it's really my honor to have this internship experience at Alibaba Inc.</p>
          <p>During the internship, I learned about internal solution for various of business, participated in the maintenance of a internal UI component library, and gain a lot of skills for real-world projects.</p>
        </Accordion>
        <Divider />
        <Accordion title="Bright Tech" subtitle="Frontend Engineer Intern" from="Jul" to="Sep '18">
          <p>The internship at Bright Tech is the very first job I've ever got. Yet nothing special.</p>
        </Accordion>
        <Divider />
        <Accordion title="CSEC" subtitle="Fullstack Engineer" from="Mar" to="Apr '19">
          <p>Built with Angular 7 and ASP.NET Core 2.2, the CSEC site is a full solution for the CSEC competition held by Shenzhen University.</p>
          <p>Now the site has fulfilled what it's been desired, and has provided thousands of visitors and competitors a convenient service.</p>
        </Accordion>
      </Hero>

      <Hero title="education" subtitle="where I learned" theme="accent">
        <Accordion title="TUST" subtitle="Digital Publishing Bachelor" from="Sep '15">
          <p>I studied a Bachelor of Arts majoring in Digital Publishing at Tianjin University of Science and Technology in China.</p>
          <p>There's a gap between my dream and my major At TUST, so after class I worked hard to establish a good understanding of technical and process skills that are required to excel in the software, especially in web frontend field.</p>
        </Accordion>
      </Hero>

      <Hero title="skills" subtitle="what I am capable of" theme="light">
        <List>
          {
            skills.map((skillItem, key) => <ListItem {...skillItem} key={key} />)
          }
        </List>
      </Hero>
    </>
  )
}

export default App
