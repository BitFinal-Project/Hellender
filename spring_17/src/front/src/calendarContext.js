import React, {createContext, useContext, useState} from 'react';

const CalendarContext = createContext();

export const useCalendar = () => {
    return useContext(CalendarContext);
};

export const CalendarProvider = ({children}) => {
    const [date, setDate] = useState(new Date());

    const prevMonth = () => {
        setDate((prevDate) => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() - 1);
            return newDate;
        });
    };

    const nextMonth = () => {
        setDate((prevDate) => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() + 1);
            return newDate;
        });
    };

    const goToday = () => {
        setDate(new Date());
    };

    return (
        <CalendarContext.Provider
            value={{
                date,
                prevMonth,
                nextMonth,
                goToday
            }}>
            {children}
        </CalendarContext.Provider>
    );
};
