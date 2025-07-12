import React from 'react'
import { useEffect, useState } from "react";

export const LoadingScreen = ({onComplete}) => {
  const [text, setText] = useState("");
  const fullText = "WAGWAN!!";

  useEffect(()=>{
    let index = 0;
    const interval = setInterval(()=>{
      setText(fullText.substring(0, index));
      index++;

      if (index>fullText.length){
        clearInterval(interval);

        setTimeout(()=>{
          onComplete();
        },1000);
      }
    },100);

    return() => clearInterval(interval);
  },[onComplete]);
  return (
  <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center px-4">

<div className="mb-4 text-4xl font-mono font-bold text-center">
  {text} <span className="animate-blink ml-1"> | </span>
</div>

<div className="w-48 h-0.5 bg-gray-800 rounded relative overflow-hidden">
  <div className="w-2/5 h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar "></div>
 </div>
</div>
  );
};


