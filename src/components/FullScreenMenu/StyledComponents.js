import styled from 'styled-components';
import { Link } from "gatsby"
import '../../fonts/fonts.css'

export const PositioningContainer = styled.div`
    top: 0;
    right: 0;
    position: absolute;
    display: block;
    padding: 18px;
    z-index: 1002;
`
export const StyledButtonContainer = styled.button`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    cursor: pointer;
    background-color: rgba(0,0,0,0);
    border: none;
`
export const StyledButtonContainerChildOne = styled.div`
    width: 44px;
    height: 2px;
    margin-top: 7px;
    margin-bottom: 7px;
    background-color: #fff;
    transform: translate3d(0px, ${props => props.translateY}, 0px)
            scale3d(1, 1, 1)
            rotateX(0deg)
            rotateY(0deg)
            rotateZ(${props => props.rotateZ})
            skew(0deg, 0deg);
    transform-style: preserve-3d;
`;
export const StyledButtonContainerChildTwo = styled(StyledButtonContainerChildOne)`
    width: ${props => props.width};
    transform: translate3d(0px, 0px, 0px)
            scale3d(1, 1, 1)
            rotateX(0deg)
            rotateY(0deg)
            rotateZ(${props => props.rotateZ})
            skew(0deg, 0deg);
    height: 2px;
`;
export const FullScreenNavDiv = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    display: block;
    position: absolute;
    background: black;
    transform: translateY(${
    props => props.open ? '0' : '-105vh'
    }) translateX(0px);
    transition: transform 300ms ease 0s;
`
export const GridContiner = styled.div`
    position: fixed;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 1003;
    display: -ms-grid;
    display: grid;
    width: 100%;
    height: 100%;
    grid-auto-columns: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    -ms-grid-columns: 325px 1fr minmax(490px,546px);
    grid-template-columns: 325px 1fr minmax(490px,546px);
    -ms-grid-rows: 325px 1fr;
    grid-template-rows: 325px 1fr;
    -webkit-transform: translate(0px, 0px);
    -ms-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
    overflow: hidden;
    opacity: ${props => props.showContent ? 1 : 0};
    transition: opacity 500ms ease 0s;

    @media screen and (max-width: 991px){
        grid-auto-rows: auto;
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
        -ms-grid-rows: auto minmax(auto, 33vh) auto;
        grid-template-rows: auto minmax(auto, 33vh) auto;
        text-align: center;
    }
`
export const GridItem1 = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: flex-start;
    -webkit-align-items: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    -ms-grid-row: span 1;
    grid-row-start: span 1;
    -ms-grid-row-span: 1;
    grid-row-end: span 1;
    -ms-grid-column: span 2;
    grid-column-start: span 2;
    -ms-grid-column-span: 2;
    grid-column-end: span 2;

    @media screen and (max-width: 991px){
        display: flex;
        flex-direction: row;
    }
`
export const GridItem2 = styled.div`
    overflow: hidden;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;

    @media screen and (max-width: 991px){
        display: none;
        padding-top: 15px;
        padding-bottom: 15px;
        border-right: none;
    }
`
export const GridItem3 = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    text-align: flex-end;
    margin: auto;

    @media screen and (max-width: 991px) {
        -ms-grid-column-span: 2;
        grid-column-end: 3;
        -ms-grid-column: 1;
        grid-column-start: 1;
        -ms-grid-row-span: 1;
        grid-row-end: 4;
        -ms-grid-row: 3;
        grid-row-start: 3;
        border-right: none;
        margin: 0px;
        margin-right: 30px;
        align-items: flex-end;
    }

    @media screen and (max-width: 767px)
    {
        margin: 0px;
        margin-right: 30px;
        align-items: flex-end;
    }

    @media screen and (max-width: 479px)
    {
        margin: 0px;
        margin-right: 20px;
        align-items: flex-end;
    }
`
export const GridItem4 = styled.div`
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-grid-row: span 1;
    grid-row-start: span 1;
    -ms-grid-row-span: 1;
    grid-row-end: span 1;
    -ms-grid-column: span 2;
    grid-column-start: span 2;
    -ms-grid-column-span: 2;
    grid-column-end: span 2;

    @media screen and (max-width: 991px){
        padding-top: 20px;
        padding-bottom: 20px;
        border-right-style: none;
        border-right: none;
    }

    padding-top: 30px;
    padding-bottom: 30px;
`
export const StyledHeading = styled.h2`
    color: white;
    margin: 0px;
    margin-left: 30px;
    margin-right: 10%;
    font-weight: 700;
    font-size: min(111px, 7.7vw);
    text-transform: uppercase;
    font-family: 'August', sans-serif;

    @media screen and (max-width: 991px)
    {
        font-size: 90px;
        line-height: 121%;
        text-align: left;
        margin: auto 0px;
        margin-left: 30px;
    }

    @media screen and (max-width: 767px)
    {
        max-width: 70%;
        margin-right: 0%;
        font-size: 60px;
        margin-left: 20px;
    }

    @media screen and (max-width: 479px)
    {
        max-width: 250px;
        font-size: 55px;
        letter-spacing: 1px;
        margin-left: 20px;
        padding-top: 64px;
    }
`
export const StyledImage = styled.img`
    height: 205px;
    margin: auto;
    display: block;
`
export const StyledSmallImage = styled.img`
    margin: auto;
    display: none;

    @media screen and (max-width: 991px)
    {
        display: block;
        height: 150px;
    }

    @media screen and (max-width: 767px)
    {
        height: 125px;
    }

    @media screen and (max-width: 479px)
    {
        height: 100px;
    }
`
export const StyledSocialLink = styled(Link)`
    color: white;
    margin: 0px;
    /* margin-right: 10%;
    margin-left: 5%; */
    font-weight: 700;
    font-size: 35px;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'August', sans-serif;

    @media screen and (max-width: 991px)
    {
        font-size: 35px;
        display: flex;
        flex-direction: row-reverse;
    }

    @media screen and (max-width: 767px)
    {
        font-size: 30px;
        display: flex;
        flex-direction: row-reverse;
    }

    @media screen and (max-width: 479px)
    {
        font-size: 28px;
        display: flex;
        flex-direction: row-reverse;
    }
`
export const StyledSocialExternalLink = styled.a`
    color: white;
    margin: 0px;
    font-weight: 700;
    font-size: 35px;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'August', sans-serif;

    @media screen and (max-width: 991px)
    {
        font-size: 35px;
        display: flex;
        flex-direction: row-reverse;
    }

    @media screen and (max-width: 767px)
    {
        font-size: 30px;
        display: flex;
        flex-direction: row-reverse;
    }

    @media screen and (max-width: 479px)
    {
        font-size: 28px;
        display: flex;
        flex-direction: row-reverse;
    }
`
export const LinkImage = styled.img`
    width: 35px;
    height: 35px;
    margin: 0px 10px;

    @media screen and (max-width: 991px)
    {
    }

    @media screen and (max-width: 767px)
    {
        width: 30px;
        height: 30px;
    }

    @media screen and (max-width: 479px)
    {
        width: 28px;
        height: 28px;
    }
`
export const SiteHeadingContainer = styled.div`
    left: 0;
    top: 0; 
    position: absolute;
`
export const SiteHeading = styled(Link)`
    transform: rotateZ(90deg);
    font-weight: 700;
    font-size: 1.75em;
    top: 4.35em;
    left: -2.55em;
    letter-spacing: 4px;
    margin: 0px;
    text-transform: uppercase;
    font-family: 'August', sans-serif;
    color: white;
    position: fixed;
    transform-style: preserve-3d;
    z-index: 999;
    text-decoration: none;

    @media screen and (max-width: 479px), screen and (max-width: 767px)
    {
        left: -2.55em;
    }
`
export const CategoryImage = styled.img`
    height: 100%;
    width: ${props => props.width}px;
`
export const CategoryImageContainer = styled(Link)`
    display: block;
    position: relative;
    height: 100%;
    /* margin-left: 30px; */
    -webkit-box-flex: 0;
     -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    -webkit-transition: opacity 200ms ease; 
    transition: opacity 200ms ease;
    overflow: hidden;
    width: ${props => props.width}px;

    &:hover{
        opacity: 0.6;
    }

    @media screen and (max-width: 991px){
        /* margin-left: 20px; */
    }
`
export const PaddedDiv = styled.div`
    position: relative;
    height: 100%;
    padding-right: 30px;

    @media screen and (max-width: 479px){
        padding-right: 20px;
    }
`
export const CategoryListContainer = styled.div`
    display: flex;
    height: 100%;
`
export const ScrollContent = styled.div`
    height: 100%;
    position: relative;
    overflow-x: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */

    &::-webkit-scrollbar { /* WebKit */
        width: 0;
        height: 0;
    }
`
export const StyledCategoryHeadingContainer = styled.div`
    /* position: absolute; */
    height: 100%;
    width: 100%;
    /* display: flex;
    justify-content: center;
    flex-direction: column; */

    position: relative;
`
export const StyledCategoryHeading = styled.p`
    color: white;
    font-weight: 700;
    font-size: 35px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: 'August', sans-serif;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 479px), screen and (max-width: 767px)
    {
        font-size: 30px;
    }
`