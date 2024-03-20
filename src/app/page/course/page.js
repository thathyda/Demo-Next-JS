import CourseCard from "@/app/components/CardComponents/CourseCard";
import React from "react";

const Course = () => {
  return (
    <>
    <h1 className="ml-32 text-3xl font-bold mt-10">COURSE</h1>
    <br/>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <br/>
    </>
  );
};

export default Course;





