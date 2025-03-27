import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Latestnews = () => {
    return (
        <div className='flex gap-3 items-center bg-base-200 p-3'>
            <p className='bg-amber-700 text-base-100 px-3 py-2'>Latest</p>
             <Marquee pauseOnHover={true} speed={100}>
                <Link to="/">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis accusantium aliquam non temporibus libero quo ea, facere illo ipsum, labore asperiores consectetur assumenda ratione suscipit ipsa quibusdam, beatae totam dolor!</Link>
             </Marquee>
        </div>
    );
};

export default Latestnews;