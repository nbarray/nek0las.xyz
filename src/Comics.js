import React from 'react'
import styled from 'styled-components'
import { withRouter, Redirect, Link } from 'react-router-dom'
import range from 'lodash/range'

import Comic1 from '../images/comic-1.png'

const comicsCount = 1

const Comics = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: "Back Current Next" "Comic Comic Comic";
  grid-template-columns: 1/3fr 1/3fr 1/3fr;
  grid-template-rows: 100px auto;
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

export default withRouter(({ match }) => {
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
      <Comic src={Comic1} alt="My first comic" />
    </Comics>
  )
})
