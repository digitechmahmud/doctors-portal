import React from 'react';
import banner from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero  py-10 text-accent">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='' src={banner} className="rounded-lg shadow-2xl w-1/2" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;