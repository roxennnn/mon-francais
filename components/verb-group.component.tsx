import { VolumeUp } from '@mui/icons-material';
import {
  Chip,
  IconButton,
  Stack,
  SxProps,
  Typography,
  TypographyProps,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { speakHandler } from '../utils/speaker';
import {
  getPastInfinitive,
  getVerbComment,
  getVerbData,
  getVerbDefinition,
  getVerbExample,
  getVerbParticipleData,
} from '../utils/verbs';
import TableComponent from './table.component';
import VerbListComponent from './verb-list.component';

type TypographySpeakerProps = {
  text: string;
  spacing?: number;
  typographyProps?: TypographyProps;
  speakerButtonSx?: SxProps;
};

const TypographySpeaker = (props: TypographySpeakerProps) => {
  return (
    <Stack direction="row" alignItems="center" spacing={props.spacing || 0}>
      <Typography {...props.typographyProps}>{props.text}</Typography>
      <IconButton
        onClick={() => {
          speakHandler(props.text, window);
        }}
        sx={{
          ...props.speakerButtonSx,
        }}
      >
        <VolumeUp />
      </IconButton>
    </Stack>
  );
};

type Props = {
  verbs: string[];
};

const VerbGroupComponent = (props: Props) => {
  const { verbs } = props;
  const [active, setActive] = useState<string>('');

  const muiTheme = useTheme();
  const isLgBreakpoint = useMediaQuery(muiTheme.breakpoints.down('lg'));
  const isMdBreakpoint = useMediaQuery(muiTheme.breakpoints.down('md'));
  const isSmBreakpoint = useMediaQuery(muiTheme.breakpoints.down('sm'));

  const getIndexesPair = (): [number, number][] => {
    const CONJUGATIONS = 12;
    let conjPerTable = 6;
    if (isSmBreakpoint) {
      conjPerTable = 2;
    } else if (isMdBreakpoint) {
      conjPerTable = 3;
    } else if (isLgBreakpoint) {
      conjPerTable = 4;
    }

    return Array(CONJUGATIONS / conjPerTable)
      .fill(0)
      .map((_, index: number) => [
        index * conjPerTable,
        (index + 1) * conjPerTable,
      ]);
  };

  const handleClick = (e: string) => {
    setActive(e);
  };

  useEffect(() => {
    if (!!verbs?.length) {
      setActive(verbs[0]);
    }
  }, [verbs]);

  return (
    <main
      style={{
        margin: isSmBreakpoint ? '1rem 1.5rem 2rem' : '3rem',
        marginTop: '1rem',
      }}
    >
      <Stack
        direction="row"
        // spacing={1}
        sx={{
          marginBottom: 2,
          flexWrap: 'wrap',
        }}
      >
        {verbs.map((e: string) => (
          <Chip
            key={e}
            label={e}
            variant={active === e ? 'filled' : 'outlined'}
            onClick={() => {
              handleClick(e);
            }}
            sx={{
              marginBottom: 1,
              marginLeft: 1,
            }}
          />
        ))}
      </Stack>

      <TypographySpeaker
        text={active}
        spacing={1}
        typographyProps={{
          sx: { marginTop: '0.5rem' },
          variant: 'h3',
        }}
        speakerButtonSx={{ marginTop: '0.6rem !important' }}
      />

      <TypographySpeaker
        text={getVerbDefinition(active)}
        typographyProps={{
          variant: 'subtitle1',
        }}
        speakerButtonSx={{ transform: 'scale(0.8)' }}
      />

      <TypographySpeaker
        text={getVerbExample(active)}
        typographyProps={{
          variant: 'subtitle2',
          sx: {
            fontStyle: 'italic',
          },
        }}
        speakerButtonSx={{ transform: 'scale(0.8)' }}
      />

      <Stack
        direction="column"
        spacing={4}
        sx={{
          marginTop: 2,
        }}
      >
        {getIndexesPair().map((e: [number, number]) => (
          <TableComponent
            key={String(e)}
            {...getVerbData(active, e[0], e[1])}
          />
        ))}
        <Stack direction={isSmBreakpoint ? 'column' : 'row'} spacing={4}>
          <TableComponent {...getVerbData(active, 12, 14)} />
          {active === 'falloir' ? (
            <div style={{ flex: '1 1 0' }}></div>
          ) : (
            <TableComponent {...getVerbData(active, 14, 16, true)} />
          )}
        </Stack>

        <Stack sx={{ marginTop: '1rem !important' }}>
          <VerbListComponent
            data={getVerbParticipleData(active)}
            title="Participles"
          />
          <VerbListComponent
            data={[
              ['Present:', active],
              ['Past:', getPastInfinitive(active)],
            ]}
            title="Infinitives"
          />
        </Stack>
      </Stack>

      {getVerbComment(active) && (
        <>
          <Typography variant="h4">Comment</Typography>
          <Typography variant="subtitle1">{getVerbComment(active)}</Typography>
        </>
      )}
    </main>
  );
};

export default VerbGroupComponent;
