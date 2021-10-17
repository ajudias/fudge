import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton} from '@mui/material';
import Avatar from '@mui/material/Avatar';
// components

import InputLabel from '@mui/material/InputLabel';
import { MHidden } from '../../components/@material-extend';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};

export default function DashboardNavbar({ onOpenSidebar }) {
  return (
    <RootStyle>
      <ToolbarStyle>
        <MHidden width="lgUp">
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Icon icon={menu2Fill} />
          </IconButton>
        </MHidden>

        <Avatar alt="profile img" src="static/mock-images/avatars/navbar_img.png" />
        <InputLabel id="label1" sx={{mx:3}}>Welcome, <b>Alex Martin</b>. Here's yourpersonalised financial dashboard.</InputLabel>


        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
        <InputLabel id="label1">Currency : GBP</InputLabel>
        <img src="static/icons/downarrow.svg" alt="arrow"/>
        <InputLabel id="label2">My Account</InputLabel>
        <img src="static/icons/downarrow.svg" alt="arrow"/>
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
