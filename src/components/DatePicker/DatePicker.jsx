import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickers() {
    const [startDate, setStartDate] = useState(new Date());

    function addDays(date, days){
        const result = date
        result.setDate(result.getDate() + days);
        return result;
    }

    return (
        <DatePicker 
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
            locale="pt-BR"
        />
    );
};