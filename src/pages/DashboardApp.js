
// material
import { Box, Grid, Container, Typography , Button } from '@mui/material';
import Stack from '@mui/material/Stack';
// components
import Page from '../components/Page';
import {
  AppWebsiteVisits,
  AppItemOrders,
  IndustryNews,
} from '../components/_dashboard/app';

import NetWorthToday from '../components/_dashboard/app/NetWorthToday';
import CashFlow from '../components/_dashboard/app/CashFlow';
import Slider from '../components/_dashboard/app/Slider';
import User from '../components/_dashboard/app/User';

import Comment from '../components/_dashboard/app/Comment';
// ----------------------------------------------------------------------

export default function DashboardApp() {


  return (
    <Page title="Fudge">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Stack direction="row" spacing={2}>
            <Typography variant="h4">Dashboard Home</Typography>
          </Stack>
        </Box>
        <Grid container spacing={3} >
          {/* left */}
          <Grid item xs={12} sm={6} md={6}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="h6">Quick Stats</Typography>
            </Grid>
            <Stack direction="row" spacing={1}>
              <Grid item xs={6} sm={6} md={6}>
                <NetWorthToday />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CashFlow />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <AppItemOrders />
              </Grid>
            </Stack>
          </Grid>
          {/* right */}
          <Grid item xs={6} sm={6} md={6}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="h6">My Financial Health</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Slider/>
            </Grid>
          </Grid>
        </Grid>

        <Box sx={{ py:2 }} />

        <Grid container spacing={3} >
          {/* left */}
          <Grid item xs={12} sm={6} md={6}>
            <Grid item xs={6} sm={6} md={6}>
              <Typography variant="h6">My Performance</Typography>
            </Grid>
            <Stack direction="row" spacing={1}>
              <Grid item xs={12} sm={12} md={12}>
                <AppWebsiteVisits />
              </Grid>
            </Stack>
          </Grid>
          {/* right */}
          <Grid item xs={12} sm={6} md={6}>
            <Stack direction="row" spacing={2} sx={{marginBottom:1}}>
              <Grid item xs={6} sm={6} md={6}>
                <Typography variant="h6">My Goals</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Button variant="contained" sx={{float:"right",background:"#e3e3e3",boxShadow:"none",color:"black"}}>
                  View all goals
                </Button>
              </Grid>
            </Stack>
            <Grid item xs={12} sm={12} md={12}>
              <Stack direction="row">
                <Grid item xs={12} sm={12} md={4}>
                  <img src="static/icons/retirement.svg" alt="retire"/>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <img src="static/icons/travel.svg" alt="retire"/>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <img src="static/icons/vacation.svg" alt="retire"/>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        {/* Dynamic Part */}

        <Grid container spacing={3} >
          {/* left */}
          <Grid item xs={12} sm={6} md={6}>
            <IndustryNews/>
          </Grid>
          {/* right */}
          <Grid item xs={12} sm={6} md={6}>
            <Stack direction="row" spacing={1}>
              <Grid item xs={12} sm={12} md={6}>
                <Comment/>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <User/>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
