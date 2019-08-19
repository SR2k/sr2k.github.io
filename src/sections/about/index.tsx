import Hero from '../../components/hero'
import SocialLink from '../../components/social-link'
import { useTranslation } from 'react-i18next'
import React, { FC } from 'react'
import './index.scss'

const About: FC = () => {
  const { t } = useTranslation()

  return (
    <Hero title={t('about-me')} subtitle={t('who-i-am')} theme="accent">
      {
        (t('about-content', { returnObjects: true }) as string[])
          .map((c, key) => <p key={key}>{c}</p>)
      }
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
}

export default About
