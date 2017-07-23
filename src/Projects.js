import React from 'react'
import styled from 'styled-components'

import Title from './components/Title'
import Subtitle from './components/Subtitle'
import Paragraph from './components/Paragraph'
import { ReactLink, StyledComponentLink, FlexboxLink, CSSGridLink } from './components/ELink'

import { i18n } from './i18n'

const Page = styled.div`margin-left: 16px;`

export default () =>
  <Page>
    <Title>
      {i18n('Projects_Current')}
    </Title>
    <Subtitle>nek0las.xyz</Subtitle>
    <Paragraph>
      {i18n('nek0las.xyz_What')}
    </Paragraph>
    <Paragraph>
      {i18n('nek0las.xyz_Stack_1')} <ReactLink />. {i18n('nek0las.xyz_Stack_2')} <StyledComponentLink />, <CSSGridLink />, <FlexboxLink />.
    </Paragraph>
    <Subtitle>k2s0</Subtitle>
    <Paragraph>
      {i18n('k2s0_What')}
    </Paragraph>

    <Paragraph>
      {i18n('nek0las.xyz_Stack_1')} <ReactLink />.
    </Paragraph>
  </Page>
