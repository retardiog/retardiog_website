import React from 'react';
import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';

const JoinCommunity = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="40vh"
      bg="black"
      color="white"
      textAlign="center"
      p={6}
      fontFamily="'Comic Neue', cursive"
      position="relative"
      style={{
        backgroundImage: `url('/quasi3.png'), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><text y='35' font-size='35' fill='rgba(255, 255, 255, 0.12)'>🦴</text></svg>")`,
        backgroundPosition: 'left, 0 0',
        backgroundRepeat: 'no-repeat, repeat',
        backgroundSize: 'contain, 50px 50px',
      }}
    >
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" fontFamily="'Comic Neue', cursive">
          Want to Join the Community?
        </Heading>
        <Text fontSize="xl" maxWidth="600px" fontFamily="'Comic Neue', cursive'">
          J0in as, bat writting is forbiden! Yu can onli bark laik a retarded dog or you wil be baned... cof, cof
        </Text>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
          alt="Telegram Logo"
          boxSize="70px"
          cursor="pointer"
          mb={5}
          pb={5}
          onClick={() => window.open('https://t.me/retardiog', '_blank')}
        />
      </VStack>
    </Box>
  );
};

export default JoinCommunity;
