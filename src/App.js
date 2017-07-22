import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import nek0las from '../images/nek0las.png'

import ELink from './components/ELink'

import Home from './Home'
import Comics from './Comics'
import Projects from './Projects'

const Page = styled.div`
  display: grid;
  grid-template-areas: "Logo Header  Header" "Menu   Article ." "Footer Footer  Footer";
  grid-template-columns: 300px 1fr 200px;
  grid-template-rows: 200px 1fr 100px;
`

const Logo = styled.img`
  grid-area: Logo;
  align-self: center;
  justify-self: center;
`

const Header = styled.div`
  grid-area: Header;

  display: flex;
  flex-flow: column nowrap;
`

const Article = styled.div`
  grid-area: Article;

  min-height: calc(100vh - 300px);
  width: 100%;
  max-width: calc(100vw - 500px);
`

const Footer = styled.div`
  grid-area: Footer;

  align-self: center;
  justify-self: center;
`

const Menu = styled.aside`
  grid-area: Menu;

  display: flex;
  flex-flow: column;
`

const MenuItem = styled(Link)`
  margin-top: 32px;
  margin-left: 16px;

  text-decoration: none;
  color: ${props => (props.active ? 'rgb(0, 0, 0)' : 'rgb(75, 75, 75)')};

  font-family: 'Pacifico', cursive;
  font-size: 32px;

  :hover {
    text-shadow: 2px 4px 2px rgba(41, 41, 41, 0.64);
  }
`

const Title = styled.span`
  margin-top: 64px;
  margin-left: 32px;
  font-size: 2em;
  font-family: 'Chewy', cursive;
`

const Subtitle = styled.span`

  margin-left: 32px;
  font-size: 1em;
  font-family: 'Pacifico', cursive;
  color: rgb(73, 73, 73);
`


class App extends Component {
  render() {
    return (
      <Router>
        <Page>
          <Logo src={nek0las} alt="My profil picture" />
          <Header>
            <Title>nek0las.xyz</Title>
            <Subtitle>Bienvenue sur ma page personnelle en ligne!</Subtitle>
          </Header>
          <Menu>
            <MenuItem to={'/'} active={true}>Home</MenuItem>
            <MenuItem to={'/comics'}>Comics</MenuItem>
            <MenuItem to={'/projects'}>Projects</MenuItem>
          </Menu>
          <Article>
            <Switch>
              <Route exact path={'/'} component={Home} />
              <Route exact path={'/comics'} component={Comics} />
              <Route exact path={'/projects'} component={Projects} />
            </Switch>
          </Article>
          <Footer>
            <ELink href="https://twitter.com/nek0las">@nek0las</ELink>
            <ELink href="https://github.com/nbarray">Github</ELink>
            <ELink href="https://nekolas.itch.io/">Itch.io</ELink>
          </Footer>
        </Page>
      </Router>
    )
  }
}

export default App
