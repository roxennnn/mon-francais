import { List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import React from 'react';
import { speakHandler } from '../utils/speaker';

const VerbListItemComponent = (props: { value: string; label: string }) => {
  return (
    <Stack direction="row">
      <ListItem
        alignItems="flex-start"
        sx={{ paddingTop: 0, paddingBottom: 0, width: '30%' }}
      >
        <ListItemText primary={props.label} />
      </ListItem>
      <ListItem
        alignItems="flex-start"
        sx={{ paddingTop: 0, paddingBottom: 0 }}
      >
        <ListItemText
          primary={props.value}
          sx={{
            cursor: 'pointer',
          }}
          onClick={() => {
            speakHandler(props.value, window);
          }}
        />
      </ListItem>
    </Stack>
  );
};

const VerbListComponent = (props: {
  data: [string, string][];
  title: string;
}) => {
  return (
    <>
      <Typography sx={{ display: 'inline', marginTop: '0.5rem' }} variant="h6">
        {props.title}
      </Typography>
      <List
        sx={{
          width: '100%',
          paddingTop: 0,
        }}
      >
        {props.data.map((e: [string, string]) => (
          <VerbListItemComponent key={String(e)} label={e[0]} value={e[1]} />
        ))}
      </List>
    </>
  );
};

export default VerbListComponent;
