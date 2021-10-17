import { Icon } from '@iconify/react';
// material
import {  styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: '0px 0px 40px #0B0B0B24',
  textAlign: 'center',
  padding: theme.spacing(3, 0),
  color: "black",
  backgroundColor: "white"
}));


// ----------------------------------------------------------------------


export default function AppItemOrders() {
  return (
    <RootStyle>
      <Typography variant="h4"><Icon icon="bi:currency-pound"/>162,430</Typography>

      <Typography variant="caption" sx={{ opacity: 0.72 }}>
        Overall Liabilities
      </Typography>
    </RootStyle>
  );
}
