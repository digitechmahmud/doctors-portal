import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import review from '../../assets/icons/quote.svg';
import ReviewCard from './ReviewCard';


const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            reviewText: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
            img: people1,
            location: "California"
        },  
        {
            _id: 2,
            name: "Winson Herry",
            reviewText: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
            img:people2,
            location: "California"
        },  
        {
            _id: 3,
            name: "Winson Herry",
            reviewText: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
            img:people3,
            location: "California"
        },  
    ]
    return (
        <section className='mt-28'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-primary font-bold text-xl'>Testimonial</h3>
                    <h2 className='text-4xl text-accent'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-48' src={review} alt="" />
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-accent'>
                {
                    reviews.map(review=><ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;