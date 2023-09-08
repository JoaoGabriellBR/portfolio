import React from "react";
import { FaCalendar } from "react-icons/fa";

const Timeline = ({ events }: any) => {
  const div1 = "grid gap-4 mx-4 sm:grid-cols-12";
  const div2 = "relative col-span-12 px-4 space-y-6 sm:col-span-9";
  const div3 =
    "col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-white";
  const div4 =
    "flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-white";

  return (
    <div className="container max-w-5xl px-4 py-12 mx-auto">
      <div className={div1}>
        <div className={div2}>
          <div className={div3}>
            {events.map((item: any, index: number) => (
              <div key={index} className={div4}>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <time className="text-sm text-neutral-400">{item.date}</time>
                <p className="mt-3 text-neutral-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
