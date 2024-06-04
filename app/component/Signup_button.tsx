"use client";
import axios from 'axios';
import { redirect } from 'next/navigation';
import { Router } from 'react-router-dom';




type Userdata={
    username:string,
    email:string,
    password:string
  }


export default function Signup_button(formdata:Userdata){
  // const [state, formAction] = useActionState(create, initialState);
    return(
        <>
         <button className="w-2/5 bg-white rounded-md border rounded h-12 m-auto text-black" onClick={ ()=>{
          console.log(formdata);
          router.push('/')
      
        //   try {
        //     const response=await axios.post('http://localhost:3002/signup',{
        //       ...formdata
        //      });
             
          

        //   } catch (error) {
        //     console.log("Some error occurred");
        //   }
       
        }
        
          }>Sign Up</button>
        </>
       
    )
}