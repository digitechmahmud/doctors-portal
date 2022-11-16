import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment,setTreatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const fullname = form.fullname.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patientName: fullname,
            slot,
            email,
            phone
        }

        console.log(booking);
        setTreatment(null);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal text-accent">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-4">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input type="text" value={date} className="input input-bordered input-info w-full " />
                        <select name='slot' className="select select-bordered w-full input-bordered input-info">
                            
                            {
                                slots.map((slot,i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='fullname' placeholder="Full Name" className="input input-bordered input-info w-full " />
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered input-info w-full " />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered input-info w-full " /><br/>
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;