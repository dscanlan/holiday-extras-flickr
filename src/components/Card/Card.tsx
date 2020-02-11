import React, { FC } from 'react';
import {
  Container
} from './Card.styles'

const Card: FC<{}> = ({children}) => {
  return(
    <Container>{children}</Container>
  )
}

export default Card;