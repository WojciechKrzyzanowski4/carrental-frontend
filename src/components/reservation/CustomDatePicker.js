import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { SERVER_URL } from '../utilComponents/constant';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const [reservedDates, setReservedDates] = useState([]);
   
    const getDates = async () => {
        try {
            const response = await fetch(
                SERVER_URL + '/reservation',
                { method: 'GET', redirect: "follow", credentials:'include' }
            );
            
            if (!response.ok) {
                throw new Error('Failed to fetch cars');
            }
            const data = await response.json();
            setReservedDates(data);
        } catch (error) {
            console.error('Error fetching cars:', error.message);
        }
    }

  const isDateExcluded = (date) => {
    const dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    return reservedDates.some(reserved => reserved.reservationDate === dateString);
  };

  const filterPassedDate = (date) => {
    return !isDateExcluded(date);
  };

  useEffect(()=>{
    getDates();  
    }, []);

  return (
   
     
        <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        filterDate={filterPassedDate}
        minDate={new Date()}
        placeholderText="Select a date"
        />
    
   
  );
};

export default CustomDatePicker;