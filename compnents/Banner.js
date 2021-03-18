import React, {useEffect, useState} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import BannerItems from './BannerItems.js';

if (typeof window !== 'undefined') {
    const M = window;
    require('materialize-css');
}

const Banner = () => {
    const tmpData = [
        {
            id: 1,
            url : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            tagline: 'Hallo Tagline ',
            slogan: 'Hallo Slogan 3'
        },
        {
            id: 2,
            url : 'https://cdn.eso.org/images/thumb300y/eso1907a.jpg',
            tagline: 'Hallo Tagline 1',
            slogan: 'Hallo Slogan 1'
        },
        {
            id: 3,
            url : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-christmas-rose-single-white-flower-royalty-free-image-1578194497.jpg',
            tagline: 'Hallo Tagline 2',
            slogan: 'Hallo Slogan 2'
        }
    ];

    const [banners, setbanner] = useState(tmpData);
    const options = {
        indicators : false,
        height : 500,
        duration: 800,
        interval: 6000,
    }
    useEffect(() => { 
        // setbanner(tmpData); 
        var elems = document.querySelectorAll('.slider');
        M.Slider.init(elems, options);
          
    },[]);

    return (
        <>
            <div className="slider">
                <ul className="slides">
                     {banners.map((banner) =>
                        <BannerItems ban = {banner} />
                        )}; 
                </ul>
            </div>
        </>
    )
}

export default Banner;