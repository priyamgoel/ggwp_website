'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const phrases = [
    "ggwp: We Ship Code.",
    "ggwp: Build Fast, Iterate Faster.",
    "ggwp: Turning Ideas into Reality, Fast.",
    "ggwp: Compile, Commit, Conquer.",
    "ggwp: Hacking the Future, Today."
  ];
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  // Effect to handle the typing animation
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isTyping) {
      // Typing effect
      if (displayedText.length < currentPhrase.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
        }, 100); // Speed of typing
        return () => clearTimeout(timer);
      } else {
        // Pause at the end of typing before starting to erase
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Wait time after typing completes
        return () => clearTimeout(timer);
      }
    } else {
      // Erasing effect
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        }, 50); // Speed of erasing (faster than typing)
        return () => clearTimeout(timer);
      } else {
        // Move to the next phrase after erasing
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentPhraseIndex, phrases]);
  
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: 'url(/code-background.jpg)', 
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          <span className="inline-block min-h-[4.5rem]">{displayedText}</span>
          <span className="animate-blink text-primary">|</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
          A passionate team of developers building innovative solutions at hackathons
        </p>
      </div>
    </section>
  );
}