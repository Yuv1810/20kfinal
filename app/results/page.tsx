"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { redirect } from 'next/navigation';
import { useEffect } from "react";

const AllResultPage = () => {
  useEffect(()=>{
    const token= localStorage.getItem("token");
    console.log(token?.split(' ')[1]);
    if(!token){
      redirect('/login');
    }
  },[]);
  const router = useRouter();
  const handleClick = () => {
    router.push("/results/resultPage");
  };
  return (
    <div className="flex flex-col justify-center items-center my-10 w-full">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        All Results
      </h1>
      <div className="flex flex-col justify-center items-center my-10 md:w-3/6 ml-2 mr-2 border-2 rounded-lg p-4 border-gray-800">
        <div className=" flex flex-col justify-center items-center mb-10 ">
          <h2 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Tests Taken
          </h2>
          <div className=" flex flex-col justify-center items-center my-5 mb-5 md:mb-0">
            <button
              onClick={handleClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-80 ml-2 mr-2 my-5 mb-10 md:mb-0"
            >
              TEST 1
            </button>
            <div className="flex flex-row justify-center items-center md:mb-0">
              <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-80 ml-2 mr-2 my-5 mb-10 md:mb-0 "
              >
                TEST 2
              </button>
            </div>
            <div className="flex flex-row justify-center items-center md:mb-0">
              <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-80 ml-2 mr-2 my-5 mb-10 md:mb-0"
              >
                TEST 3
              </button>
            </div>
            <div className="flex flex-row justify-center items-center md:mb-0">
              <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-80 ml-2 mr-2 my-5 mb-10 md:mb-0"
              >
                TEST 4
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllResultPage;
