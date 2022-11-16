import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,
        },
        {
            id: 2,
            name: "Cavity Filling",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity
        },
        {
            id: 3,
            name: "Teeth Whitening",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening
        }
    ]
    return (
        <div className='mt-28'>
            <h2 className='text-primary font-bold text-xl text-center mt-10'>OUR SERVICES</h2>
            <h3 className='text-3xl font-semibold text-center text-accent'>Services We Provide</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 text-accent'>
                {
                    serviceData.map(service=><Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;