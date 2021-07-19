import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";
registerLocale("ja", ja);

const Deadline = ({handleChange, startDate} ) => {
  return (
    <div className="inline-block m-4">
      <span>期限: </span>
      <DatePicker
        locale="ja"
        className="bg-blue-100 rounded-lg p-1"
        selected={startDate}
        dateFormat="yyyy/MM/dd"
        onChange={handleChange}
        default
      />
    </div>
  );
};

export default Deadline;
