import React from 'react';
import banner from '../../../imeges/banner-img.png'



const Banner = () => {
    return (
        <div id='banner'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Md Al Amin</h1>
                        <p className="py-6">I am a web developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong under-standing of web standards and best practices, and I am passionate about creating websites that users will find easy to use and visually appealing.</p>
                        <a href='https://drive.google.com/file/d/1AbCEaUhXj4cA7eWP9v7wSB78bI8Y_cVx/view?usp=sharing' className="btn btn-outline btn-primary" target="_blank">View Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;