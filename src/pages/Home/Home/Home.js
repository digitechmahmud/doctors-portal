import React from 'react';
import DentalCare from '../../DentalCare/DentalCare';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import Services from '../../Services/Services';
import Testimonial from '../../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;