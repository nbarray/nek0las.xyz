import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import nek0las from '../images/nek0las.png'

import Home from './Pages/Home'
import Comics from './Pages/Comics'
import Projects from './Pages/Projects'
import Header from './Header'
import TwitchPlayer from './TwitchPlayer'

import { MyGithubLink, MyTwitterLink, MyItchIoLink } from './components/ELink'
import MenuLink from './components/MenuLink'

import i18nSetup, { Internationalization } from './i18n'

i18nSetup()

const Page = styled.div`
  display: inline-grid;

  grid-template-areas: "Logo Header Feature" "Menu Article ." ". Footer .";
  grid-template-columns: 300px 1fr 200px;
  grid-template-rows: 200px 1fr 100px;

  @media screen and (max-width: 900px) {
    grid-template-areas: "Temporary" "Header" "Logo" "Menu" "Article" "Footer";
    grid-template-columns: auto;
    grid-template-rows: auto 200px 200px 200px auto 50px;
  }
`

const Logo = styled.img`
  grid-area: Logo;
  align-self: center;
  justify-self: center;
`

const AppHeader = styled(Header)`
  grid-area: Header;
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

const TempFeature = styled.div`
  @media screen and (max-width: 900px) {
    grid-area: Temporary;
    justify-self: center;
  }
  @media screen and (min-width: 901px) {
    position: fixed;
    top: 0;
    right: 0;
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <Internationalization>
          <Page>
            <TempFeature>
              <TwitchPlayer activate={true} />
            </TempFeature>
            <Logo src={nek0las} alt="My profil picture" />
            <AppHeader />
            <Menu>
              <MenuLink to={'comics/1'} label={'Comics'} />
              <MenuLink to={'projects'} label={'Projects'} />
              <MenuLink to={'about'} label={'About'} />
            </Menu>
            <Article>
              <Switch>
                <Route path={'/:lang/comics/:id'} component={Comics} />
                <Route exact path={'/:lang/comics/'} component={Comics} />
                <Route exact path={'/:lang/projects/'} component={Projects} />
                <Route exact path={'/:lang/about'} component={Home} />
                <Route
                  path={'/'}
                  component={props => {
                    return <Redirect to={`/${props.match.params.lang || 'en'}/comics/`} />
                  }}
                />
              </Switch>
            </Article>
            <Footer>
              <MyTwitterLink />
              <MyGithubLink />
              <MyItchIoLink />
            </Footer>
          </Page>
        </Internationalization>
      </Router>
    )
  }
}

export default App
