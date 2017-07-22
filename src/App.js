import React, { Component } from 'react'
import styled from 'styled-components'

import Comic1 from '../images/comic-1.png'

const Page = styled.div`
  display: grid;
  grid-template-areas: "Header Header  Header"
                       "Left   Article Right";
  grid-template-columns: 25% 1fr 25%;
  grid-template-rows: 150px 1fr;
`

const Header = styled.div`
  grid-area: Header;
  background: red;
`

const Comic = styled.div`
  grid-area: Article;
  background: blue;
`

class App extends Component {
  render() {
    return (
      <Page>
        <Header>Header</Header>
        <Comic>Comic</Comic>
      </Page>
    );
  }
}

export default App;
