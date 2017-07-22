import React from 'react'
import styled from 'styled-components'

import Title from './components/Title'
import Subtitle from './components/Subtitle'
import Paragraph from './components/Paragraph'
import { ReactLink, StyledComponentLink, FlexboxLink, CSSGridLink } from './components/ELink'

const Page = styled.div`margin-left: 16px;`

export default () =>
  <Page>
    <Title>Projets Informatiques</Title>
    <Subtitle>nek0las.xyz</Subtitle>
    <Paragraph>
      Le site que vous visitez est ma plateforme pour partager mon travail et mes passions. Il est réaliser avec un
      stack javascript autour de <ReactLink />. Le style est réaliser à base de <StyledComponentLink />, <CSSGridLink />{' '}
      et <FlexboxLink />.
    </Paragraph>
  </Page>
