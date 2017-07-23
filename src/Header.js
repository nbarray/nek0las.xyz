import React from 'react'
import styled from 'styled-components'

import { i18n } from './i18n'
import Flag from './components/Flag'

const Title = styled.span`
  margin-top: 64px;
  font-size: 2em;
  font-family: 'Chewy', cursive;
`

const Subtitle = styled.span`
  font-size: 1em;
  font-family: 'Pacifico', cursive;
  color: rgb(73, 73, 73);
`

const Header = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media screen and (max-width: 900px) {
    align-items: center;
  }
`
export default () => {
  return (
    <Header>
      <Title>nek0las.xyz</Title>
      <Subtitle>
        {i18n('Welcome')}
      </Subtitle>
      <div>
        <Flag lang={'fr'} />
        <Flag lang={'en'} />
      </div>
    </Header>
  )
}
