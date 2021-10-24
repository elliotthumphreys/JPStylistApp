import * as React from "react"
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
text-decoration: none;

:hover {
  text-decoration: overline;
  cursor: pointer;
}
`

const NavMenuList = ({ links, useLightLogo = false }) => {
  return (
    <>
      {links.map(link => {
        if(link.slug !== undefined)
          return <StyledNavLink key={link.slug} href={`/${link.slug}`}>{link.displayName}</StyledNavLink>

        return <StyledNavBarLogo
                  key={useLightLogo ? link.whiteLogo.file.url : link.blackLogo.file.url}
                  src={useLightLogo ? link.whiteLogo.file.url : link.blackLogo.file.url} />
      })}
    </>
  )
}

export default NavMenuList