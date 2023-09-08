import React from "react";
import { FaCalendar } from "react-icons/fa";

const Timeline = ({ events }: any) => {
  return (
    <>
      {/* <div className="bg-white rounded-lg w-1 h-64"></div> */}
      {/* TIMELINE COMPONENT */}

      <ol className="flex flex-row items-center justify-center">
        <li className="w-full md:w-4/12 p-5 rounded-lg shadow dark:bg-neutral-800">
          <h1 className="text-xl font-bold">Split Risk</h1>
          <time className="text-sm text-neutral-400">25/04/2022</time>
          <p className="mt-3 text-neutral-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, necessitatibus accusamus! Blanditiis aut totam et
            dolores eius corporis officia consequuntur?
          </p>
        </li>
      </ol>
    </>
  );
};

export default Timeline;
