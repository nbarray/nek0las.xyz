import React from 'react'
import styled from 'styled-components'

import Title from './components/Title'
import Subtitle from './components/Subtitle'
import Paragraph from './components/Paragraph'
import { ReactLink, ReduxLink, StyledComponentLink, UnityLink, HaxeLink } from './components/ELink'

import { i18n } from './i18n'

const Page = styled.div`margin-left: 16px;`

export default () =>
  <Page>
    <Title>
      {i18n('About_Title')}
    </Title>
    <Subtitle>
      {i18n('Comics')}
    </Subtitle>
    <Paragraph>
      {i18n('Comics_What')}
    </Paragraph>
    <Subtitle>
      {i18n('Projects')}
    </Subtitle>
    <Paragraph>
      {i18n('Projects_What')}
      <ul>
        <li>
          {i18n('Projects_What_Front_1')} <ReactLink />, <ReduxLink />, <StyledComponentLink />
          {i18n('Projects_What_Front_2')}
        </li>
        <li>
          {i18n('Projects_What_Games')} <UnityLink />, <HaxeLink />.
        </li>
      </ul>
    </Paragraph>
    <Subtitle>
      {i18n('After')}
    </Subtitle>
    <Paragraph>
      {i18n('After_What')}
      <ul>
        <li>
          {i18n('After_What_1')}
        </li>
        <li>
          {i18n('After_What_2')}
        </li>
        <li>
          {i18n('After_What_3')}
        </li>
        <li>
          {i18n('After_What_4')}
        </li>
      </ul>
    </Paragraph>
  </Page>
