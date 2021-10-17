
import {  styled } from '@mui/material/styles';
import { Card, Typography, Box } from '@mui/material';


const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: '0px 0px 40px #0B0B0B24',
  textAlign: 'center',
  padding: theme.spacing(3, 0),
  color: "black",
  backgroundColor: "white"
}));

export default function Slider() {
  return (
    <RootStyle>
      <Typography variant="caption" sx={{ opacity: 0.72 }}>
        <Box sx={{px:2}}>
          <img src="static/icons/slider.svg" alt="slider"/>
        </Box>
      </Typography>
      <Typography variant="caption" sx={{ opacity: 0.72 }}>
        Your financial status is <span style={{color:"green",fontSize:15,textDecoration:"underline"}}>GOOD</span> However there's still room for improvement
      </Typography>
    </RootStyle>
  );
}
