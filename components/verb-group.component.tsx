import { Chip, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  COMPOSITE_VERBS,
  IConjugation,
  IKeyLabel,
  LEFT_MOST_VERB_COLUMN,
  VERBS,
  VERB_COLUMNS,
  VERB_PRONOUNS,
} from '../constants/verbs';
import TableComponent from './table.component';

type Props = {
  verbs: string[];
};

const VerbGroupComponent = (props: Props) => {
  const { verbs } = props;
  const [active, setActive] = useState<string>();

  const handleClick = (e: string) => {
    setActive(e);
  };

  useEffect(() => {
    if (!!verbs?.length) {
      setActive(verbs[0]);
    }
  }, [verbs]);

  const getVerbData = (
    startIndex: number,
    endIndex: number
  ): { columns: IKeyLabel[]; data: string[][] } => {
    const slicedColumns = VERB_COLUMNS.slice(startIndex, endIndex);
    const columns = [LEFT_MOST_VERB_COLUMN, ...slicedColumns];
    const data: string[][] = [];

    if (!!active) {
      const currentVerb = VERBS[active];
      const conjugations = [VERB_PRONOUNS];
      slicedColumns.forEach((e: IKeyLabel) => {
        conjugations.push(currentVerb[e.key as keyof IConjugation] as string[]);
      });

      // Make matrix transpose
      Array(VERB_PRONOUNS.length)
        .fill(0)
        .forEach((_, colIndex: number) => {
          const dataArr: string[] = [];
          conjugations.forEach((e) => {
            dataArr.push(
              e[colIndex] +
                (COMPOSITE_VERBS.includes(slicedColumns[colIndex]?.key)
                  ? ` ${currentVerb.participles.past}`
                  : '')
            );
          });
          data.push(dataArr);
        });

      return {
        columns,
        data,
      };
    }
    return {
      columns,
      data,
    };
  };

  return (
    <main
      style={{
        margin: '1rem',
      }}
    >
      <Stack direction="row" spacing={1} sx={{ marginBottom: '2rem' }}>
        {verbs.map((e: string) => (
          <Chip
            key={e}
            label={e}
            variant={active === e ? 'filled' : 'outlined'}
            onClick={() => {
              handleClick(e);
            }}
          />
        ))}
      </Stack>
      <Stack
        direction="column"
        spacing={4}
        sx={{
          margin: '0rem 3rem',
        }}
      >
        <TableComponent {...getVerbData(0, 6)} />
        <TableComponent {...getVerbData(6, 12)} />
      </Stack>
    </main>
  );
};

export default VerbGroupComponent;
