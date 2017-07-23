import React from 'react'
import { withRouter, Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

import { i18n } from '../i18n'

const Link = styled(RouterLink)`
  margin-top: 8px;
  margin-left: 16px;

  text-decoration: none;
  color: ${props => (props.active ? 'rgb(0, 0, 0)' : 'rgb(75, 75, 75)')};

  font-family: 'Pacifico', cursive;
  font-size: 32px;

  :hover {
    text-shadow: 2px 4px 2px rgba(41, 41, 41, 0.64);
  }
`

const MenuLink = props => {
  const lang = props.location.pathname.split('/')[1]
  return <Link to={`/${lang}/${props.to}`}>
    {i18n(props.label)}
  </Link>
}

export default withRouter(MenuLink)
