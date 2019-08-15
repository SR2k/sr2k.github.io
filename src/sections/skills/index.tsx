import React, { FC } from 'react'
import List, { ListItem, IListItemProps } from '../../components/list'
import { useTranslation } from 'react-i18next'
import Hero from '../../components/hero'

const Skills: FC = () => {
  const { t } = useTranslation()
  const skills = t('skills', { returnObjects: true }) as IListItemProps[]

  return (
    <Hero title={t('skill')} subtitle={t('what-i-am-capable-of')} theme="light">
      <List>
        {
          skills.map((skillItem, key) =>
            <ListItem {...skillItem} key={key} />)
        }
      </List>
    </Hero>
  )
}

export default Skills
