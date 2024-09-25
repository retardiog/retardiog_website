import { Box, Heading, Text, Flex, keyframes } from '@chakra-ui/react';
import React from 'react';

const epilepticAnimation = keyframes`
  0% { background-color: black; color: white; }
  50% { background-color: white; color: black; }
  100% { background-color: black; color: white; }
`;

const iframePsychedelicAnimation = keyframes`
  0% { filter: hue-rotate(0deg) brightness(1); }
  25% { filter: hue-rotate(90deg) brightness(1.2); }
  50% { filter: hue-rotate(180deg) brightness(1.5); }
  75% { filter: hue-rotate(270deg) brightness(1.2); }
  100% { filter: hue-rotate(360deg) brightness(1); }
`;

const Tokenomics = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} width="100%">
      <Box
        flex="1"
        bg="gray.900"
        p={4}
        display={{ base: 'none', md: 'flex' }}
        justifyContent="center"
        alignItems="center"
        height={{ base: '0', md: 'auto' }}
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

      <Box
        flex="1"
        p={8}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        animation={`${epilepticAnimation} 1s infinite`}
        fontFamily="Comic Sans MS"
        position="relative"
        bgImage="url('/quasi2.png')"
        bgPosition="bottom right"
        bgRepeat="no-repeat"
        bgSize="contain"
      >
        <Heading as="h1" size="lg" mb={6}>
          Tokenomics
        </Heading>
        <Text fontSize="2xl" mb={4}>
          Chain: ETH
        </Text>
        <Text fontSize="2xl" mb={4}>
          Supply: 185,201,841,507 $retardiog
        </Text>
        <Text fontSize="2xl" mb={4}>
          TAX: 0/0
        </Text>
        <Text fontSize="2xl" mb={4}>
          Ownership: Renounced
        </Text>
        <Text fontSize="2xl">
          Liquidity: Burned
        </Text>
      </Box>
    </Flex>
  );
};

export default Tokenomics;
