import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import type { NextPage } from 'next';
import React from 'react';
import VerbGroupComponent from '../components/verb-group.component';
import {
  IRR_ER_VERBS,
  IRR_IR_VERBS,
  IRR_RE_VERBS,
  PRINCIPAL_VERBS,
  REG_ER_VERBS,
  REG_IR_VERBS,
  REG_RE_VERBS,
} from '../constants/verbs';

const TABS = [
  {
    label: 'Principal',
    component: <VerbGroupComponent verbs={Object.keys(PRINCIPAL_VERBS)} />,
  },
  {
    label: 'Réguliers -ER',
    component: <VerbGroupComponent verbs={Object.keys(REG_ER_VERBS)} />,
  },
  {
    label: 'Réguliers -IR',
    component: <VerbGroupComponent verbs={Object.keys(REG_IR_VERBS)} />,
  },
  {
    label: 'Réguliers -RE',
    component: <VerbGroupComponent verbs={Object.keys(REG_RE_VERBS)} />,
  },
  {
    label: 'Irréguliers -ER',
    component: <VerbGroupComponent verbs={Object.keys(IRR_ER_VERBS)} />,
  },
  {
    label: 'Irréguliers -IR',
    component: <VerbGroupComponent verbs={Object.keys(IRR_IR_VERBS)} />,
  },
  {
    label: 'Irréguliers -RE',
    component: <VerbGroupComponent verbs={Object.keys(IRR_RE_VERBS)} />,
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
};

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
          indicatorColor="secondary"
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
        <TabPanel key={e.label} value={value} index={index}>
          {e.component}
        </TabPanel>
      ))}
    </Box>
  );
};

export default Verbes;
