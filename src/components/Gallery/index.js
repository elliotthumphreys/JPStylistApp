import React, { useRef, useState, useEffect, memo } from 'react'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { SpringGrid, layout, makeResponsive } from 'react-stonecutter';
import { Gallery, Item } from 'react-photoswipe-gallery'
import styled from 'styled-components';

const GalleryContainer = styled.div`
    margin: ${props => `${props.margin.y}px ${props.margin.xR ?? props.margin.x}px ${props.margin.y}px ${props.margin.x}px`};
`
const Heading1 = styled.h1`
    margin: 0px;
    padding: 0px;
    color: white;
    text-transform: uppercase;
    font-family: 'August', sans-serif;
    font-weight: 700;
    line-height: 121%;
    font-size: 60px;
    width: 100%;
    text-align: right;
    padding-top: 15px;

    @media screen and (max-width: 767px)
    {
        font-size: 60px;
    }

    @media screen and (max-width: 479px)
    {
        letter-spacing: 1px;
        font-size: 48px;
        padding-right: 15px;
    }
`

const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

const MyGallery = memo(({ images, title }) => {
    const [margin, setMargin] = useState({ x: 60, y: 60 });

    const [screenWidth, setScreenWidth] = useState(1920);
    const prevScreenWidth = usePrevious(screenWidth);

    const [numberOfColumns, setSetNumberOfColumns] = useState(5);

    const Grid = makeResponsive(SpringGrid, {
        maxWidth: screenWidth
    });

    const setNumberOfColumns = event => {
        if (!window.innerWidth )
            return;

        let x = { x: 90 }
        let numberOfC = 5

        if (window.innerWidth > 991) {
        } else if (window.innerWidth > 767) {
            numberOfC = 3;
        } else {
            numberOfC = 2;
            x = { x: 60, xR: 0 };
        }

        let newScreenWidth = window.innerWidth - x.x - (x.xR ?? x.x);

        setScreenWidth(newScreenWidth);
        setSetNumberOfColumns(numberOfC);
        setMargin({ ...margin, ...x });
    }

    useEffect(() => {
        setNumberOfColumns();

        window.addEventListener('resize', setNumberOfColumns);

        return () => window.removeEventListener('resize', setNumberOfColumns);
    }, [])

    let maxImageWidth = screenWidth * 1.2;
    let gutterSize = 5;
    let columnWidth = (screenWidth / numberOfColumns) - (gutterSize);

    return (
        <GalleryContainer margin={margin}>
            <Heading1>{title}</Heading1>
            <Gallery>
                <Grid
                    component="ul"
                    columns={numberOfColumns}
                    columnWidth={columnWidth}
                    gutterWidth={gutterSize}
                    gutterHeight={gutterSize}
                    layout={layout.pinterest}
                >
                    {
                        images.map((image, index) => {
                            return (
                                <li key={`${image.file.url}-${index}`}
                                    style={{
                                        width: columnWidth,
                                        height: (columnWidth / image.file.details.image.width) * image.file.details.image.height,
                                        overflow: 'hidden'
                                    }}
                                    itemHeight={(columnWidth / image.file.details.image.width) * image.file.details.image.height}
                                >
                                    <Item
                                        style={{ cursor: 'pointer' }}
                                        original={`${image.file.url}?fm=jpg&fl=progressive&w=${Math.round(maxImageWidth)}`}
                                        thumbnail={`${image.file.url}?fm=jpg&fl=progressive&w=${Math.round(columnWidth)}`}
                                        width={image.file.details.image.width}
                                        height={image.file.details.image.height}
                                    >
                                        {({ ref, open }) => (
                                            <img
                                                ref={ref}
                                                onClick={open}
                                                src={`${image.file.url}?fm=jpg&fl=progressive&w=${Math.round(columnWidth)}&f=face&fit=fill`}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        )}
                                    </Item>
                                </li>
                            )
                        })
                    }
                </Grid>
            </Gallery>
        </GalleryContainer>)
})

export default MyGallery;