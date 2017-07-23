import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import nek0las from '../images/nek0las.png'

import Home from './Home'
import Comics from './Comics'
import Projects from './Projects'

import { MyGithubLink, MyTwitterLink, MyItchIoLink } from './components/ELink'

const Page = styled.div`
  display: grid;

  grid-template-areas: "Logo Header  Header" "Menu   Article ." "Footer Footer  Footer";
  grid-template-columns: 300px 1fr 200px;
  grid-template-rows: 200px 1fr 100px;

  @media screen and (max-width: 900px) {
    grid-template-areas: "Header"
                         "Logo"
                         "Menu"
                         "Article"
                         "Footer";
    grid-template-columns: auto;
    grid-template-rows: 150px 150px 300px auto 50px;
  }
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

  @media screen and (max-width: 900px) {
    align-items: center;
  }
`

const Article = styled.div`
  grid-area: Article;

  min-height: calc(100vh - 300px);
  @media screen and (min-width: 900px) {
    max-width: calc(100vw - 500px);
  }
  width: 100%;
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

  @media screen and (max-width: 900px) {
    align-items: center;
  }
`

const MenuItem = styled(Link)`
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
            <MenuItem to={'/'}>Home</MenuItem>
            <MenuItem to={'/comics/1'}>BD</MenuItem>
            <MenuItem to={'/projects'}>Projets</MenuItem>
          </Menu>
          <Article>
            <Switch>
              <Route exact path={'/projects/'} component={Projects} />
              <Route exact path={'/'} component={Home} />
              <Route path={'/comics/:id'} component={Comics} />
              <Route exact path={'/comics/'} component={Comics} />
            </Switch>
          </Article>
          <Footer>
            <MyTwitterLink />
            <MyGithubLink />
            <MyItchIoLink />
          </Footer>
        </Page>
      </Router>
    )
  }
}

export default App
