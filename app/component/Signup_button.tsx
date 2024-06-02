"use client";
import axios from 'axios';



type Userdata={
    username:string,
    email:string,
    password:string
  }


export default function Signup_button(formdata:Userdata){

  // const [state, formAction] = useActionState(create, initialState);
    return(
        <>
         <button className="w-2/5 bg-white rounded-md border rounded h-12 m-auto text-black" onClick={async ()=>{
         console.log("Hello");
        }
          }>Sign Up</button>
        </>
       
    )
}