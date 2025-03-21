"use client"

import { useEffect, useState } from "react";
import styles from "./BouncyText.module.css"
import { Cherry_Bomb_One } from 'next/font/google';
 

const cherry = Cherry_Bomb_One({
  subsets: ['latin'],
  weight: '400'
})

export default function BouncyText({children, animate}) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);


 // On initial load
 useEffect(() => {
  setIsAnimating(true);
  const timeout = setTimeout(() => setIsAnimating(false), 2500); // match animation duration
  return () => clearTimeout(timeout);
}, []);

// On animate prop change
useEffect(() => {
  if (!animate) return;

  setIsAnimating(false); // reset first

  const restart = setTimeout(() => {
    setIsAnimating(true);
  }, 20); // brief delay to allow class removal

  const stop = setTimeout(() => {
    setIsAnimating(false);
  }, 2500); // match animation duration

  return () => {
    clearTimeout(restart);
    clearTimeout(stop);
  };
}, [animate]);


  const word = children;
  return (
    <h1 className={`${styles.bouncyText} ${styles.heading} ${cherry.className} ${isAnimating && styles.animate}`}>

      {word.split('').map((letter, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.2}s` }}>
          {letter}
        </span>
      ))}
    </h1>
  );
}