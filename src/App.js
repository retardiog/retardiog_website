import React, { useState } from 'react';
import Menu from './components/Menu';
import FullScreenVideo from './components/FullScreenVideo';
import BoldMessage from './components/BoldMessage';
import Tokenomics from './components/Tokenomics';
import TokenomicsMB from './components/TokenomicsMB'; 
import JoinCommunity from './components/JoinCommunity';
import EntranceModal from './components/EntranceModal';
import FooterCarousel from './components/FooterCarousel';
import { useMediaQuery } from '@chakra-ui/react'; 
import './App.css';

function App() {
  const [isVideoWithSound, setIsVideoWithSound] = useState(false);
  const [isModalClosed, setIsModalClosed] = useState(false);

  const handleEnter = () => {
    setIsVideoWithSound(true);
    setIsModalClosed(true);
  };

  const handleExit = () => {
    setIsVideoWithSound(false);
    setIsModalClosed(true);
  };

  const toggleMute = () => {
    setIsVideoWithSound((prev) => !prev);
  };

  const [isMobile] = useMediaQuery("(max-width: 48em");

  return (
    <div className="App">
      {!isModalClosed ? (
        <EntranceModal onEnter={handleEnter} onExit={handleExit} />
      ) : (
        <>
          <Menu toggleMute={toggleMute} isMuted={!isVideoWithSound} />
          <FullScreenVideo playWithSound={isVideoWithSound} />
          <BoldMessage />
          {isMobile ? <TokenomicsMB /> : <Tokenomics />}
          <JoinCommunity />
          <FooterCarousel />
        </>
      )}
    </div>
  );
}

export default App;
