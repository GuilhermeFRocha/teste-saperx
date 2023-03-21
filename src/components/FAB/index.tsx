import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { MdAdd } from 'react-icons/md';

export default function FAB(props: any) {
  const {onClick} = props
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <MdAdd onClick={onClick} />
      </Fab>
    </Box>
  );
}