import React from 'react'
import styled from 'styled-components'

import { i18n } from './i18n'

const Frame = styled.div`
  width: 400px;
  height: 50px;
  padding-right: 32px;

  background: black;
  color: rgb(138, 82, 168);

  font-family: "Permanent Marker", cursive;

  line-height: 50px;
  text-align: center;
  font-size: 32px;

  display: flex;
  justify-content: space-between;
`

const Player = styled.div`
  width: 400px;
  height: 300px;

  overflow: hidden;
`

const Button = styled.button`
  position: ${props => (props.switchOn ? 'absolute' : 'static')};
  height: 50px;
  width: 50px;

  background: transparent;
  border: 0px;
  color: ${props => (props.switchOn ? 'grey' : 'white')};
  font-style: bold;

  font-family: "Permanent Marker", cursive;
  font-size: 24px;
`

class TwitchPlayer extends React.Component {
  state = {
    switchOn: false
  }

  switchPlayer = to => {
    this.setState({ switchOn: to })
  }

  render() {
    const { activate } = this.props
    if (activate && this.state.switchOn) {
      return (
        <Player>
          <Button
            onClick={e => {
              e.preventDefault()
              this.switchPlayer(false)
            }}
            switchOn={true}>
            {i18n('Hide')}
          </Button>
          <iframe
            src="http://player.twitch.tv/?channel=nek0las"
            height="300px"
            width="400px"
            frameBorder="0"
            scrolling="no"
            allowFullScreen="true"
          />
        </Player>
      )
    }
    return (
      <Frame>
        <Button
          onClick={e => {
            e.preventDefault()
            this.switchPlayer(true)
          }}
          switchOn={false}>
          {i18n('Open')}
        </Button>
        Twitch Stream
      </Frame>
    )
  }
}

export default TwitchPlayer
