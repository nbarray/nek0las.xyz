import React from 'react'
import styled from 'styled-components'

import Title from './components/Title'
import Subtitle from './components/Subtitle'
import Paragraph from './components/Paragraph'
import { ReactLink, ReduxLink, StyledComponentLink, UnityLink, HaxeLink } from './components/ELink'

const Page = styled.div`margin-left: 16px;`

export default () =>
  <Page>
    <Title>Que peux-tu trouver sur ce site ?</Title>
    <Subtitle>
      {'BD'}
    </Subtitle>
    <Paragraph>
      {"Des BD faites quand l'inspiration me prend. J'en profite pour améliorer mes compétences en infographie. "}
      {'En espérant que ca vous diverti :)'}
    </Paragraph>
    <Subtitle>
      {'Projets'}
    </Subtitle>
    <Paragraph>
      {'Des projets sur lesquels je travaille. '}
      {'Les thèmes abordés:'}
      <ul>
        <li>
          Développement frontend avec <ReactLink />, <ReduxLink />, <StyledComponentLink />
          {", et plein d'autres bibliothèques."}
        </li>
        <li>
          Des jeux vidéos développés avec <UnityLink /> ou en <HaxeLink />.
        </li>
      </ul>
    </Paragraph>
    <Subtitle>
      {'Et après?'}
    </Subtitle>
    <Paragraph>
      {"Ce n'est que la première version de ce site, je compte à terme proposer:"}
      <ul>
        <li>
          {'Des articles techniques'}
        </li>
        <li>
          {'Des tutoriaux & présentations'}
        </li>
        <li>
          {'Des devlogs'}
        </li>
        <li>
          {'Des dessins & plus de BD'}
        </li>
      </ul>
    </Paragraph>
  </Page>
