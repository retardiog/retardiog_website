import { Box, keyframes } from '@chakra-ui/react';
import React from 'react';

const borderAnimation = keyframes`
  0% { border-color: #00FF00; }
  25% { border-color: #FF0000; }
  50% { border-color: #00FF00; }
  75% { border-color: #FF0000; }
  100% { border-color: #00FF00; }
`;

const iframePsychedelicAnimation = keyframes`
  0% { filter: hue-rotate(0deg) brightness(1); }
  25% { filter: hue-rotate(90deg) brightness(1.2); }
  50% { filter: hue-rotate(180deg) brightness(1.5); }
  75% { filter: hue-rotate(270deg) brightness(1.2); }
  100% { filter: hue-rotate(360deg) brightness(1); }
`;

const Chart = () => {
  return (
    <Box
      flex="1"
      p={4}
      display={{ base: 'none', md: 'flex' }}
      justifyContent="center"
      alignItems="center"
      height={{ base: '0', md: 'auto' }}
      border="7px solid"
      borderColor="#00FF00"
      animation={`${borderAnimation} 0.5s infinite`}
    >
      <style>
        {`
          #dexscreener-embed {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%;
          }
          #dexscreener-embed iframe {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border: 0;
            animation: ${iframePsychedelicAnimation} 5s infinite;
          }
        `}
      </style>
      <div id="dexscreener-embed">
        <iframe
          src="https://dexscreener.com/ethereum/0xE7b4e528308c84FD6698906b6224615E9e30d236?embed=1&theme=dark&trades=0&info=0"
          allowFullScreen
          title="DexScreener Chart"
        ></iframe>
      </div>
    </Box>
  );
};

export default Chart;
