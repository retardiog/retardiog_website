import { Box, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const TokenomicsMB = () => {
  const [message, setMessage] = useState('');
  const [isClosed, setIsClosed] = useState(false);

  const messages = [
    "OMG, you won't hack me, will you?",
    "What do you expect to happen?",
    "Are you a hacker in disguise?"
  ];

  const handleClose = () => {
    if (!isClosed) {
      const nextIndex = messages.indexOf(message) + 1;
      if (nextIndex < messages.length) {
        setMessage(messages[nextIndex]);
      } else {
        setIsClosed(true);
      }
    }
  };

  return (
    <Box
      width="100%"
      height="300px"
      border="2px solid #000080"
      backgroundColor="#c0c0c0"
      boxShadow="5px 5px 0px #000"
      position="relative"
      overflow="hidden"
      pb={8}
    >
      <Box
        width="100%"
        backgroundColor="#000080"
        padding="0px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
    
      >
        <Text size="sm" color="white" fontFamily="'MS Sans Serif', sans-serif">
          Quasinomics
        </Text>
        <Button
          size="xs"
          backgroundColor="#c0c0c0"
          color="#000080"
          border="1px solid #000080"
          borderRadius="3px"
          onClick={handleClose}
          _hover={{ backgroundColor: "#000080", color: "white" }}
        >
          X
        </Button>
      </Box>
      <Box padding="10px" overflowY="auto" height="calc(100% - 40px)">
        <Text fontSize="lg" mb={2} fontFamily="'MS Sans Serif', sans-serif">
          Chain: ETH
        </Text>
        <Text fontSize="lg" mb={2} fontFamily="'MS Sans Serif', sans-serif">
          Supply: 185,201,841,507 $retardiog
        </Text>
        <Text fontSize="lg" mb={2} fontFamily="'MS Sans Serif', sans-serif">
          TAX: 0/0
        </Text>
        <Text fontSize="lg" mb={2} fontFamily="'MS Sans Serif', sans-serif">
          Ownership: Renounced
        </Text>
        <Text fontSize="lg" fontFamily="'MS Sans Serif', sans-serif">
          Liquidity: Burned
        </Text>
        {message && (
          <Text fontSize="xl" color="#ff0000" mt={2}  fontFamily="'MS Sans Serif', sans-serif">
            {message}
          </Text>
        )}
        {isClosed && (
          <Text fontSize="xl" color="#ff0000" mt={4} pb={3} fontFamily="'MS Sans Serif', sans-serif">
            YOU ARE RETARDIOGED!
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default TokenomicsMB;
