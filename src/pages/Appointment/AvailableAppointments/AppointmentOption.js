import React from 'react';

const AppointmentOption = ({ appointment, setTreatment}) => {
    const { name, slots } = appointment;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center my-10">
                <h2 className="font-bold text-2xl text-primary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(appointment)}
                        htmlFor="booking-modal"
                        className="btn text-white btn-primary ">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;