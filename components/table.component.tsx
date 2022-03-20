import Paper from '@mui/material/Paper';
import { Theme, useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { FRANCE_BLUE, FRANCE_BLUE_LIGHT } from '../constants/colors';
import { IKeyLabel } from '../models/general';
import { ColorModeContext } from '../pages/_app';
import { speakHandler } from '../utils/speaker';

type Props = {
  columns: IKeyLabel[];
  data: string[][];
  small?: boolean;
};

const TABLE_CELL = (theme: Theme) => ({
  borderLeft: `0.05rem solid ${theme.palette.divider}`,
  paddingRight: '2rem',
  '&:first-of-type': {
    borderLeft: 0,
  },
  width: theme.breakpoints.down('sm') ? '5rem' : '10rem',
});

export default function TableComponent(props: Props) {
  const muiTheme = useTheme();
  const themeContext = React.useContext(ColorModeContext);
  const getAlign = (index: number) => (!index ? 'left' : 'right');

  return (
    <TableContainer component={Paper} sx={{ height: 'max-content', flex: '1' }}>
      <Table sx={{ minWidth: 20 }} aria-label="simple table">
        <TableHead
          color="accent"
          sx={{
            backgroundColor:
              themeContext.colorMode === 'dark'
                ? FRANCE_BLUE_LIGHT
                : FRANCE_BLUE,
          }}
        >
          <TableRow>
            {props.columns.map((e, index: number) => (
              <TableCell
                key={e.key}
                align={getAlign(index)}
                sx={{
                  ...TABLE_CELL(muiTheme),
                  color: 'white',
                }}
              >
                {e.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow
              key={row.toString()}
              sx={{
                '&:last-child td, &:last-child th': {
                  border: 0,
                  borderLeft: TABLE_CELL(muiTheme).borderLeft,
                },
              }}
            >
              {row.map((e: string, index: number) => (
                <TableCell
                  key={e}
                  align={getAlign(index)}
                  sx={{
                    ...TABLE_CELL(muiTheme),
                  }}
                >
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      speakHandler(e, window);
                    }}
                  >
                    {e}
                  </span>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
