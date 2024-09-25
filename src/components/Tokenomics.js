import { Box, Text, Flex, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const Tokenomics = () => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <Flex direction={{ base: 'column', md: 'row' }} width="100%">
      <Box
        flex="1"
        p={4}
        display={{ base: 'none', md: 'flex' }}
        justifyContent="center"
        alignItems="center"
        height={{ base: '0', md: 'auto' }}
        border="7px solid"
        borderColor="#00FF00"
      >
        <div id="dexscreener-embed">
          <iframe
            src="https://dexscreener.com/ethereum/0xE7b4e528308c84FD6698906b6224615E9e30d236?embed=1&theme=dark&trades=0&info=0"
            allowFullScreen
            title="DexScreener Chart"
            style={{ width: '100%', height: '50vh', border: '0' }}
          ></iframe>
        </div>
      </Box>

      <Box
        flex="1"
        p={0} // Cambia el padding a 0 para que no afecte el diseño
        display="flex"
        flexDirection="column"
        justifyContent="flex-start" // Cambia a flex-start para que el contenido empiece desde arriba
        alignItems="center"
        position="relative"
        border="2px solid #000080"
        borderRadius="5px"
        backgroundColor="#c0c0c0"
        boxShadow="5px 5px 0px #000"
      >
        <Box
          width="100%"
          backgroundColor="#000080"
          padding="5px"
          borderRadius="5px 5px 0 0"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          position="absolute" // Añade posición absoluta
          top="0" // Coloca en la parte superior
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
        <Box padding="30px 10px 10px" marginTop="30px"> {/* Ajusta el padding para el contenido */}
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
        {isClosed && (
          <Text fontSize="xl" color="#ff0000" mt={4} fontFamily="'MS Sans Serif', sans-serif">
            YOU ARE RETARDIOED!
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default Tokenomics;
