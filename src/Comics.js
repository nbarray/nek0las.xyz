import React from 'react'
import styled from 'styled-components'

import Comic1 from '../images/comic-1.png'

const Comic = styled.img`
  width: 100%;
`

export default () => <Comic src={Comic1} alt="My first comic" />
