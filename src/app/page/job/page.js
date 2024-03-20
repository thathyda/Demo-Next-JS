import JobCard from "@/app/components/CardComponents/JobCard";
import React from "react";

const ITNew = () => {
  return (
    <>
    <h1 className="ml-32 text-3xl font-bold mt-10 pl-[110px]">USEFUL CONTENT</h1>
      <section className="container mx-auto flex flex-col items-center justify-center p-3">

        <div className="flex items-center justify-between gap-10">
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </section>
    </>
  );
};

export default ITNew;



