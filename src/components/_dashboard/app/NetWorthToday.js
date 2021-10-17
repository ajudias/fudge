
// material
import { Icon } from '@iconify/react';

import {  styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: '0px 0px 40px #0B0B0B24',
  textAlign: 'center',
  padding: theme.spacing(3, 0),
  color: "black",
  backgroundColor: "white"
}));


// ----------------------------------------------------------------------



export default function NetWorthToday() {
  return (
    <RootStyle>
      <Typography variant="h4"><Icon icon="bi:currency-pound"/>563,265</Typography>
      <Typography variant="caption" sx={{ opacity: 0.72 }}>
        Your net worth of today
      </Typography>
    </RootStyle>
  );
}
