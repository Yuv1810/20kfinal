"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/component/Header";
import { useEffect } from "react";
import { redirect } from 'next/navigation';
import axios from "axios";
import { headers } from "next/headers";

const TestComponent = ({params}:{
  params: {id:string}
}) => {



  
  const id=params.id;
  var k_id:string=id;
  useEffect(()=>{
    const token= localStorage.getItem("token");
    console.log(token?.split(' ')[1]);
    if(!token){
      redirect('/login');
    }
    
  },[]);
  
  // fetch api to server

  const Question=[
    {
      "question": "What is the purpose of the \"for in\" loop in JavaScript?",
      "options": [
        "To iterate over objects",
        "To iterate over arrays",
        "To execute code multiple times",
        "To iterate over strings"
      ],
      "correct_option": "1",
      "explanation": "The \"for in\" loop in JavaScript is used to iterate over the properties of an object."
    },
    {
      "question": "What does the ternary operator do in JavaScript?",
      "options": [
        "It assigns a value based on a condition",
        "It creates a new function",
        "It declares a variable",
        "It executes code multiple times"
      ],
      "correct_option": "1",
      "explanation": "The ternary operator is used to assign a value to a variable based on a condition in JavaScript."
    },
    {
      "question": "What is the purpose of the \"addEventListener()\" method in JavaScript?",
      "options": [
        "To attach an event listener to an element",
        "To create a new function",
        "To execute code asynchronously",
        "To remove an event listener from an element"
      ],
      "correct_option": "1",
      "explanation": "The \"addEventListener()\" method in JavaScript is used to attach an event listener to an element for specific events."
    },
    {
      "question": "What does the \"typeof\" operator do in JavaScript?",
      "options": [
        "It returns the data type of a variable or expression",
        "It creates a new function",
        "It executes code asynchronously",
        "It removes an event listener from an element"
      ],
      "correct_option": "1",
      "explanation": "The \"typeof\" operator in JavaScript is used to return the data type of a variable or expression."
    },
    {
      "question": "What does the \"this\" keyword refer to in JavaScript?",
      "options": [
        "The current object",
        "The global object",
        "A local variable",
        "A constant"
      ],
      "correct_option": "1",
      "explanation": "In JavaScript, the \"this\" keyword refers to the current object."
    },
    {
      "question": "What does the \"strict mode\" do in JavaScript?",
      "options": [
        "Enforces stricter error checking and syntax restrictions",
        "Executes code asynchronously",
        "Defines a new function",
        "Creates a new variable"
      ],
      "correct_option": "1",
      "explanation": "The \"strict mode\" in JavaScript enforces stricter error checking and syntax restrictions, which can help catch common coding mistakes."
    },
    {
      "question": "What does the \"break\" statement do in JavaScript?",
      "options": [
        "Terminates the current loop or switch block",
        "Creates a new function",
        "Defines a new variable",
        "Executes code asynchronously"
      ],
      "correct_option": "1",
      "explanation": "The \"break\" statement is used to terminate the current loop or switch block in JavaScript."
    },
    {
      "question": "What does the \"continue\" statement do in JavaScript?",
      "options": [
        "Skips the remainder of the current iteration and continues with the next iteration",
        "Creates a new function",
        "Defines a new variable",
        "Executes code asynchronously"
      ],
      "correct_option": "1",
      "explanation": "The \"continue\" statement is used to skip the remainder of the current iteration and continue with the next iteration in JavaScript."
    },
    {
      "question": "What does the \"throw\" keyword do in JavaScript?",
      "options": [
        "Throws an exception",
        "Creates a new function",
        "Defines a new variable",
        "Executes code asynchronously"
      ],
      "correct_option": "1",
      "explanation": "The \"throw\" keyword is used to throw an exception in JavaScript."
    },
    {
      "question": "What does the \"try-catch\" block do in JavaScript?",
      "options": [
        "Catches and handles exceptions",
        "Defines a new function",
        "Executes code asynchronously",
        "Creates a new variable"
      ],
      "correct_option": "1",
      "explanation": "The \"try-catch\" block is used to catch and handle exceptions in JavaScript."
    }
  ];
  const markedoption:any=[];
  for(var i=0;i<Question.length;i++){
    markedoption.push(-1);
  }

  const [markoption,setmarkoption]=useState(markedoption);

  useEffect(()=>{
    if(id!='1' && id!='2'){
      redirect('/test');
    }

  },[]);


  console.log("***************************");
  console.log(Question[0].options[0]);
  console.log("***************************");

  const router = useRouter();
  const handleClick = () => {
    console.log(id);
    router.push("/test/"+id+"/result");
  };
  return (
    <>
    <Header/>
    <div className="flex flex-col justify-center items-center my-10 w-full">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        MCQ Test
      </h1>
      {Question.length > 0 ? Question.map((q, index) => (
          <div key={index} className="flex flex-col justify-center items-center my-10 md:w-3/6 ml-2 mr-2 border-2 rounded-lg p-4 border-gray-800">
            <div className="flex flex-col justify-center items-center mb-10">
              {q.question}
            </div>
            <div className="flex flex-row justify-center items-center w-full mb-4">

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/6 ml-2 mr-2 h-4/6" onClick={()=>{
              setmarkoption(()=>{
                markoption[index]=0;
                return markoption;
              });                
              }}>
                {q.options[0]}
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/6 ml-2 mr-2 h-4/6" onClick={()=>{
              setmarkoption(()=>{
                markoption[index]=1;
                return markoption;
              });                
              }}>
                {q.options[1]} h-20
              </button>
            </div>
            <div className="flex flex-row justify-center items-center w-full mb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/6 ml-2 mr-2 h-4/6" onClick={()=>{
              setmarkoption(()=>{
                markoption[index]=2;                return markoption;
              });                
              }}>
                {q.options[2]}
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/6 ml-2 mr-2 h-4/6" onClick={()=>{
              setmarkoption(()=>{
                markoption[index]=3;
                return markoption;
              });                
              }}>
                {q.options[3]}
              </button>
            </div>
          </div>
        )) : <div>No questions available</div>}


      <button
        onClick={async () =>{
        
            //science
            const obj={
              subjectname:"science"
            }
           const res=await axios.get('http://localhost:3002/user', {
              headers: {
                Authorization: `${localStorage.getItem('token')}`
              },
              data: obj
            });
           
            // two variabel to work on
            var qattempted=0;
            var qcorrect=0;
            for(var i=0;i<Question.length;i++){
              if(markoption[i]!=-1){
                qattempted++;
              }
            }
            console.log("Done something");
            for(var i=0;i<Question.length;i++){
              console.log("Done something");
              if(markoption[i]!=-1){
                
                
                if(parseInt(Question[i].correct_option,10)==markoption)
                qcorrect++;
              }
            }
            
 // two variabel to work on

            const totalq=Question.length;
            const qwrong=qattempted-qcorrect
            console.log(res.data[0]);
          const body={
            subjectname:obj.subjectname,
            subjectId:res.data[0].subjects[0].id,
            usename:res.data[0].usename,
            email:res.data[0].email,
            qattempted:qattempted,
            qcorrect:qcorrect,
            totalq:totalq,
            qwrong:qwrong
          }
         
          const res1 = await axios.post('http://localhost:3002/upload_test/1', 
          body, 
          {
            headers: {
              Authorization: `${localStorage.getItem('token')}`
            }
          }
        );
        console.log(res1.data.id);
        localStorage.setItem('testid',res1.data.id);
          handleClick();
    
        } }
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 ml-2 mr-2 "
      >
        Submission
      </button>
    </div>
    </>
  );
};
export default TestComponent;
