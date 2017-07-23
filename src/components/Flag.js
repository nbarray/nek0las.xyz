import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import styled from 'styled-components'

import frFlag from '../../images/fr_flag.png'
import enFlag from '../../images/en_flag.png'

const SelectableImage = styled.img`
  height: ${props => (props.selected ? '32px' : '24px')};
  margin-right: 8px;
  margin-top: 8px;
`

const getImageFromLang = lang => {
  if (lang === 'fr') return frFlag
  if (lang === 'en') return enFlag
  return null
}

// lang: string
const Flag = props => {
  const changeLang = (e) => {
    const prev = location.pathname.split('/')
    prev[1] = props.lang
    props.history.push(prev.join('/'))
  }
  return (
    <Route
      children={({ location }) => {
        const langParam = location.pathname.split('/')[1]
        return (
          <SelectableImage
            src={getImageFromLang(props.lang)}
            alt={props.lang}
            selected={langParam === props.lang}
            onClick={changeLang}
          />
        )
      }}
    />
  )
}

export default withRouter(Flag)
