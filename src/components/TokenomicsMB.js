import { Box, Text, Button } from '@chakra-ui/react';
import React from 'react';

const TokenomicsMB = () => {
  return (
    <Box
      width="400px"
      height="300px"
      border="2px solid #000080"
      borderRadius="5px"
      backgroundColor="#c0c0c0"
      boxShadow="5px 5px 0px #000"
      position="relative"
      overflow="hidden"
    >
      <Box
        width="100%"
        backgroundColor="#000080"
        padding="5px"
        borderRadius="5px 5px 0 0"
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
          _hover={{ backgroundColor: "#000080", color: "white" }}
        >
          _
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
      </Box>
    </Box>
  );
};

export default TokenomicsMB;
