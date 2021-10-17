import {useEffect,useState} from 'react';
import axios from 'axios';
// material
import { Box, Stack,  Card,  Divider, Typography, CardHeader } from '@mui/material';

import moment from 'moment';
import Pagination from '@mui/material/Pagination';
//
import Scrollbar from '../../Scrollbar';


function NewsItem({ post }) {
  const {  title, body, createdAt } = post;

  const d = new Date(createdAt);

  const formatedDate=moment(d).format('D MMMM YYYY'); // June 1, 2019 
  return (
    <Stack>
      <Typography variant="caption" sx={{flexShrink: 0, color: 'text.secondary' }}>
        {formatedDate}
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Box sx={{ minWidth: 240 }}>
          <Typography variant="subtitle1" noWrap>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }} noWrap>
            {body}
          </Typography>
          <Typography variant="caption" sx={{color: 'blue' }}>
            Read More
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

export default function IndustryNews() {
  
  const [posts,setPosts]=useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [contentsPerPage, setContentsPerPage] = useState(3);
  const [visibleData, setVisibleData] = useState([]);
  const getPosts = () =>{
    axios
    .get(`${process.env.REACT_APP_SERVER_URL}/posts`)
    .then((res) => {
      setPosts(res.data)
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
    setVisibleData(posts.slice(start, end));
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Card sx={{minHeight:500}}>
      <CardHeader title="Industry News" />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {visibleData && visibleData.length > 0 ? (
            visibleData.map((post) => (
              <NewsItem key={post.title} post={post} />
            ))
          ) : "No Data"}
        </Stack>
      </Scrollbar>

      
      {posts && posts.length > contentsPerPage && (
        <Box sx={{ p: 2, textAlign: 'left' ,position:"absolute", bottom:0}}>
            <Pagination
              defaultPage={1}
              count={Math.ceil(posts.length/contentsPerPage)}
              page={currentPage}
              onChange={handlePagination}
              pageSize={contentsPerPage}
            />
        </Box>
      )}
    </Card>
  );
}
