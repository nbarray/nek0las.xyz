import React from 'react'
import styled from 'styled-components'
import { withRouter, Redirect, Link } from 'react-router-dom'
import range from 'lodash/range'

import Title from '../components/Title'

const comicsCount = 2

const comicsNames = {
  1: 'Slack Games',
  2: 'No idea'
}

const Comics = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: "Back Current Next" "Title Title Title" "Comic Comic Comic";
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

const isInvalidComicId = id => {
  return id === undefined || id <= 0 || id > comicsCount
}

const imageToDisplay = (id, lang) => {
  return require(`../../images/comic-${id}-${lang}.png`)
}

export default withRouter(({ location, match }) => {
  const comicId = +match.params.id || +comicsCount
  const lang = location.pathname.split('/')[1]

  if (isInvalidComicId(comicId)) {
    return <Redirect to={`/${lang}/comics/${comicsCount}`} />
  }

  const prevId = comicId > 1 ? comicId - 1 : comicId
  const nextId = comicId < comicsCount ? comicId + 1 : comicId
  const comicsCounts = range(1, comicsCount + 1).map(id => {
    return (
      <ComicId key={id} selected={id === +comicId} to={`/${lang}/comics/${id}`}>
        {id}
      </ComicId>
    )
  })

  return (
    <Comics>
      <Back to={`/${lang}/comics/${prevId}`}>
        {'<'}
      </Back>
      <Current>
        {comicsCounts}
      </Current>
      <Next to={`/${lang}/comics/${nextId}`}>
        {'>'}
      </Next>
      <ComicTitle>
        {comicsNames[+comicId]}
      </ComicTitle>
      <Comic src={imageToDisplay(comicId, lang)} alt="The comic" />
    </Comics>
  )
})
