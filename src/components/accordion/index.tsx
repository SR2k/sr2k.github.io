import React, { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import "./index.scss"

interface IAccordionProps {
  title: string
  subtitle: string
  from: string
  to?: string
}

const Accordion: FC<IAccordionProps> = ({ title, subtitle, from, to, children }) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  const { t } = useTranslation()

  return (
    <div
      className={`accordion ${active ? 'active' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}>
      <div className="accordion-heading">
        <h3 className="accordion-title theme-title">{title}</h3>
        <p className="accordion-period theme-helper">{from} - {to || t('present')}</p>
      </div>
      <p className="accordion-subtitle theme-subtitle">{subtitle}</p>
      <div className="accordion-children theme-text">
        {children}
      </div>
    </div>
    )
}

export default Accordion
