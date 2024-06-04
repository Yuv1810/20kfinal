"use client";
import axios from "axios";
import { useRouter } from "next/navigation"; 



type User={
    email:String,
    password:String
  }
  
export default function Login_button(formdata:User){
  const router=useRouter();
    return(
        <button className="w-2/5 bg-black rounded-md border rounded m-auto mr-auto mt-10 h-12" onClick={async(e)=>{
            e.preventDefault();
            console.log("Login");
            

            const response=await axios.post('http://localhost:3002/login',{
              ...formdata
             });
             console.log("Bearer "+response.data.token);
             localStorage.setItem('token',"Bearer "+response.data.token);
            router.push('/home');  
           
          }}>Login</button>
    );
}