import { Card, CardMedia, CardContent, Typography, Box, Chip } from "@mui/material";
import styles from "./PostCard.module.css"

const PostCard = ({ post, onClick }: { post: any; onClick: () => void }) => {
    return (
      <Card className="post-card" onClick={onClick}>
        {post.image && (
          <CardMedia
            component="img"
            height="200"
            image={post.image}
            alt={post.title}
            className="post-card-image"
          />
        )}
        <CardContent className="post-card-content">
          <Typography variant="h6" className="post-card-title">
            {post.title}
          </Typography>
          <Typography variant="body2" className="post-card-description">
            {post.description}
          </Typography>
          <Box className="post-card-tags">
            {post.tags.map((tag: string) => (
              <Chip 
                key={tag} 
                label={tag} 
                size="small" 
                className="post-tag"
              />
            ))}
          </Box>
          <Typography variant="caption" className="post-card-date">
            {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </Typography>
        </CardContent>
      </Card>
    );
  };

export default PostCard;