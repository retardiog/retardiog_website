import { Box, Text, keyframes } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const chaoticAppearance = keyframes`
  0% { opacity: 0; transform: rotate(0deg) scale(0.5); }
  20% { opacity: 1; transform: rotate(30deg) scale(1.2); }
  40% { opacity: 0.5; transform: rotate(-20deg) scale(1); }
  60% { opacity: 1; transform: rotate(10deg) scale(1.5); }
  80% { opacity: 0.8; transform: rotate(-10deg) scale(1.1); }
  100% { opacity: 1; transform: rotate(0deg) scale(1); }
`;

const chaoticGifMovement = keyframes`
  0% { transform: rotate(0deg) translate(0, 0); }
  25% { transform: rotate(90deg) translate(50vw, -50vh); }
  50% { transform: rotate(180deg) translate(-50vw, 50vh); }
  75% { transform: rotate(270deg) translate(100vw, -100vh); }
  100% { transform: rotate(360deg) translate(0, 0); }
`;

const epilepticBackground = keyframes`
  0% { background-color: #ff0000; }
  20% { background-color: #00ff00; }
  40% { background-color: #0000ff; }
  60% { background-color: #ffff00; }
  80% { background-color: #ff00ff; }
  100% { background-color: #00ffff; }
`;

const phrases = [
  "Is this a Cabal?",
  "Alpha?",
  "Fuck HANA, MISHA and CO",
  "RAID MFERS",
  "Slow cooking",
  "Quasi Modo Next SHIB",
  "F**K ALL THOSE CUTE DOGS! FTC",
  "Where is dev?",
  "Trenches Sucks",
  "CTO?",
  "the ticker is $retardiog",
  "When DEXS update?",
  "Tired of those cringy cute dog memes?",
  "Another rug pull?",
  "Just a pump and dump?"
];


const fonts = [
  "'Comic Sans MS', cursive",
  "'Impact', sans-serif",
  "'Courier New', monospace",
  "'Lucida Console', monospace",
  "'Brush Script MT', cursive",
  "'Georgia', serif",
  "'Times New Roman', serif"
];

const generateRandomElements = (type) => {
  const numberOfElements = Math.floor(Math.random() * 5) + 1;
  return Array.from({ length: numberOfElements }, (_, index) => ({
    key: index,
    size: type === 'gif' ? Math.random() * 30 + 20 : Math.random() * 2 + 1,
    duration: Math.random() * 5 + 5,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 2,
  }));
};

const BoldMessage = () => {
  const [gifInstances, setGifInstances] = useState([]);
  const [textInstances, setTextInstances] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGifInstances(generateRandomElements('gif'));
      setTextInstances(generateRandomElements('text'));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      width="100%"
      height="50vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
      position="relative"
      overflow="hidden"
      animation={`${epilepticBackground} 1s infinite`}
    >
      {gifInstances.map((gif) => (
        <Box
          as="img"
          src="/quasi.png"
          alt="Dancing GIF"
          position="absolute"
          width={`${gif.size}vh`}
          height={`${gif.size}vh`}
          top={`${gif.top}%`}
          left={`${gif.left}%`}
          key={gif.key}
          animation={`${chaoticGifMovement} ${gif.duration}s infinite linear`}
          style={{ animationDelay: `${gif.delay}s` }}
          opacity={0.7}
        />
      ))}

      {textInstances.map((text) => (
        <Text
          fontSize={`${text.size}rem`}
          fontWeight="bold"
          position="absolute"
          top={`${text.top}%`}
          left={`${text.left}%`}
          key={text.key}
          animation={`${chaoticAppearance} ${text.duration}s ease-in-out infinite`}
          style={{
            animationDelay: `${text.delay}s`,
            fontFamily: fonts[Math.floor(Math.random() * fonts.length)], 
          }}
          zIndex="1"
        >
          {phrases[Math.floor(Math.random() * phrases.length)]}
        </Text>
      ))}
    </Box>
  );
};

export default BoldMessage;
