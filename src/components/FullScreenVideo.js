import { Box, Text, keyframes, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const psychedelicAnimation = keyframes`
  0% { color: #ff00ff; }
  10% { color: #ff0000; }
  20% { color: #00ff00; }
  30% { color: #0000ff; }
  40% { color: #ffff00; }
  50% { color: #00ffff; }
  60% { color: #ff00ff; }
  70% { color: #ff6600; }
  80% { color: #6600ff; }
  90% { color: #00ff66; }
  100% { color: #ff00ff; }
`;

const gifAnimation = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;

const FullScreenVideo = ({ playWithSound }) => {
  const [gifVisible, setGifVisible] = useState(Array(20).fill(true));
  const [positions, setPositions] = useState(Array.from({ length: 20 }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  })));

  const copyCA = () => {
    navigator.clipboard.writeText('0xXXXXX');
    alert('CA copied, go check it out on DexScreener retardioged!');
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setGifVisible((prev) => prev.map(() => Math.random() > 0.5));
    };

    const moveGifs = () => {
      setPositions((prevPositions) =>
        prevPositions.map(() => ({
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }))
      );
    };

    const interval = setInterval(() => {
      toggleVisibility();
      moveGifs();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
        <source src="/retardiog3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundImage="url('/psycho2.gif')"
        backgroundSize="cover"
        opacity={0.18}
        zIndex="1"
      />

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
              className="dancing-gif"
              style={{
                width: `${Math.random() * (window.innerWidth < 768 ? 200 : 600) + 100}px`,
                height: 'auto',
                position: 'absolute',
                top: position.top,
                left: position.left,
                animation: `${gifAnimation} 1s infinite`,
                transform: `rotate(${Math.random() * 10 - 5}deg)`
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
        animation={`${psychedelicAnimation} 2s infinite linear`}
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
        animation={`${psychedelicAnimation} 2s infinite linear`}
        fontFamily="'Comic Neue', cursive"
      >
        study $retardiog
      </Text>
      <Text
        fontSize={{ base: '10px', md: '8xl' }}
        textAlign="center"
        zIndex="2"
        color={'white'}
        bg="rgba(0, 0, 0, 0.5)"
        p={4}
        borderRadius="md"
        fontFamily="'Comic Neue', cursive"
      >
        CA: 0xXXXX
      </Text>
      <Button onClick={copyCA} colorScheme="teal" mt={4} zIndex="2">
        Copy CA
      </Button>
    </Box>
  );
};

export default FullScreenVideo;
