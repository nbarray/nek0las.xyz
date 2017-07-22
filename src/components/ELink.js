import React from 'react'
import styled from 'styled-components'

const ELink = styled.a`
  margin: 8px;

  text-decoration: none;
  color: rgb(75, 75, 75);
  font-family: 'Chewy', cursive;
  font-size: 24px;

  :hover {
    text-shadow: 2px 4px 2px rgba(41, 41, 41, 0.64);
  }
`

export default ELink

export const ReactLink = props => <ELink href='https://facebook.github.io/react/'>React</ELink>
export const ReduxLink = props => <ELink href='http://redux.js.org/'>Redux</ELink>
export const StyledComponentLink = props => <ELink href='https://www.styled-components.com/'>Styled Components</ELink>
export const CSSGridLink = props => <ELink href='https://css-tricks.com/snippets/css/complete-guide-grid/'>CSS Grid</ELink>
export const FlexboxLink = props => <ELink href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/'>Flexbox</ELink>
export const UnityLink = props => <ELink href='https://unity3d.com/fr'>Unity</ELink>
export const HaxeLink = props => <ELink href='https://haxe.org/'>Haxe</ELink>
export const MyTwitterLink = props => <ELink href="https://twitter.com/nek0las">@nek0las</ELink>
export const MyGithubLink = props => <ELink href="https://github.com/nbarray">Github</ELink>
export const MyItchIoLink = props => <ELink href="https://nekolas.itch.io/">Itch.io</ELink>
