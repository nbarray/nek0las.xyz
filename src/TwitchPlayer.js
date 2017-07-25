import React from 'react'
import styled from 'styled-components'

import { i18n } from './i18n'

const ClosedFrame = styled.div`
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: black;
`

const Label = styled.span`
  padding-right: 16px;

  color: rgb(138, 82, 168);
  font-family: "Permanent Marker", cursive;
  font-size: 24px;
`

const VideoScreen = styled.iframe`
  width: 100%;
  height: 300px;
`

const Button = styled.button`
  position: ${props => (props.switchOn ? 'absolute' : 'static')};
  height: 50px;

  background: transparent;
  border: 0px;

  color: ${props => (props.switchOn ? 'grey' : 'white')};
  font-style: bold;
  font-family: "Permanent Marker", cursive;
  font-size: ${props => (props.switchOn ? 18 : 24)}px;
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
        <div>
          <Button
            onClick={e => {
              e.preventDefault()
              this.switchPlayer(false)
            }}
            switchOn={true}>
            {i18n('Hide')}
          </Button>
          <VideoScreen
            src="http://player.twitch.tv/?channel=nek0las"
            frameBorder="0"
            scrolling="no"
            allowFullScreen="true"
          />
        </div>
      )
    }
    return (
      <ClosedFrame>
        <Button
          onClick={e => {
            e.preventDefault()
            this.switchPlayer(true)
          }}
          switchOn={false}>
          {i18n('Open')}
        </Button>
        <Label>Twitch Stream</Label>
      </ClosedFrame>
    )
  }
}

export default TwitchPlayer
