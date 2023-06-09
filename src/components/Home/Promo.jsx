import {
  PromoWrap,
  Img,
  Button,
  Arrow,
  TextContainer,
  PromoText,
} from './Promo.styled';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useQueryClient } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion } from 'framer-motion';

export const Promo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData({ queryKey: ['home'] });

  const onClick = () => {
    if (window.screen.width < 980) {
      window.open(`${data.home.data.promoUrl}`, '_blank', 'noreferrer');
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

  // const opts = {
  //   height: '562',
  //   width: '900',
  //   playerVars: {
  //     autoplay: 1,
  //   },
  // };

  return (
    <AnimatePresence mode="wait">
      {data ? (
        <PromoWrap
          as={motion.div}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 0.2 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.15 },
          }}
        >
          <Img
            src={data.home.data.image}
            alt={data.home.data.promoAlt}
            loading="lazy"
          />
          <Button type="button" onClick={onClick}>
            <Arrow />
          </Button>
          <TextContainer>
            <PromoText>{data.home.data.promoAlt}</PromoText>
          </TextContainer>
          <AnimatePresence>
            {isOpen && (
              <Modal
                onBackdropClose={() => {
                  setIsOpen(false);
                }}
              >
                {/* <YouTube videoId={data.data[0].data.promoUrl} opts={opts} /> */}
              </Modal>
            )}
          </AnimatePresence>
        </PromoWrap>
      ) : (
        <PromoWrap
          as={motion.div}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 0.2 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.15 },
          }}
        >
          <Skeleton width={'100%'} height={'100%'} />
        </PromoWrap>
      )}
    </AnimatePresence>
  );
};
