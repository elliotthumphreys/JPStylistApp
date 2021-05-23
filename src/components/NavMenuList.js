import * as React from "react"
import logo from "../images/logoBlack.svg"
import lightLogo from "../images/logoWhite.svg"
import styled from "styled-components"

// styles
const StyledNavBarLogo = styled.img`
width: 80px;
height: 107px;

@keyframes logoTiltOnHover {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

:hover {
  animation: 0.5s ease-out 0s 1 logoTiltOnHover;
}
`
const StyledNavLink = styled.a`
display: block;
font-size: 1.5rem;
font-variant-caps: all-petite-caps;
color: white;
padding: 0.3em 0;
font-family: -apple-system, Roboto, sans-serif, serif;

:hover {
  text-decoration: overline;
  cursor: pointer;
}
`

// markup
const NavMenuList = ({ useLightLogo = false }) => {
  return (
    <>
      <StyledNavLink>About</StyledNavLink>
      <StyledNavLink>Womens Book</StyledNavLink>
      <StyledNavLink>Mens Book</StyledNavLink>
      <StyledNavLink>Sports</StyledNavLink>
      <StyledNavLink>Commercial</StyledNavLink>
      <StyledNavLink>Still life</StyledNavLink>
      <StyledNavLink>Kidswear</StyledNavLink>
      <StyledNavBarLogo src={useLightLogo ? lightLogo : logo} />
      <StyledNavLink>Contact</StyledNavLink>
    </>
  )
}

export default NavMenuList