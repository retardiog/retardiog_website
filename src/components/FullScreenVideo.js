import { Box, Text, Button, keyframes } from '@chakra-ui/react';
import React, { useState } from 'react';

// Definimos la animación para el efecto epiléptico
const epilepticAnimation = keyframes`
  0% { color: #ff0000; opacity: 1; }
  25% { color: #00ff00; opacity: 0.8; }
  50% { color: #0000ff; opacity: 1; }
  75% { color: #ffff00; opacity: 0.8; }
  100% { color: #ff00ff; opacity: 1; }
`;

const FullScreenVideo = ({ playWithSound }) => {
  const [gifVisible, setGifVisible] = useState(Array(20).fill(true));
  const [positions] = useState(Array.from({ length: 20 }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  })));

  const copyCA = () => {
    navigator.clipboard.writeText('0xXXXXX');
    alert('CA copied, go check it out on DexScreener barkinged!');
  };

  const gifSources = ['/quasi.png', '/quasi2.png', '/quasi3.png', '/quasi4.png'];

  return (
    <Box
      position="relative"
      width="100%"
      height="100vh"
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <video
        autoPlay
        loop
        muted={!playWithSound}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: '0',
        }}
      >
        <source src="/wonder.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex="0"
      >
        {positions.map((position, index) => (
          gifVisible[index] && (
            <img
              key={index}
              src={gifSources[index % gifSources.length]}
              alt=""
              style={{
                width: '150px',
                height: 'auto',
                position: 'absolute',
                top: position.top,
                left: position.left,
              }}
            />
          )
        ))}
      </Box>

      <Text
        fontSize="60px"
        textAlign="center"
        zIndex="2"
        bg="rgba(0, 0, 0, 0.5)"
        p={1}
        borderRadius="md"
        animation={`${epilepticAnimation} 0.5s infinite`}
        fontFamily="'Comic Neue', cursive"
      >
        Meet Quasimodo
      </Text>
      <Text
        fontSize="40px"
        textAlign="center"
        zIndex="2"
        bg="rgba(0, 0, 0, 0.5)"
        p={1}
        borderRadius="md"
        color="white"
        fontFamily="'Comic Neue', cursive"
      >
        Study $barking
      </Text>
      <Text
        fontSize={{ base: '10px', md: '8xl' }}
        textAlign="center"
        zIndex="2"
        color="white"
        bg="rgba(0, 0, 0, 0.5)"
        p={4}
        borderRadius="md"
        fontFamily="'Comic Neue', cursive"
      >
        CA: pump
      </Text>
      <Button onClick={copyCA} colorScheme="teal" mt={4} zIndex="2">
        Copy CA
      </Button>
    </Box>
  );
};

export default FullScreenVideo;
