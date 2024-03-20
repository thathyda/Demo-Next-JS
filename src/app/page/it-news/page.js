import ITCard from "@/app/components/CardComponents/ITCard";
import React from "react";

const ITNew = () => {
  return (
    <>
    <h1 className="ml-32 text-3xl font-bold mt-10">USEFUL CONTENT</h1>
    <section className="container mx-auto flex flex-col items-center justify-center p-3">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ITCard />
        <ITCard />
        <ITCard />
        <ITCard />
        <ITCard />
        <ITCard />
        <ITCard />
        <ITCard />
      </div>
      </section>
      <br/>
      <br/>
      <br/>
    </>
  );
};

export default ITNew;






