import { Box, Flex, Text, HStack, Link, Spacer, Button } from '@chakra-ui/react';
import React from 'react';

const Menu = ({ toggleMute, isMuted }) => {
  return (
    <Box
      as="header"
      position="relative"
      color="white"
      py={2}
      px={4}
      height={'60px'}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        zIndex: '-1',
        animation: 'psychoEffect 0.5s infinite',
      }}
    >
      <style>
        {`
          @keyframes psychoEffect {
            0% { background-color: #ff00ff; }
            10% { background-color: #00ffff; }
            20% { background-color: #ff6600; }
            30% { background-color: #ffff00; }
            40% { background-color: #6600ff; }
            50% { background-color: #00ff66; }
            60% { background-color: #ff0000; }
            70% { background-color: #00ff99; }
            80% { background-color: #ff6699; }
            90% { background-color: #ff0066; }
            100% { background-color: #660099; }
          }
        `}
      </style>
      <Flex align="center" height="100%">
        <Text ml={8} fontSize="lg" fontWeight="bold" fontFamily="'Space Mono', monospace">
          $retardiog
        </Text>
        <Spacer />
        <HStack spacing={8} mr={10}>
          <Button onClick={toggleMute} colorScheme="teal">
            {isMuted ? 'Unmute' : 'Mute'}
          </Button>
          <Link href="#" fontWeight="medium" fontSize="lg" fontFamily="Arial" _hover={{ color: "teal.300" }}>
            X
          </Link>
          <Link href="#" fontWeight="medium" fontSize="md" fontFamily="Courier New" _hover={{ color: "teal.300" }}>
            TG
          </Link>
          <Link href="#" fontWeight="medium" fontSize="sm" fontFamily="Georgia" _hover={{ color: "teal.300" }}>
            DEXS
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Menu;
