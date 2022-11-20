import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { user } = useContext(AuthContext);
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

        fetch('http://localhost:5005/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed');
                    refetch();
                }
                else {
                    toast(data.message);
                }
            })
            .catch(err=>console.log(err))

        // console.log(booking);
        
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
                        <input type="text" name='fullname' placeholder="Full Name" defaultValue={user?.displayName}  className="input input-bordered input-info w-full" readOnly/>
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered input-info w-full " />
                        <input type="email" name='email' defaultValue={user?.email} placeholder="Email"  className="input input-bordered input-info w-full " readOnly /><br/>
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
                <Toaster/>
            </div>
        </>
    );
};

export default BookingModal;