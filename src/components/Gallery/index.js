import React, { useEffect, useState, useRef } from 'react'
import { Link } from "gatsby"
import styled from 'styled-components';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { SpringGrid, measureItems, layout, makeResponsive  } from 'react-stonecutter';
import { Gallery, Item } from 'react-photoswipe-gallery'
import Image from 'react-async-image';

const MyGallery = ({ images }) => {
    const downloadedImages = useRef([]);

    const Grid = makeResponsive(SpringGrid, {
        maxWidth: 1920
    });

    return (
    <Gallery>
        <Grid
          component="ul"
          columns={5}
          columnWidth={350}
          gutterWidth={5}
          gutterHeight={5}
          layout={layout.pinterest}
        >
            {
                images.map((image, index) => {
                    return (
                    <li key={`${image.file.url}-${index}`}
                    style={{
                        width:350,
                        height:(350 / image.file.details.image.width ) * image.file.details.image.height,
                        overflow: 'hidden'
                    }}
                    itemHeight={(350 / image.file.details.image.width ) * image.file.details.image.height}
                    >
                        <Item
                            style={{ cursor: 'pointer' }}
                            original={image.file.url}
                            thumbnail={`${image.file.url}?w=300`}
                            width={image.file.details.image.width}
                            height={image.file.details.image.height}
                        >
                        {({ ref, open }) => (
                            <img 
                            ref={ref}
                            onClick={open} 
                            src={`${image.file.url}?w=350`}
                            />
                        )}
                    </Item>
                    </li>
                    )
                })
            }
        </Grid>
    </Gallery>)
}

export default MyGallery;