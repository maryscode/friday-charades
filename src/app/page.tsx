"use client"
import Image from "next/image";

import { useState } from "react";
import styles from "./page.module.css";
import BouncyText from '@/app/components/BouncyText/BouncyText';
import { Fredoka } from 'next/font/google';
import easyWordData from '@/data/easy-charades.json';
import mediumWordData from '@/data/medium-charades.json';
 
const fredoka = Fredoka({
  subsets: ["latin"],  
  weight: ["300" , "400" , "500" , "600" , "700"]
});


export default function Home() {

  const [animate, setAnimate] = useState(false);
  const [start, setStart] = useState(false);
  const [easyWord, setEasyWord] = useState('');
  const [medWord, setMedWord] = useState('');



  const getRandomEasyWord= (wordList: string[])=> {
    const index = Math.floor(Math.random() * wordList.length);
    return wordList[index];
  }
  const handleClick = () => {
    setStart(true);
    setAnimate(true);
    setTimeout(() => {setAnimate(false)}, 100)

    setEasyWord(getRandomEasyWord(easyWordData.words))

    setMedWord(getRandomEasyWord(mediumWordData.words))

  }  

  const speak = (text:string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn("Speech synthesis not supported in this browser.");
    }
  };

  return (
    <div className={`${start ? '': 'flex justify-center' } items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
      <main className="text-center bg-white rounded-lg p-8 sm:p-20">
      <BouncyText animate={animate}>CHARADES</BouncyText>
        <div className="flex flex-col justify-center items-center">
          <button 
            onClick={handleClick}
            className={`${styles.pushButton} ${styles.roundbutton} ${fredoka.className} mt-4 mb-20`}
          >PLAY
          </button>

{start && (
<div>
<p className="text-right text-xs w-full mb-1 text-lime-500">EASY</p>
          <div className="bg-gray-100 py-4 px-10 flex flex flex-row gap-5 justify-between items-center w-full mb-8">
            <p className={`${fredoka.className} text-[28px] text-black`}>{easyWord}</p>
            <button
               className="cursor-pointer"
               onClick={() => speak(easyWord)}
            >
              <Image
                src="/speaker-icon.svg"
                width={40}
                height={40}
                alt="Sound icon"
              />
            </button>
          </div>

          <p className="text-right text-xs w-full mb-1 text-orange-400">MEDIUM</p>
          <div className="bg-gray-100 py-4 px-10 flex flex flex-row  gap-5 justify-between items-center w-full mb-8">
            <p className={`${fredoka.className} text-[28px] text-black`}>{medWord}</p>
            <button
               className="cursor-pointer"
               onClick={() => speak(medWord)}
            >
              <Image
                src="/speaker-icon.svg"
                width={40}
                height={40}
                alt="Sound icon"
              />
            </button>
          </div>   

</div>
)}
                 
        </div>

      </main>
    </div>
  );
}
