import { Box, Heading, Text, keyframes } from '@chakra-ui/react';
import React from 'react';

const epilepticAnimation = keyframes`
  0% { background-color: black; color: white; }
  50% { background-color: white; color: black; }
  100% { background-color: black; color: white; }
`;

const TokenomicsMB = () => {
  return (
    <Box
      p={8}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      animation={`${epilepticAnimation} 1s infinite`}
    >
      <Heading as="h1" size="lg" mb={6} fontFamily="'Comic Neue', cursive">
        Quasinomics
      </Heading>
      <Text fontSize="2xl" mb={4} fontFamily="'Comic Neue', cursive">
        Chain: ETH
      </Text>
      <Text fontSize="2xl" mb={4} fontFamily="'Comic Neue', cursive">
        Supply: 185,201,841,507 $retardiog
      </Text>
      <Text fontSize="2xl" mb={4} fontFamily="'Comic Neue', cursive">
        TAX: 0/0
      </Text>
      <Text fontSize="2xl" mb={4} fontFamily="'Comic Neue', cursive">
        Ownership: Renounced
      </Text>
      <Text fontSize="2xl" fontFamily="'Comic Neue', cursive">
        Liquidity: Burned
      </Text>
    </Box>
  );
};

export default TokenomicsMB;
