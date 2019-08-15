import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Hero from '../../components/hero'
import Accordion from '../../components/accordion'
import Divider from '../../components/divider'

interface IExpAndEdu {
  title: string
  subtitle: string
  from: string
  to?: string
  content: string[]
}

const ExpAndEdu: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Hero title={t('experience')} subtitle={t('what-i-ve-been-thru')} theme="light">
        {
          (t('experiences', { returnObjects: true }) as IExpAndEdu[]).map(({ title, subtitle, from, to, content }, key, arr) => (
            <>
              <Accordion title={title} subtitle={subtitle} from={from} to={to}>
                {content.map((c, key) => <p key={key}>{c}</p>)}
              </Accordion>
              {key !== arr.length - 1 && <Divider />}
            </>
          ))
        }
      </Hero>

      <Hero title={t('education')} subtitle={t('where-i-learned')} theme="accent">
        {
          (t('educations', { returnObjects: true }) as IExpAndEdu[]).map(({ title, subtitle, from, to, content }, key, arr) => (
            <>
              <Accordion title={title} subtitle={subtitle} from={from} to={to}>
                {content.map((c, key) => <p key={key}>{c}</p>)}
              </Accordion>
              {key !== arr.length - 1 && <Divider />}
            </>
          ))
        }
      </Hero>
    </>
  )
}

export default ExpAndEdu
