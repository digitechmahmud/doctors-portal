import React from 'react';

const ReviewCard = ({ review }) => {
    const { reviewText, name, img, location } = review;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{reviewText}</p>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt=''/>
                        </div>
                    </div>
                    <div className='mx-5'>
                        <p className='font-bold'>{name}</p>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;