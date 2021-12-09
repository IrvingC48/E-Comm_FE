import React from 'react'
import { Carousel } from 'react-carousel-minimal';

import bannerWomen from '../../images/women-shoes banner2.jpg';
import bannerMen from '../../images/mens-shoes-banner2.jpg';


const data = [
    {
        // image: "https://bulma.io/images/placeholders/640x360.png",
        image: bannerWomen,
        caption: "Women"
    },
    {
        image: bannerMen,
        caption: "Men"
    }
];

const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
};

const slideNumberStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
};

const CarouselC = () => {
    return (
        <div>
            <Carousel
                data={data}
                time={4000}
                width="100%"
                height="60%"
                captionStyle={captionStyle}
                radius="1rem"
                slideNumber={false}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="black"
                pauseIconSize="50px"
                slideBackgroundColor="darkgrey"
                slideImageFit="container"
                thumbnails={false}
                thumbnailWidth="10%"
                style={{
                    textAlign: "center",
                    maxWidth: "90%",
                    maxHeight: "50%",
                    margin: "3% auto",
                }}
            />
        </div>
    )
}

export default CarouselC