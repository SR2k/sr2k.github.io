import React, { FC } from 'react'
import Hero from '../../components/hero'
import SocialLink from '../../components/social-link'
import './index.scss'

const About: FC = () => (
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
)

export default About
