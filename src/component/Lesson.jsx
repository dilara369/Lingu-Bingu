import React from "react";
import { useLoaderData } from "react-router-dom";
import LessonCard from "./LessonCard";

const Lesson = () => {
  const singleData = useLoaderData();
  // console.log(singleData)

  return (
    <div>
      {singleData.map((Lesson) => (
        <LessonCard key={Lesson.Lesson_no} Lesson={Lesson} />
      ))}
    </div>
  );
};

export default Lesson;
