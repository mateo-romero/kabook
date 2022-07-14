import React, { useState, useEffect } from "react";
import "./../Calendar.css";
import styled from "styled-components";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./../Button";
import addDays from "date-fns/addDays";
import subDays from "date-fns";
import { fetchUtil } from "./../../utils/fetchUtil";

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
  .react-datepicker__month-container{
    padding-right:20px;
    padding-left:20px;
    &:first-child{
        border-right: solid 2px rgba(0,0,0,0.4);
       
    }
    @media all and (max-width:700px){
        &:first-child{
            border-right: none;
            border-bottom: solid 2px rgba(0,0,0,0.4);
            margin-bottom:10px;
            padding-bottom:10px;
        }
    }
    @media all and (max-width:700px){
        padding-right:0px;
        padding-left:0px;
    }
    }
    .react-datepicker__navigation-icon::before{
        border-color:white;
        top:6.5px !important;
    }
    .react-datepicker__navigation-icon--next::before {
        left: -5px;
    }
    @media all and (max-width:700px){
        width:280px;
       
        
    }
    position:relative;
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
const Container = ({ children, hotel }) => {
  return (
    <div
      className="cotainerCalendarImportant"
      style={{
        background: "#FFFFFF",
        borderRadius: "5px",
        backgroundColor: "white",
        height: "300px",
        position: "relative",
        width: "700px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <StyledCalendarContainer>
        <div>{children}</div>
      </StyledCalendarContainer>
    </div>
  );
};
const SingleCalendar = ({ placeHolderText }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <DatePicker
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
      formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
    />
  );
};

const DoubleCalendar = ({ placeHolderText, takeDate, hotel }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [arrayInterval, setArrayInterval] = useState([]);
  let interval = (da1, da2) => {
    let object = {
      start: new Date(da1),
      end: new Date(da2),
    };
    return object;
  };
  let arrayInterval2 = [];
  let api = fetchUtil();
  let url = "https://kahoot12.herokuapp.com/bookings/product/" + hotel.id;
  api.get(url).then((res) => {
    if (!res.err) {
      let takeFechas = [];
      console.log(res);
      res.forEach((element) => {
        let fec = {
          first: element.dateBookingCheckIn,
          second: element.dateBookingCheckOut,
        };
        takeFechas.push(fec);
      });
      if (takeFechas.length > 0) {
        takeFechas.forEach((element) => {
          console.log(element);
          arrayInterval2.push(interval(element.first, element.second));
          setArrayInterval(arrayInterval2);
        });
      }
    } else {
      console.log("error");
    }
  });

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    takeDate(start, end);
  };
  return (
    <DatePicker
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      excludeDateIntervals={arrayInterval}
      calendarContainer={Container}
      selectsRange
      isClearable
      inline
      minDate={new Date()}
      placeholderText={placeHolderText}
      formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
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
              "react-datepicker__navigation react-datepicker__navigation--previousProduct"
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
              "react-datepicker__navigation react-datepicker__navigation--nextProduct"
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
          <div className="react-datepicker__month"></div>
        </div>
      )}
      monthsShown={2}
    />
  );
};

export default function Calendar({ placeHolderText, takeDate, hotel }) {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.screen.width);
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  });
  return screenWidth < 600 ? (
    <DoubleCalendar
      takeDate={takeDate}
      hotel={hotel}
      className="needFlex"
      placeholderText={placeHolderText}
    />
  ) : (
    <DoubleCalendar
      hotel={hotel}
      takeDate={takeDate}
      className="needFlex"
      placeholderText={placeHolderText}
    />
  );
}
