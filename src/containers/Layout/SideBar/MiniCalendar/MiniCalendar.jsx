import { useEffect, useState } from "react";
import { Minicalendar } from "./index.style";

let date = new Date();

var daysActiveArray = [];

const MiniCalendar = () => {
    const [currMonth, setCurrMonth] = useState(date.getMonth());
    const [currYear, setCurrYear] = useState(date.getFullYear());

    const updateDays = () => {
        let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
            lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
            lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
            lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

        var daysArray = [];
        var j = 0;
        for (let i = firstDayofMonth; i > 0; i--) {
            daysArray.push(lastDateofLastMonth - i + 1);
            daysActiveArray[j++] = "inactive";
        }

        for (let i = 1; i <= lastDateofMonth; i++) {
            let isToday = i === new Date().getDate() && currMonth === new Date().getMonth()
                && currYear === new Date().getFullYear() ? "active" : "";
            daysArray.push(i);
            daysActiveArray[j++] = isToday;
        }

        for (let i = lastDayofMonth; i < 6; i++) {
            daysArray.push(i - lastDayofMonth + 1);
            daysActiveArray[j++] = "inactive";
        }
        return daysArray;
    }

    var daysArray = updateDays();

    const [days, setDays] = useState(daysArray);

    useEffect(() => {
        setDays(daysArray);
    }, [date]);

    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    const next = () => {
        if (currMonth >= 11) {
            date = new Date(currYear + 1, 0);
            setCurrYear(date.getFullYear())
            setCurrMonth(date.getMonth());
        } else {
            setCurrMonth(currMonth + 1);
            date = new Date(currYear, currMonth+1);
        }
        daysArray = updateDays();
    }

    const prev = () => {
        if (currMonth <= 0) {
            date = new Date(currYear - 1, 11);
            setCurrYear(date.getFullYear())
            setCurrMonth(date.getMonth());
        } else {
            setCurrMonth(currMonth - 1);
            date = new Date(currYear, currMonth-1);
        }
        daysArray = updateDays();
    }

    return (
        <Minicalendar>
            <div className="wrapper">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"></link>
                <header>
                    <div className="icons">
                        <span id="prev" className="material-symbols-rounded" onClick={prev}>chevron_left</span>
                    </div>
                    <p className="current-date">{months[currMonth]} {currYear}</p>
                    <div className="icons">
                        <span id="next" className="material-symbols-rounded" onClick={next}>chevron_right</span>
                    </div>
                </header>
                <div className="miniCalendar">
                    <ul className="weeks">
                        <li>Su</li>
                        <li>Mo</li>
                        <li>Tu</li>
                        <li>We</li>
                        <li>Th</li>
                        <li>Fr</li>
                        <li>Sa</li>
                    </ul>
                    <ul className="days">
                        {days.map((day, index) => {
                            return <li className={daysActiveArray[index]} onClick={(e) => getDate(day, index)}>{day}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </Minicalendar>
    );
}

function getDate(day, index) {
    const currMonth = date.getMonth();
    const currYear = date.getFullYear();
    var month;
    var year;
    if (daysActiveArray[index] === "inactive") {
        if (index < 6) {
            if (currMonth === 0) {
                month = 11;
                year = currYear - 1;
            } else {
                month = currMonth - 1;
                year = currYear;
            }
        } else {
            if (currMonth === 11) {
                month = 0;
                year = currYear + 1;
            } else {
                month = currMonth + 1;
                year = currYear;
            }
        }
    } else {
        year = currYear;
        month = currMonth;
    }
    return console.log(new Date(year, month, day));
}

export function setDate(newDate){
    date = newDate;
}

export default MiniCalendar;