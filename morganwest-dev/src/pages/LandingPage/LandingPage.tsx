import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid
} from '@mui/material';
import './LandingPage.module.css';
import PostCard from './PostCard';
import PostModal from './PostModal';
import { mockPosts } from './MockPosts';


const LandingPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePostClick = (post: any) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedPost(null), 300);
  };

  return (
    <Box className="landing-page">
      
      <Container maxWidth="lg" className="feed-container">
        
        <Grid container spacing={3} className="posts-grid">
          {mockPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <PostCard post={post} onClick={() => handlePostClick(post)} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <PostModal 
        post={selectedPost} 
        open={modalOpen} 
        onClose={handleCloseModal}
      />
    </Box>
  );
};

export default LandingPage;