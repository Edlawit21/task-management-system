import dayjs from "dayjs";
import { useState } from "react";
import { generateDate, months } from "./FlatData";
import Cn from "./Cn";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function Calendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <div className="calendar-container-wrapper w-1/3 p-5 shadow-md rounded-md flex flex-col items-center justify-center mx-auto h-screen bg-white">
      {/* Calendar */}
      <div className="w-full h-96 ">
        <div className="flex gap-20 items-center">
          <h1 className="select-none font-semibold">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex gap-5 items-center">
            <LeftOutlined
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className="w-10 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <RightOutlined
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-7">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="text-sm text-center h-12 w-15 mt-4 grid place-content-center text-gray bg-gray-200 select-none"
              >
                {day}
              </h1>
            );
          })}
        </div>

        <div className="grid grid-cols-7">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="p-2 text-center h-11 grid place-content-center text-sm "
                >
                  <h1
                    className={Cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-purple-600 text-white " : "",
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-purple-300 text-white"
                        : "",
                      "h-10 w-10 rounded-full grid place-content-center hover:bg-purple-200 hover:text-white transition-all cursor-pointer select-none"
                    )}
                    onClick={() => {
                      setSelectDate(date);
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* Schedule */}
      <div className="w-full h-96 pt-3 flex flex-col items-center">
        <div className="mb-auto">
          <h1 className="font-semibold">
            Upcoming Schedule: {selectDate.toDate().toDateString()}
          </h1>
          <p className="text-gray-400">No meetings for this day.</p>
        </div>
        <Button>View All</Button>
      </div>
    </div>
  );
}
