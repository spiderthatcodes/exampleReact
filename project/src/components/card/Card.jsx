import React from 'react'
import { CardContainer, Title, TextBody } from './style'

const Card = ({title, textBody}) => {
  return (
    <CardContainer>
        <Title>{title}</Title>
        <TextBody>{textBody}</TextBody>
    </CardContainer>
  )
}

export default Card
