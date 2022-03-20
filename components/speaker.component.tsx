import { VolumeUp } from '@mui/icons-material';
import { Box, SxProps } from '@mui/material';
import React, { useContext } from 'react';
import { SayButton } from 'react-say-fork';
import { ColorModeContext } from '../pages/_app';
import { purifyText } from '../utils/verbs';

type Props = {
  speak: string;
  children: React.ReactChild;
  sx?: SxProps;
};

export const isMobileDevice = () =>
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

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
  return isMobileDevice ? (
    <div>{props.speak}</div>
  ) : (
    <SpeakerComponent {...props}>{props.speak}</SpeakerComponent>
  );
};

export const SpeakerButtonComponent = (props: ComponentProps) => {
  return isMobileDevice ? (
    <></>
  ) : (
    <SpeakerComponent {...props}>
      <VolumeUp />
    </SpeakerComponent>
  );
};
