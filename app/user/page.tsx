"use client";

import { useEffect, useState } from "react";
import Link from "@/node_modules/next/link";
import Signup_button from "../component/Signup_button";
import { redirect } from 'next/navigation'

export default function fun(){
    const [isUserloggedin,setUserloggedin]=useState(true);
    var val:any;
    function getdata() {
        val= localStorage.getItem("user");
    }
    getdata();
   useEffect(()=>{
    if(val==undefined){
        setUserloggedin(false);
    }
   },[]);
 
    console.log(val);
    console.log("Hello1");
    if(isUserloggedin){
        return(
            //The navigation thing here
            <>
            <div>Hello</div>
            </>
        )
    }else{
        redirect('/login');
    }
    
    
}