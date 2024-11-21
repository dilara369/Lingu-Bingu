import React from "react";
import { useLoaderData } from "react-router-dom";
import LessonCard from "./LessonCard";

const Lesson = () => {
  const singleData = useLoaderData();
  // console.log(singleData)

  return (
    <div>
      <div className=" flex justify-center gap-5">
      
        <p className="  h-[100px] w-[100px] text-center flex justify-center items-center text-md font-bold bg-green-200  rounded-full">
          Easy
        </p>
        <p className=" h-[100px] w-[100px]  text-center flex justify-center items-center text-md font-bold bg-yellow-200 rounded-full ">
          Medium
        </p>
        <p className=" h-[100px] w-[100px] text-center flex justify-center items-center  text-md font-bold bg-red-200 rounded-full ">
          Hard
        </p>
      </div>
      {/* card section  */}
      <div>
        {singleData.map((Lesson) => (
          <LessonCard key={Lesson.Lesson_no} Lesson={Lesson} />
        ))}
      </div>
    </div>
  );
};

export default Lesson;
