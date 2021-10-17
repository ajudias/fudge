
import {useEffect,useState} from 'react';
import axios from 'axios';
import { Card, CardHeader, Typography, Stack, Box, } from '@mui/material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import moment from 'moment';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';

import Scrollbar from '../../Scrollbar';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    bottom:"25%",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

// ----------------------------------------------------------------------
function UserItem({ user }) {

  const d = new Date(user.createdAt);

  const formatedDate=moment(d).fromNow() // June 1, 2019 
  return (
    <Stack direction="row">
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="static/mock-images/avatars/navbar_img.png" />
      </StyledBadge>
      <Stack direction="row" alignItems="center" spacing={1} sx={{mx:2}}>
        <Box sx={{ minWidth: 240 }}>
          <Typography variant="subtitle1" noWrap>
            {user.name}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }} noWrap>
            active
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}



export default function User() {

  const [users,setUsers]=useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [contentsPerPage, setContentsPerPage] = useState(5);
  const [visibleData, setVisibleData] = useState([]);

  const getUsers = () =>{
    axios
    .get(`${process.env.REACT_APP_SERVER_URL}/users`)
    .then((res) => {
      setUsers(res.data)
      setVisibleData(res.data.slice(0, contentsPerPage));

    })
    .catch((err) => {
      console.log(err);
    });
  }
  

  const handlePagination = (page,pageSize) => {
    const start = pageSize * contentsPerPage - contentsPerPage;
    const end = start + contentsPerPage ;
    setCurrentPage(pageSize);
    setVisibleData(users.slice(start, end));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Card sx={{minHeight:500}}>
      <CardHeader title="Industry News" />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
        {visibleData && visibleData.length > 0 ? (
            visibleData.map((user) => (
              <UserItem key={user._id} user={user} />
            ))
          ) : "No Data"}
        </Stack>
      </Scrollbar>
      {users && users.length > contentsPerPage && (
        <Box sx={{ p: 2, textAlign: 'left' ,position:"absolute", bottom:0}}>
            <Pagination
              defaultPage={1}
              count={Math.ceil(users.length/contentsPerPage)}
              page={currentPage}
              onChange={handlePagination}
              pageSize={contentsPerPage}
            />
        </Box>
      )}
    </Card>
  );
}
