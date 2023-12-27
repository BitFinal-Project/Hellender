import React, {useState, useEffect} from 'react';
import { useCalendar } from './calendarContext';
import MyPagethree from "./myPagethree";


const Calendar = () => {
    const { date, prevMonth, nextMonth, goToday } = useCalendar();
    const [calendarData, setCalendarData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null); 
    const [isDiaryOpen, setIsDiaryOpen] = useState(false);

    useEffect(() => {
        renderCalendar();
    }, [date]);

    const renderCalendar = () => {
        const today = new Date();
        const viewYear = date.getFullYear();
        const viewMonth = date.getMonth();

        const prevLast = new Date(viewYear, viewMonth, 0);
        const thisLast = new Date(viewYear, viewMonth + 1, 0);

        const PLDate = prevLast.getDate();
        const PLDay = prevLast.getDay();

        const TLDate = thisLast.getDate();
        const TLDay = thisLast.getDay();

        const prevDates = [];
        const thisDates = [...Array(TLDate + 1).keys()].slice(1);
        const nextDates = [];

        if (PLDay !== 6) {
            for (let i = 0; i < PLDay + 1; i++) {
                prevDates.unshift(PLDate - i);
            }
        }

        for (let i = 1; i < 7 - TLDay; i++) {
            nextDates.push(i);
        }

        const dates = prevDates.concat(thisDates, nextDates);
        const firstDateIndex = dates.indexOf(1);
        const lastDateIndex = dates.lastIndexOf(TLDate);

        const calendarData = dates.map((date, i) => {
            const condition = i >= firstDateIndex && i < lastDateIndex + 1
                ? 'this'
                : 'other';

            const isToday = viewYear === today.getFullYear() &&
                viewMonth === today.getMonth() &&
                +date === today.getDate();

            return (
                <div 
                    key={i}
                    className={`date ${condition} ${isToday ? 'today' : ''}`}
                    onClick={() => handleDateClick(date)}
                >
                    <div className="date-itm">{date}</div>
                    <div className="date_event">
                    <div className="event-itm">Day</div>
                    </div>
                </div>
            );
        });

        setCalendarData(calendarData);
    };

    const handleDateClick = (clickedDate) => {
        setSelectedDate(clickedDate);
        setIsDiaryOpen(true);
    };

    const closeDiaryPopup = () => {
        setSelectedDate(null);
        setIsDiaryOpen(false);
    };

    return (
        <div className="calendar">

            <div className="calendar_header">
                <div className="calendar_nav">
                    <button className="nav-btn go-prev" onClick={prevMonth}>&lt;</button>
                    <span className="year">{date.getFullYear()}</span>.&nbsp;
                    <span className="month">{date.getMonth() + 1}</span>.
                    <button className="nav-btn go-next" onClick={nextMonth}>&gt;</button>
                </div>
            </div>
            
            <div className="calendar_main">
                <div className="days">
                    <div className="day">Sunday</div>
                    <div className="day">Monday</div>
                    <div className="day">Tuesday</div>
                    <div className="day">Wednesday</div>
                    <div className="day">Thursday</div>
                    <div className="day">Friday</div>
                    <div className="day">Saturday</div>
                </div>
                <div className="dates">{calendarData}</div>
            </div>

            {isDiaryOpen && (
                <div className="diary-popup">
                    <div className="diary-content">
                        <h2>{selectedDate} Diary</h2>
                        <MyPagethree closePopup={closeDiaryPopup}/>
                    </div>
                    <button onClick={closeDiaryPopup}></button>
                </div>
            )}
        </div>
    );
};

export default Calendar;

