import React, { FC, CSSProperties } from 'react'
import './index.scss'
import weibo from '../../assets/weibo.png'
import mail from '../../assets/mail.png'
import github from '../../assets/github.png'

const icons = {
  weibo, mail, github,
}

export interface ISocialLinkProps {
  title: string
  description: string
  link?: string
  callback?: Function
  className?: string
  style?: CSSProperties
  icon?: keyof typeof icons
}

const SocialLink: FC<ISocialLinkProps> = ({
  title,
  description,
  link,
  callback,
  className,
  style,
  icon,
}) => {
  const href = callback ? 'javascript:' : link

  return (
    <div className={`social-link ${className}`}>
      {icon && <span><img src={icons[icon!]} alt="icon"/></span>}
      <a
        style={style}
        title={title}
        href={href}>
        {title}
      </a>
    </div>
  )
}

export default SocialLink
