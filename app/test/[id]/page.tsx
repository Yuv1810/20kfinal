"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/component/Header";
const TestComponent = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/resultPage");
  };
  return (
    <>
    <Header/>
    <div className="flex flex-col justify-center items-center my-10 w-full">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        MCQ Test
      </h1>
      <div className="flex flex-col justify-center items-center my-10 md:w-3/6 ml-2 mr-2 border-2 rounded-lg p-4 border-gray-800">
        <div className=" flex flex-col justify-center items-center mb-10 ">
          Question 1. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum
        </div>
        <div className="flex flex-row justify-center items-center w-full mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/6 ml-2 mr-2">
            Previous
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/6 ml-2 mr-2">
            Next
          </button>
        </div>
        <div className="flex flex-row justify-center items-center w-full">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/6 ml-2 mr-2">
            Submit
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/6 ml-2 mr-2">
            End
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-10 md:w-3/6 ml-2 mr-2 border-2 rounded-lg p-4 border-gray-800">
        <div className=" flex flex-col justify-center items-center mb-10 ">
          Question 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="flex flex-row justify-center items-center w-full mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/6 ml-2 mr-2">
            Previous
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/6 ml-2 mr-2">
            Next
          </button>
        </div>
        <div className="flex flex-row justify-center items-center w-full">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/6 ml-2 mr-2">
            Submit
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/6 ml-2 mr-2">
            End
          </button>
        </div>
      </div>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 ml-2 mr-2 "
      >
        Submission
      </button>
    </div>
    </>
  );
};
export default TestComponent;
