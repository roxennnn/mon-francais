import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { IKeyLabel } from '../constants/verbs';

type Props = {
  columns: IKeyLabel[];
  data: string[][];
};

const TABLE_CELL = {
  borderLeft: '0.05rem solid gray',
  paddingRight: '2rem',
  '&:first-child': {
    borderLeft: 0,
  },
  width: '10rem',
};

export default function TableComponent(props: Props) {
  const getAlign = (index: number) => (!index ? 'left' : 'right');

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead
          color="accent"
          // sx={{
          //   backgroundColor: 'darkgray',
          // }}
        >
          <TableRow>
            {props.columns.map((e, index: number) => (
              <TableCell
                key={e.key}
                align={getAlign(index)}
                sx={{
                  ...TABLE_CELL,
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
                  borderLeft: TABLE_CELL.borderLeft,
                },
              }}
            >
              {row.map((e: string, index: number) => (
                <TableCell
                  key={e}
                  align={getAlign(index)}
                  sx={{
                    ...TABLE_CELL,
                  }}
                >
                  {e}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
