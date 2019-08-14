import React, { FC } from 'react'
import "./index.scss"

interface IAccordionProps {
  title: string
  subtitle: string
  from: string
  to?: string
}

const Accordion: FC<IAccordionProps> = ({ title, subtitle, from, to, children }) => (
  <div className={`accordion`}>
    <div className="accordion-heading">
      <h3 className="accordion-title theme-title">{title}</h3>
      <p className="accordion-period theme-helper">{from} - {to || 'present'}</p>
    </div>
    <p className="accordion-subtitle theme-subtitle">{subtitle}</p>
    <div className="accordion-children theme-text">
      {children}
    </div>
  </div>
)

export default Accordion
