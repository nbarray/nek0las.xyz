import React from 'react'
import styled from 'styled-components'
import { withRouter, Redirect, Link } from 'react-router-dom'
import range from 'lodash/range'

import Title from './components/Title'

const comicsCount = 1

const comicsNames = {
  1: "Slack Games"
}

const Comics = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: "Back Current Next"
                       "Title Title Title"
                       "Comic Comic Comic";
  grid-template-columns: 1/3fr 1/3fr 1/3fr;
  grid-template-rows: 100px 100px auto;
`

const Back = styled(Link)`
  grid-area: Back;
  justify-self: end;
  text-decoration: none;
  color: black;

  font-family: 'Pacifico', cursive;
  font-size: 32px;

  :hover {
    text-shadow: 2px 4px 2px rgba(41, 41, 41, 0.64);
  }
`
const Current = styled.div`
  grid-area: Current;
  justify-self: center;
`
const Next = styled(Link)`
  grid-area: Next;
  justify-self: start;
  text-decoration: none;
  color: black;

  font-family: 'Pacifico', cursive;
  font-size: 32px;

  :hover {
    text-shadow: 2px 4px 2px rgba(41, 41, 41, 0.64);
  }
`

const ComicTitle = Title.extend`
  grid-area: Title;
  justify-self: center;
`

const Comic = styled.img`
  grid-area: Comic;
  width: 100%;
`

const ComicId = styled(Link)`
  margin-left: 8px;
  margin-right: 8px;

  font-size: ${props => (props.selected ? '42px' : '32px')};
  text-decoration: none;
  color: black;

  font-family: 'Pacifico', cursive;
  :hover {
    text-shadow: 2px 4px 2px rgba(41, 41, 41, 0.64);
  }
`

const isInvalidComicId = id => id === undefined || id <= 0 || id > comicsCount

const imageToDisplay = (id, lang) => {
  return require(`../images/comic-${id}-${lang}.png`)
}

export default withRouter(({ location, match }) => {
  const comicId = match.params.id || comicsCount
  const comicsCounts = range(1, comicsCount + 1).map(id => {
    return (
      <ComicId key={id} selected={id === +comicId} to={`/comics/${id}`}>
        {id}
      </ComicId>
    )
  })

  return (
    <Comics>
      {isInvalidComicId(comicId) && <Redirect to={`/comics/${comicsCount}`} />}
      <Back to={`/comics/${comicId - 1}`}>
        {'<'}
      </Back>
      <Current>
        {comicsCounts}
      </Current>
      <Next to={`/comics/${comicId + 1}`}>
        {'>'}
      </Next>
      <ComicTitle>{comicsNames[+comicId]}</ComicTitle>
      <Comic src={imageToDisplay(comicId, location.pathname.split('/')[1])} alt="My first comic" />
    </Comics>
  )
})
