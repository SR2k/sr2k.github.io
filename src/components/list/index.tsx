import React, { FC, FunctionComponentElement } from 'react'
import './index.scss'

export interface IListItemProps {
  title: string
  items: string[]
}

export const ListItem: FC<IListItemProps> = ({ title, items }) => (
  <div className="list-item">
    <p className="list-item-title theme-title">{title}</p>
    <ul className="list-item-ul">
      {
        items.map((item, key) => (
          <li key={key}>{item}</li>
        ))
      }
    </ul>
  </div>
)

export interface IListProps {
  children: FunctionComponentElement<typeof ListItem>[]
}

const List: FC<IListProps> = ({ children }) => (
  <div className="list">
    {children}
  </div>
)

export default List
