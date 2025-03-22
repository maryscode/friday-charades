"use client"
import { Fredoka } from 'next/font/google';
import Image from "next/image";

const fredoka = Fredoka({
  subsets: ["latin"],  
  weight: ["300" , "400" , "500" , "600" , "700"]
});

export default function Word({children, color, level}) {

  const textMap = {
    red: 'text-red-400 text-${color}-400',
    orange: 'text-orange-400',
    yellow: 'text-yellow-400',
    green: 'text-lime-400',
  };

  const colorMap = {
    red: 'bg-red-50  border-red-400 hover:bg-red-100',
    orange: 'bg-orange-50  border-orange-400 hover:bg-orange-100',
    yellow: 'bg-yellow-50  border-yellow-400 hover:bg-yellow-100', 
    green: 'bg-lime-50  border-lime-400 hover:bg-lime-100',    
    
  }

  const speak = (text) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn("Speech synthesis not supported in this browser.");
    }
  };
  
  return (
    <div>
      <p className={`text-right text-xs w-full ${textMap[color]} uppercase`}>{level}</p>
      <button
          className={`cursor-pointer border-2 ${colorMap[color]} duration-300 rounded-md py-3 px-10 flex flex flex-row gap-5 justify-between items-center w-full mb-6`}
          onClick={() => speak(children)}
      >
        <p className={`${fredoka.className} text-[28px] text-black`}>{children}</p>
        <Image
          src="/speaker-icon.svg"
          width={30}
          height={30}
          alt="Sound icon"
        />
      </button> 
    </div>
  );
}