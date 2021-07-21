import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";
registerLocale("ja", ja);

const Deadline = ({handleChange, startDate} ) => {
  return (
    <div className="inline-block m-2">
      <DatePicker
        locale="ja"
        className="cursor-pointer bg-blue-100 p-1 rounded-lg"
        selected={startDate}
        dateFormat="yyyy/MM/dd"
        onChange={handleChange}
        minDate={new Date()}
        default
      />
    </div>
  );
};

export const DeadlineGray = ({handleChange, startDate, deadline} ) => {
  return (
    <div className="inline-block m-2">
      <DatePicker
        locale="ja"
        className="cursor-pointer hover:bg-gray-100 p-1"
        selected={deadline}
        dateFormat="yyyy/MM/dd"
        onChange={handleChange}
        minDate={new Date()}
        default
      />
    </div>
  );
};

export default Deadline;
