import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Grid,
  CircularProgress,
  Typography
} from '@mui/material';
import './LandingPage.module.css';
import PostCard from './Post/PostCard';
import PostModal from './Post/PostModal';
import { mockPosts } from './MockPosts';
import Header from './Header/Header';
import { fetchNotionPosts, NotionPost } from '../../services/notionService';

const LandingPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState<NotionPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const notionPosts = await fetchNotionPosts();
        
        // Fallback to mock posts if Notion fails or returns empty
        setPosts(notionPosts.length > 0 ? notionPosts : mockPosts);
        setError(null);
      } catch (err) {
        console.error('Failed to load posts:', err);
        setError('Failed to load posts from Notion');
        setPosts(mockPosts); // Fallback to mock posts
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const handlePostClick = (post: any) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedPost(null), 300);
  };

  if (loading) {
    return (
      <Box className="landing-page">
        <Header />
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
          <CircularProgress />
        </Container>
      </Box>
    );
  }

  return (
    <Box className="landing-page">
      <Header />
      
      <Container maxWidth="lg" className="feed-container">
        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error} - Showing mock data
          </Typography>
        )}
        
        <Grid container spacing={3} className="posts-grid">
          {posts.map((post) => (
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