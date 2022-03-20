import { VolumeUp } from '@mui/icons-material';
import { Box, IconButton, SxProps } from '@mui/material';
import React, { useContext } from 'react';
import { isMobile } from 'react-device-detect';
import { SayButton } from 'react-say-fork';
import { ColorModeContext } from '../pages/_app';
import { purifyText } from '../utils/verbs';

type Props = {
  speak: string;
  children: React.ReactChild;
  sx?: SxProps;
};

const SpeakerComponent = (props: Props) => {
  const voiceSelector = React.useCallback(
    (voices) => [...voices].find((v) => v.lang === 'fr-FR'),
    []
  );

  const themeContext = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        '& button': {
          cursor: 'pointer',
          border: 'none',
          background: 'transparent',
          color: themeContext.colorMode === 'dark' ? 'white' : 'black',
          '& svg': {
            fill: themeContext.colorMode === 'light' ? 'black' : 'white',
          },
        },
        ...(props.sx || {}),
      }}
    >
      <SayButton text={purifyText(props.speak)} voice={voiceSelector}>
        {props.children}
      </SayButton>
    </Box>
  );
};

export default SpeakerComponent;

type ComponentProps = {
  speak: string;
  sx?: SxProps;
};

export const SpeakerTextComponent = (props: ComponentProps) => {
  return isMobile ? (
    <div>{props.speak}</div>
  ) : (
    <SpeakerComponent {...props}>{props.speak}</SpeakerComponent>
  );
};

export const SpeakerButtonComponent = (props: ComponentProps) => {
  const clickHandler = (event) => {
    event.preventDefault();
    const synth = window.speechSynthesis;

    const utterThis = new SpeechSynthesisUtterance(props.speak);
    const selectedOption = 'fr-FR';
    // const voiceSelector = React.useCallback(
    //   (voices) => [...voices].find((v) => v.lang === 'fr-FR'),
    //   []
    // );
    const voices = synth.getVoices();

    Array(voices.length)
      .fill(0)
      .forEach((_, index: number) => {
        if (voices[index].name === selectedOption) {
          utterThis.voice = voices[index];
        }
      });
    synth.speak(utterThis);
  };

  return (
    <IconButton onClick={clickHandler}>
      <VolumeUp />
    </IconButton>
  );
  // return isMobile ? (
  //   <></>
  // ) : (
  //   <SpeakerComponent {...props}>
  //     <VolumeUp />
  //   </SpeakerComponent>
  // );
};
