import React, { useState, useEffect } from 'react';
import './Calendar.css';
import styled from 'styled-components';
import DatePicker, {CalendarContainer} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from './Button'

const StyledCalendarContainer = styled(CalendarContainer)`
  & * {
    background: white;
  }
  font-family: 'roboto';
  font-size: 0.8rem;
  display: flex;
  width: max-content;
  .react-datepicker__day--outside-month {
    background: none;
  }
`;
const StyledButtonContainer = styled.div`
  padding: 0.3em;
  display: flex;
  justify-content: end;
  widht: auto;
  height: auto;
  padding: 0.5em;
`;
const Container = ({children}) => {
  return (
    <div style={{background: '#FFFFFF', position: 'relative'}}>
      <StyledCalendarContainer>
        <div>
          {children}
        </div>
      </StyledCalendarContainer>
      <StyledButtonContainer>
        <Button text="Aplicar" color="#FFFFFF" backgroundColor="#1DBEB4" />
      </StyledButtonContainer>
    </div>
  )
}
const SingleCalendar = ({placeHolderText,takeDate}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    takeDate(start,end);
  };
  return (
    <DatePicker
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      calendarContainer={Container}
      selectsRange
      placeholderText={placeHolderText}
      formatWeekDay={nameOfDay => nameOfDay.substr(0,1)}
    />
  );
};

const DoubleCalendar = ({placeHolderText,takeDate}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    takeDate(start,end);
  };
  return (
    <DatePicker
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      calendarContainer={Container}
      selectsRange
      isClearable
      placeholderText={placeHolderText}
      formatWeekDay={nameOfDay => nameOfDay.substr(0,1)}
      renderCustomHeader={({
        monthDate,
        customHeaderCount,
        decreaseMonth,
        increaseMonth,
      }) => (
        <div>
          <button
            aria-label="Previous Month"
            className={
              "react-datepicker__navigation react-datepicker__navigation--previous"
            }
            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
            onClick={decreaseMonth}
          >
            <span
              className={
                "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
              }
            >
              {"<"}
            </span>
          </button>
          <span className="react-datepicker__current-month">
            {monthDate.toLocaleString("es-US", {
              month: "long",
            })}
          </span>
          <button
            aria-label="Next Month"
            className={
              "react-datepicker__navigation react-datepicker__navigation--next"
            }
            style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
            onClick={increaseMonth}
          >
            <span
              className={
                "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
              }
            >
              {">"}
            </span>
          </button>
            <div className='react-datepicker__month'>
            </div>
        </div>
      )}
      monthsShown={2}
    />
  );
};

export default function Calendar({placeHolderText,takeDate}) {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  useEffect(()=> {
    window.addEventListener('resize', () => {
      setScreenWidth(window.screen.width);
    })
    return () => {
      window.removeEventListener('resize', () =>{});
    }
  });
  return (
      screenWidth < 600 ? <SingleCalendar takeDate={takeDate} placeholderText={placeHolderText}/> : <DoubleCalendar takeDate={takeDate} placeholderText={placeHolderText}/>
  );
};