import {useEffect} from "react";
import {Calendar, DateLocalizer, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function CalendarPage() {

    useEffect(() => {
        document.title = "Task Manager - Calendar"

        return () => {
            document.title = "Task Manager"
        }
    }, [])

    const localize: DateLocalizer = momentLocalizer(moment);

    const today = new Date();

    const myEventsList = [
        { start: today, end: today, title: "Today" },
        { start: new Date(2024, 11, 18, 17, 30), end: new Date(2024, 11, 18, 18, 40), title: "Event on 18/12/2024" }
    ];

    return (
        <div>
            <h1 className={"flex justify-center items-center mb-10 font-bold text-2xl"}>Calendar</h1>
            <Calendar
                localizer={localize}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{height: 500}}
            />
        </div>
    )
}