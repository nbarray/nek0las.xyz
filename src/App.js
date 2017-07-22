import React, { Component } from 'react'
import styled from 'styled-components'

import nek0las from '../images/nek0las.png'
import Comic1 from '../images/comic-1.png'

const Page = styled.div`
  display: grid;
  grid-template-areas: "Logo Header  Header"
                       "Menu   Article ."
                       "Footer Footer  Footer";
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
  flex-flow: row nowrap;
`

const Article = styled.div`
  grid-area: Article;
  justify-self: center;

  min-height: calc(100vh - 300px);
  width: 100%;
  max-width: calc(100vw - 500px);

  box-shadow: 0px 5px 10px rgba(45, 45, 45, 0.85);
`

const Footer = styled.div`
  grid-area: Footer;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items; center;
`

const Menu = styled.aside`
  grid-area: Menu;

  display: flex;
  flex-flow: column;
`

const MenuItem = styled.a`
  font-family: 'Pacifico', cursive;
  margin-top: 32px;
  margin-left: 16px;

  text-decoration: none;
  border: 0;
  color: ${props => props.active ? 'rgb(0, 0, 0)' : 'rgb(75, 75, 75)'};

  font-size: 32px;

  :hover {
    text-shadow: 2px 4px 2px rgba(41, 41, 41, 0.64);
  }
`

const Title = styled.span`
  height: 200px;
  line-height: 200px;

  margin-left: 32px;
  font-size: 2em;
  /*
   font-family: 'Permanent Marker', cursive;
   font-family: 'Chewy', cursive;
  */
  font-family: 'Pacifico', cursive;
`

class App extends Component {
  state = {
    page: '/comic'
  }

  render() {
    return (
      <Page>
        <Logo src={nek0las} alt='My profil picture' />
        <Header>
          <Title>Welcome to my personal webpage!</Title>
        </Header>
        <Menu>
          <MenuItem href="#" onClick={() => this.setState({ page: '/about' })} active={this.state.page === '/about'}>About Me</MenuItem>
          <MenuItem href="#" onClick={() => this.setState({ page: '/comic' })} active={this.state.page === '/comic'}>Comics</MenuItem>
          <MenuItem href="#" onClick={() => this.setState({ page: '/projects' })} active={this.state.page === '/projects'}>Projects</MenuItem>
        </Menu>
        <Article>
          <div>{this.state.page === '/about' && 'Hi! My bio will be up soon...'}</div>
          <div>{this.state.page === '/comic' && <img src={Comic1} alt='My first comic' />}</div>
          <div>{this.state.page === '/projects' && 'No projects.'}</div>
        </Article>
        <Footer>
          <a href='https://twitter.com'>Twitter</a>
          <a href='https://github.com'>Github</a>
          <a href='https://twitter.com'>Mail</a>
        </Footer>
      </Page>
    );
  }
}

export default App;
