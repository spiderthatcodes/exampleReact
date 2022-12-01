import React from 'react'
import { LinkContainer, LinkName, NavbarContainer, SiteName } from './style'

function Navbar({linkNames, role}) {

  const filteredLinks = role === 'client' ? linkNames.filter(item => item !== 'Admin') : linkNames 

  return (
    <NavbarContainer>
        <SiteName>React Demo</SiteName>
        <LinkContainer>
          {filteredLinks.map((item, index) => <LinkName key={index}>{item}</LinkName>)}
        </LinkContainer>
    </NavbarContainer>
  )
}

export default Navbar
