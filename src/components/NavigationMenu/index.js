import * as React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components';


export const CategoryContainer = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 30px 30px; 
    grid-template-areas: 
    ". . ."
    ". . ."; 
    height: calc(100% - 180px);
    width: calc(100% - 180px);
    padding: 90px;
    
    overflow: hidden;

    @media (orientation: portrait) {
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr 1fr; 
        gap: 30px 30px; 
        grid-template-areas: 
        ". . "
        ". . "
        ". . "; 
        height: calc(100% - 120px);
        width: calc(100% - 120px);
        padding: 60px;
    }

    @media screen and (max-width: 991px)
    {
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr 1fr; 
        gap: 30px 30px; 
        grid-template-areas: 
        ". . "
        ". . "
        ". . "; 
        height: calc(100% - 120px);
        width: calc(100% - 120px);
        padding: 60px;
    }

    @media screen and (max-width: 767px)
    {
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr 1fr; 
        gap: 30px 30px; 
        grid-template-areas: 
        ". . "
        ". . "
        ". . "; 
        height: calc(100% - 120px);
        width: calc(100% - 120px);
        padding: 60px;
    }

    @media screen and (max-width: 479px) 
    {
        display: flex;
        flex-direction: column;
        padding: 0px;
        width: 100%;
        height: 100%;
        overflow: scroll;
        padding: 30px 60px;
        padding-top: 60px;
    }
`
export const Category = styled(Link)`
    overflow: hidden;
    background: url(${props => props.url}) center no-repeat;
    background-size: cover;
    transition: opacity 200ms ease;
    &:hover{
        opacity: 0.6;
    }

    @media screen and (max-width: 479px)
    {
        height: 100%;
        min-height: 250px;
    }
`
const NavigationMenu = ({ categories }) => {

    return <CategoryContainer>
        {
            categories.concat(categories).concat(categories).map(cat => (
                <Category url={cat.image.file.url} href={cat.link.slug}>
                </Category>
            ))
        }
    </CategoryContainer>
}

export default NavigationMenu;