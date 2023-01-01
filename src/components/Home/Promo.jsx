import {
  PromoWrap,
  Img,
  Button,
  Arrow,
  TextContainer,
  PromoText,
} from './Promo.styled';
import promo from '../../image/promoImg/promoVideo.png';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import YouTube from 'react-youtube';
import { AnimatePresence } from 'framer-motion';

export const Promo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    if (window.screen.width < 980) {
      window.open(
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        '_blank',
        'noreferrer'
      );
      return;
    }
    setIsOpen(true);
    document.addEventListener('keydown', onEscClick);
  };

  function onEscClick(e) {
    if (e.code === 'Escape') {
      setIsOpen(false);
      document.removeEventListener('keydown', onEscClick);
    }
  }

  const opts = {
    height: '562',
    width: '900',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <PromoWrap>
      <Img src={promo} alt="" />
      <Button type="button" onClick={onClick}>
        <Arrow />
      </Button>
      <TextContainer>
        <PromoText>Відео-звіт конкурсу “Радіотехніки”</PromoText>
      </TextContainer>
      <AnimatePresence>
        {isOpen && (
          <Modal
            onBackdropClose={() => {
              setIsOpen(false);
            }}
          >
            <YouTube videoId="G510jeWiaV0" opts={opts} />
          </Modal>
        )}
      </AnimatePresence>
    </PromoWrap>
  );
};
