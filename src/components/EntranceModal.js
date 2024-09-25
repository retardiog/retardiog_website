import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Text,
  Image,
  keyframes,
  useDisclosure,
} from '@chakra-ui/react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const psychedelicBackground = keyframes`
  0% { background-color: #ff0000; }
  20% { background-color: #00ff00; }
  40% { background-color: #0000ff; }
  60% { background-color: #ffff00; }
  80% { background-color: #ff00ff; }
  100% { background-color: #00ffff; }
`;

const images = ['/quasi.png', '/quasi2.png', '/quasi3.png'];

const EntranceModal = ({ onEnter, onExit }) => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [gifElements, setGifElements] = useState([]);

  useEffect(() => {
    const generateGifs = () => {
      const newGifs = Array.from({ length: 20 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random(),
        image: images[Math.floor(Math.random() * images.length)],
      }));
      setGifElements(newGifs);
    };

    generateGifs();
    const interval = setInterval(() => {
      generateGifs();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    onEnter();
    onClose();
  };

  const handleExit = () => {
    onExit();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleExit} isCentered size="full">
      <ModalOverlay
        bg="transparent"
        animation={`${psychedelicBackground} 1s infinite`}
      />
      <ModalContent position="relative" height="100vh" width="100vw" overflow="hidden">
        {gifElements.map((position, index) => (
          <Image
            key={index}
            src={position.image}
            alt=""
            position="absolute"
            top={position.top}
            left={position.left}
            boxSize={{ base: '100px', md: `${Math.random() * 150 + 150}px` }} 
            opacity={position.opacity}
            style={{ pointerEvents: 'none' }}
          />
        ))}
        <Flex
          direction="column"
          justify="center"
          align="center"
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex={2}
          textAlign="center"
        >
          <ModalHeader mt={15}>
            Welcome to <span style={{ fontWeight: 'bold', fontSize: '8xl' }}>$retardiog</span>
          </ModalHeader>
          <ModalBody pb={10}>
            <Image
              src="/quasi.png"
              alt="Community Image"
              boxSize="250px" 
              mb={8}
            />
            <Text>
              Du yu want to esperience da website with soundd or without soundddd?
            </Text>
          </ModalBody>
          <ModalFooter justifyContent="center" zIndex={2}>
            <Button
              colorScheme="teal"
              mr={3}
              onClick={handleEnter}
              size="lg"
              leftIcon={<FaVolumeUp />}
              zIndex={2}
              _hover={{ transform: 'scale(1.1)', cursor: 'pointer' }}
              transition="transform 0.2s"
            >
              I am Retarded (With Sound)
            </Button>
            <Button
              variant="ghost"
              onClick={handleExit}
              size="lg"
              leftIcon={<FaVolumeMute />}
              zIndex={2}
              _hover={{ transform: 'scale(1.1)', cursor: 'pointer' }}
              transition="transform 0.2s"
            >
              I'm a Jeet (Muted)
            </Button>
          </ModalFooter>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default EntranceModal;
