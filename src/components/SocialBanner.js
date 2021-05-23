import * as React from "react"
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'
import { FullScreenNavMenuContext } from '../components/FullScreenMenu'
import { MobileOrTabletOnly } from "../components/MediaQueryWrapper"

const NavBannerStyles = {
  position: 'relative',
  width: '60px',
  backgroundColor: 'rgb(0,0,0)',
  color: 'white'
}
const SocialIconStyles = {
  display: 'block',
  margin: '0.5rem auto 0.5rem',
  width: '30px',
  height: '30px',
  cursor: 'pointer'
}
const StyledBannerText = styled.a`
  display: block;
  color: #bccad0;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  transform: rotate(90deg) translate(20px, 0);
  cursor: pointer;
  text-decoration: none;
  padding: 0 0 0 0.5em;

  :hover {
    color: white;
  }
`
const StyledSocialsContainer = styled.div`  
    width: 100%;
    position: absolute;
    bottom: 0;
    color: white;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
`
const StyledMenuButton = styled.button`
  background: none;
  border: none;
  width: 100%;
  padding: 1em 0 0 0;
  cursor: pointer;
  outline: none;
`
const StyledNavBannerContent = styled.div`
    width: 100%;
    height: 100%;

    @keyframes slideIn {
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(0);
      }
    }

    animation: 1s ease-out 0s 1 slideIn;
`
const StyledSVGIcon = styled.svg`
  fill: #bccad0;

  :hover {
    fill: white;
  }
`

const SocialBanner = () => {
  const { toggleOpen } = React.useContext(FullScreenNavMenuContext);
  const handleButtonOnClick = () => toggleOpen()

  return (
    <div style={NavBannerStyles}>
      <StyledNavBannerContent>
        <MobileOrTabletOnly>
          <StyledMenuButton onClick={handleButtonOnClick}>
            <StyledSVGIcon viewBox="0 0 100 80" width="20" height="25">
              <rect width="100" height="20" rx="8"></rect>
              <rect y="30" width="100" height="20" rx="8"></rect>
              <rect y="60" width="100" height="20" rx="8"></rect>
            </StyledSVGIcon>
          </StyledMenuButton>
        </MobileOrTabletOnly>
        <StyledBannerText href="http://instagram.com/tags/johnproctorstylist">#JOHNPROCTORSTYLIST</StyledBannerText>
        <StyledSocialsContainer>
          <SocialIcon url="http://www.twitter.com" network="twitter" bgColor="#bccad0" style={SocialIconStyles} />
          <SocialIcon url="http://www.facebook.com" network="facebook" bgColor="#bccad0" style={SocialIconStyles} />
          <SocialIcon url="http://www.instagram.com" network="instagram" bgColor="#bccad0" style={SocialIconStyles} />
        </StyledSocialsContainer>
      </StyledNavBannerContent>
    </div>
  )
}

export default SocialBanner;