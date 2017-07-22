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
      Vous êtes dessus! {"C'est"} Ma plateforme pour partager mon travail et mes passions.
    </Paragraph>
    <Paragraph>
      Il est réalisé avec une stack javascript autour de <ReactLink />. La mise en page est faite à base de{' '}
      <StyledComponentLink />, <CSSGridLink /> et <FlexboxLink />.
    </Paragraph>
    <Subtitle>k2s0</Subtitle>
    <Paragraph>
      {`C'est un service d'organisation. Il permet de tenir une liste de taches à accomplir,
        d'obtenir des rappels quotidients. Il permettera à terme de gérer mes listes de courses,
        tenir compte d'informations provenants de capteurs domotiques ou corporels (Android Watch),
        et plusieurs autres fonctionnalitées.
      `}
    </Paragraph>

    <Paragraph>
      {`Il est réalisé avec la même stack que nek0las.xyz, c'est-à-dire `}
      <ReactLink /> {" et tout l'écosystème qui tourne autour."}
    </Paragraph>
  </Page>
