import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import background from '../../../assets/images/bg.png';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <header>
            <div className="hero text-accent" style={{
                background: `url(${background})`,
                backgroundSize: 'contain'
            }}>
                <div className="hero-content flex-col lg:flex-row-reverse min-h-screen">
                    <img src={chair} alt='dentist chair' className="w-1/2 rounded-lg shadow-2xl" />
                    <div className='mr-10'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        
                        />
                    </div>
                </div>
                
            </div>
        </header>
    );
};

export default AppointmentBanner;