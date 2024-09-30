import React from 'react';
import { Box, keyframes, Text } from '@chakra-ui/react';

const scrollAnimation = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const epilepticText = keyframes`
  0% { color: #ff0000; }
  25% { color: #00ff00; }
  50% { color: #0000ff; }
  75% { color: #ffff00; }
  100% { color: #ff00ff; }
`;

const FooterCarousel = () => {
  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      height="50px"
      overflow="hidden"
      display="flex"
      alignItems="center"
      zIndex="9999"
    >
      <Box
        whiteSpace="nowrap"
        display="inline-block"
        animation={`${scrollAnimation} 20s linear infinite`} 
      >
        <Text
          as="span"
          mx={15} 
          display="inline-block"
          fontSize="lg"
          fontWeight="bold"
          animation={`${epilepticText} 1s infinite`} 
        >
          $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking $barking
        </Text>
      </Box>
    </Box>
  );
};

export default FooterCarousel;
