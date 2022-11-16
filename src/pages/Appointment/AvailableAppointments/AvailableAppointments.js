import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointments, setAppointments] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('appointments.json')
            .then(res => res.json())
            .then(data=>setAppointments(data))
    },[])
    return (
        <section className='min-h-screen my-16'>
            <h2 className='text-center text-secondary font-bold mb-10'>Available Appointments on {format(selectedDate, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-accent gap-6 '>
                {
                    appointments.map(appointment => <AppointmentOption
                        key={appointment._id}
                        appointment={appointment}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                        treatment={treatment}
                        selectedDate={selectedDate}
                        setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;