import React from 'react'
import { Container } from './style'

const Modal = ({setShowModal, showModal}) => {
  return (
    <Container>
        <h1>{showModal ? "true" : "false"}</h1>
        <button onClick={() => setShowModal(false)}>Close</button>
    </Container>
  )
}

export default Modal