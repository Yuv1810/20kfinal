"use client"
import "regenerator-runtime/runtime";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef } from 'react';
import React from 'react'
import {createRoot} from 'react-dom/client'
import { Suspense } from 'react'
import dynamic from 'next/dynamic';
import { useState } from 'react';
import MicButton from "@/app/component/micButton";
import { redirect } from 'next/navigation';


import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
// import { redirect } from "next/dist/server/api-utils";
 
const ReactMarkdown = dynamic(() => import('react-markdown'), {
  ssr: false,
})

const markdown = `# Recipe App

Welcome to the Recipe App! This application allows users to create, share, and organize their favorite recipes into categories. Whether you're a seasoned chef or a cooking enthusiast, this app will help you keep your recipes organized and accessible.

## Features

1. **Create Recipes**: Users can create their own recipes by providing a recipe name, ingredients list, cooking instructions, and optional details like cooking time, serving size, and dietary notes.

2. **Categorize Recipes**: Users can organize their recipes into different categories such as breakfast, lunch, dinner, desserts, etc.

3. **Responsive Design**: The app is designed to be responsive, ensuring a seamless experience across various devices, including desktops, tablets, and smartphones.


![WhatsApp Image 2023-08-24 at 16 23 41](https://github.com/Yuv1810/recipe-app/assets/119923256/e61fb2d3-f0aa-49a4-ae8e-09a5043aaa86)
![WhatsApp Image 2023-08-24 at 16 24 21](https://github.com/Yuv1810/recipe-app/assets/119923256/12f8c86a-08b3-4941-9e1b-bf9c93114dca)
![WhatsApp Image 2023-08-24 at 16 28 13](https://github.com/Yuv1810![WhatsApp Image 2023-08-24 at 16 30 02](https://github.com/Yuv1810/recipe-app/assets/119923256/0bbd06ab-a2b7-4bea-8601-35e7d693969f)
/recipe-app/assets/119923256/6714da1b-b144-4664-87cd-7bff3f62d6ea)
![WhatsApp Image 2023-08-24 at 16 29 16](https://github.com/Yuv1810/recipe-app/assets/119923256/26f6cf9d-f436-49fb-9976-3b3275673ddd)
![WhatsApp Image 2023-08-24 at 16 46 32](https://github.com/Yuv1810/recipe-app/assets/119923256/7aa30870-26d3-47d9-a95f-fd5d0ccf1d1d)
![WhatsApp Image 2023-08-24 at 16 46 33 (1)](https://github.com/Yuv1810/recipe-app/assets/119923256/c9b95f2b-83b0-4809-af36-8f75056044bc)
![WhatsApp Image 2023-08-24 at 16 46 33 (2)](https://github.com/Yuv1810/recipe-app/assets/119923256/ae200c1c-9530-4aa7-b90a-28e548045738)
![WhatsApp Image 2023-08-24 at 16 46 33](https://github.com/Yuv1810/recipe-app/assets/119923256/ac9d9c63-0732-45ba-b9a4-678c305ad2f8)
`
const ImageUpload = () => {
  const [base64Data, setBase64Data] = useState<string | null>(null);

  const onChange = (e:any) => {
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = handleReaderLoaded;
      reader.readAsBinaryString(file);
    }
  };

  const handleReaderLoaded = (e:any) => {
    console.log("file uploaded 2: ", e);
    let binaryString = e.target.result;
    setBase64Data(btoa(binaryString));
  };

  console.log("base64", base64Data);

  return (
    <div className="flex items-center space-x-4 fixed z-1 left-20 top-1 md:left-10 md:top-24">
  <label
    htmlFor="file"
    className="cursor-pointer bg-blue-500 text-white rounded-full hover:bg-blue-700"
  >
    <img
            src="/assets/clip-button.png"
            className="rounded-full w-10 h-10"
          />
  </label>
  <span id="file-chosen" className="text-white">{(base64Data)? "File chosen": "No file chosen"}</span>
  <input
    type="file"
    name="image"
    id="file"
    accept=".jpg, .jpeg, .png"
    onChange={onChange}
    className="hidden"
  />
</div>
  );
};





const TextToSpeech = ({text}:any) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState<null | SpeechSynthesisUtterance>(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    }
    synth.speak(utterance!);

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(false);
  };

  return (
    <>
      <button onClick={handlePlay}>{isPaused ? <img src="/assets/resume-button.png" alt="" className="w-10 h-10 bg-blue-500 hover:bg-blue-700" /> : <img src="/assets/Play-button.png" className="bg-blue-500 w-10 h-10 hover:bg-blue-700"></img> }</button>
      <button onClick={handlePause}><img src="/assets/Pause-button.png" className="bg-blue-500 w-10 h-10 hover:bg-blue-700"></img></button>
      <button onClick={handleStop}><img src="/assets/stop-button.png" className="bg-blue-500 w-10 h-10 hover:bg-blue-700"></img></button>
    </>
  );
};




const DynamicTextarea = () => {

  const [visibletools,setvisibletools]=useState(true);
const [speak,setSpeak]=useState("");  
const [tts,settts]=useState(0);

useEffect(()=>{
  const token= localStorage.getItem("token");
  console.log(token?.split(' ')[1]);
  if(!token){
    redirect('/login');
  }
},[]);

//speech recognation
const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  const stopListening = () => SpeechRecognition.stopListening();

  const { transcript,resetTranscript,listening,
  browserSupportsSpeechRecognition } =
    useSpeechRecognition();
    
  if (!browserSupportsSpeechRecognition) {
    return null;
  }


  const scrollref=useRef<HTMLTextAreaElement | null> (null);
  const [text,setetext]=useState('');
  const [visible,setvisible]=useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [user,setuser]=useState(['']);
  const [conversation,setcoversation]=useState<string[]>([]);

 async function scroll(){

  setTimeout(() => {
    if (typeof window !== 'undefined') {
      const chatarea = scrollref.current;
      if (chatarea) {
        window.scrollTo({
          top: chatarea.scrollHeight,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  }, 1000);
 }
      



  useEffect(() => {
    const textarea = textareaRef.current;

    const resizeTextarea = () => {
      textarea!.style.height = 'auto';
      textarea!.style.height = `${textarea!.scrollHeight}px`;
    };

    textarea!.addEventListener('input', resizeTextarea);

    return () => {
      textarea!.removeEventListener('input', resizeTextarea);
    };
  }, []);

  return (
    <>
    <div className='flex h-screen w-screen justify-center bg-black'>
      {(visible) ? <div className='bg-gray-700 text-blue md:w-1/6 h-full fixed z-10 start-0 w-60 overflow-auto'> 
      <button className='bg-gray-700 w-10 rounded-lg' onClick={(visible)=>{
        setvisible(!visible);
      }}><img src="/assets/cross-image.png" className="bg-gray-700 w-10 h-10"></img></button>

      <div className='bg-blue-500 hover:bg-blue-700 h-20 m-2 rounded-lg justify-center items-center flex'>
    <div>Hey</div></div>
      <div className='bg-blue-500 hover:bg-blue-700 h-20 m-2 rounded-lg justify-center items-center flex text-white'><div>Hey</div></div>
      <div className='bg-blue-500 hover:bg-blue-700 h-20 m-2 rounded-lg justify-center items-center flex text-white'><div>Hey</div></div>
      <div className='bg-blue-500 hover:bg-blue-700 h-20 m-2 rounded-lg justify-center items-center flex text-white'><div>Hey</div></div>
      <div className='bg-blue-500 hover:bg-blue-700 h-20 m-2 rounded-lg justify-center items-center flex text-white'><div>Hey</div></div>
      <div className='bg-blue-500 hover:bg-blue-700 h-20 m-2 rounded-lg justify-center items-center flex text-white'><div>Hey</div></div>
      <div className='bg-blue-500 hover:bg-blue-700 h-20 m-2 rounded-lg justify-center items-center flex text-white'><div>Hey</div></div>
      <div className='bg-blue-500 hover:bg-blue-700 h-20 m-2 rounded-lg justify-center items-center flex text-white'><div>Hey</div></div> 
      <div className='bg-blue-500 hover:bg-blue-700 h-20 m-2 rounded-lg justify-center items-center flex text-white'><div>Hey</div></div>
      <div className='bg-blue-500 hover:bg-blue-700 h-20 m-2 rounded-lg justify-center items-center flex text-white'><div>Hey</div></div>
      <div className='bg-blue-500 hover:bg-blue-700 h-20 m-2 rounded-lg justify-center items-center flex text-white'><div>Hey</div></div>
      <div className='bg-blue-500 hover:bg-blue-700 h-20 m-2 rounded-lg justify-center items-center flex text-white'><div>Hey</div></div>
      <div className='bg-blue-500 hover:bg-blue-700 h-20 m-2 rounded-lg justify-center items-center flex text-white'><div>Hey</div></div>
      <div className='bg-blue-500 hover:bg-blue-700 h-20 m-2 rounded-lg justify-center items-center flex text-white'><div>Hey</div></div>
      </div>
      :
      <button className='bg-black w-10 fixed z-100 start-0 rounded-2xl' onClick={(visible)=>{
        setvisible(true);
      }}><img src='/assets/hamburger-button.png' className="bg-gray-700 h-10 w-10 r-blue-700"></img></button>
      }
       
    <div className='flex flex-col items-center w-5/6 md:ml-52 h-full' >   
    <div ref={scrollref} className='h-5/6 w-5/6 mt-10 overflow-x-none' >
   {visibletools? <div className="w-full" onDoubleClick={()=>{
      setvisibletools(!visibletools);
    }}><div className="bg-black fixed z-1 rounded-lg h-12 w-32 bg-blue-500 flex flex-row justify-center items-center opacity-40 right-5">
      <TextToSpeech text={speak}/>
      
    </div>
    <ImageUpload/></div>:<div className="w-full h-full opacity-0 fixed z-1" onClick={()=>{
      setvisibletools(!visibletools);
    }}></div>

   }
   


    <Suspense fallback={<p>Loading feed...</p>}>
   
       
    {conversation.map((d)=>{
  return <>

  {/*  nkdsbfhjdsvfhkdsfkhds */}
  <article className="w-full mr-10 break-words justify-end">
  <ReactMarkdown>{d}</ReactMarkdown>
  </article>
  <div className='w-full h-px bg-gray-300 rounded-md mt-4 mb-4'></div>

  </>
})}
      </Suspense>
      <div className='h-32 w-full'></div>
    </div>
      <div className='flex justify-center items-center fixed z-100 bottom-1 md:w-3/6 w-80 border-gray-700 border-2 rounded-2xl bg-white'>
      
     <textarea
      ref={textareaRef}
      value={text || transcript}
      placeholder="Type Here..."
      className="w-full p-2 rounded-2xl resize-none outline-none overflow-auto text-black max-h-32 w-1/2"
      onChange={((e)=>{
        setetext(e.target.value);
        console.log(e.target.value);
      })}
    ></textarea>
    <div className="flex flex-row ">
   

    <MicButton
          onStartListening={startListening}
          onStopListening={stopListening}
        />      

    <button className='bg-white w-14 h-10 text-black' onClick={async (event)=>{
      console.log(transcript);
      resetTranscript();
      // call the api
     setTimeout(() => {
        console.log("Fetching data");
      }, 2000);
      // then setstate of conversation
      var arr=[...conversation];
      arr.push(text || transcript);
      setetext("");
      arr.push(markdown);
      setcoversation(arr);
      settts((t)=>t+=2);
      var tospeak="";
      tospeak=text || transcript;
      tospeak+=" "+markdown;
      
      setSpeak(tospeak);
      console.log(tts);
      console.log(conversation)
      await scroll();
     
    }}><img src="/assets/send-message.png" className="h-10 w-10 mr-2"></img></button>
  </div>
      </div>
     </div>
   </div>
    </>
   
  );
};






export default function Fun({params}:{
   params: {id:string}
}) {
  
const id=params.id;
  useEffect(()=>{
    if(id!='science' && id!='computer'){
      redirect('/chat');
    }
  },[]);

  console.log(id);

  return (
    <>
    <div>
    <DynamicTextarea/>
    </div>
   
    </>
  );
}