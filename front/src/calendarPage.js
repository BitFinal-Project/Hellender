import React from 'react';
import Calendar from './calendar';
import { CalendarProvider } from './calendarContext';
import Header from './header';

const CalendarPage = () => {
return (
    <div className='calendarTotlalPage'>
        <Header />
        <CalendarProvider>
            <Calendar/>
        </CalendarProvider>
    </div>
    );
};

export default CalendarPage;
