"use client"
import { useState } from "react";
import styles from "./page.module.css";
import BouncyText from '@/app/components/BouncyText/BouncyText';
import Word from '@/app/components/Word/Word';
import { Fredoka } from 'next/font/google';
import easyWordData from '@/data/easy-charades.json';
import mediumWordData from '@/data/medium-charades.json';
import hardWordData from '@/data/hard-charades.json';
 
const fredoka = Fredoka({
  subsets: ["latin"],  
  weight: ["300" , "400" , "500" , "600" , "700"]
});


export default function Home() {
  const [start, setStart] = useState(false);
  const [loader, setLoader] = useState(false);
  const [easyWord, setEasyWord] = useState('');
  const [medWord, setMedWord] = useState('');
  const [hardWord, setHardWord] = useState('');

  const playMagicChime = () => {
    const chime = new Audio('/sounds/magic.mp3');
    chime.play();
  };

  const getRandomWord= (wordList: string[])=> {
    const index = Math.floor(Math.random() * wordList.length);
    return wordList[index];
  }
  const handleClick = () => {
    playMagicChime();
    setStart(true);
    
    setLoader(true);
    setTimeout(() => {
      setLoader(false)
    }, 500)

    setTimeout(() => {
      setEasyWord(getRandomWord(easyWordData.words))
      setMedWord(getRandomWord(mediumWordData.words)) 
      setHardWord(getRandomWord(hardWordData.words))  
    }, 500)
  }  

  return (
    <div className={`${start ? '': 'flex justify-center' } items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
      {/* <main className="text-center bg-white rounded-lg p-8 sm:p-20"> */}
      <main className="text-center  p-8 sm:p-20">
      <BouncyText>CHARADES</BouncyText>
        <div className="flex flex-col justify-center items-center">
          <button 
            onClick={handleClick}
            className={`${styles.pushButton} ${styles.roundbutton} ${fredoka.className} mt-4 mb-15`}
          >PLAY
          </button>

{start && (
  <div className={`duration-100 ease-out ${loader ? 'opacity-0' : 'opacity-100'}`}>
    <Word level="easy" color="green">{easyWord}</Word>
    <Word level="medium" color="orange">{medWord}</Word>
    <Word level="hard" color="red">{hardWord}</Word>
  </div>
)}
                 
        </div>

      </main>
    </div>
  );
}
