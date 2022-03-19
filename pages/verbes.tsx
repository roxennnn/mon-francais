import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import type { NextPage } from 'next';
import React from 'react';
import VerbGroupComponent from '../components/verb-group.component';

const TABS = [
  {
    label: 'Irréguliers 1',
    component: <VerbGroupComponent verbs={['être', 'avoir']} />,
  },
  {
    label: 'Réguliers -ER',
    component: <div />,
  },
  {
    label: 'Réguliers -IR',
    component: <div />,
  },
  {
    label: 'Réguliers -RE',
    component: <div />,
  },
  {
    label: 'Irréguliers -ER',
    component: <div />,
  },
  {
    label: 'Irréguliers -IR',
    component: <div />,
  },
  {
    label: 'Irréguliers -RE',
    component: <div />,
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const Verbes: NextPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {TABS.map((e, index: number) => (
            <Tab label={e.label} key={e.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {TABS.map((e, index: number) => (
        <div key={e.label}>{e.component}</div>
      ))}
    </Box>
  );
};

export default Verbes;
