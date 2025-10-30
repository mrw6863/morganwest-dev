import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import { Close as CloseIcon } from '@mui/icons-material';
import styles from './PostModal.module.css';  // Import as styles object

const PostModal = ({ post, open, onClose }: { post: any; open: boolean; onClose: () => void }) => {
    return (
      <Dialog 
        open={open} 
        onClose={onClose} 
        maxWidth="md" 
        fullWidth
        className={styles.postModal}
        PaperProps={{
          className: styles.postModalPaper
        }}
      >
        <DialogTitle className={styles.postModalTitle}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" className={styles.modalTitleText}>
              {post?.title}
            </Typography>
            <IconButton onClick={onClose} className={styles.modalCloseButton}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent className={styles.postModalContent}>
          {post?.image && (
            <Box className={styles.modalImageContainer}>
              <img 
                src={post.image} 
                alt={post.title}
                className={styles.modalImage}
              />
            </Box>
          )}
          <Box className={styles.modalTags}>
            {post?.tags.map((tag: string) => (
              <Chip 
                key={tag} 
                label={tag} 
                size="small" 
                className={styles.postTag}
              />
            ))}
          </Box>
          <Typography variant="caption" className={styles.modalDate}>
            {post && new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </Typography>
          <Typography variant="body1" className={styles.modalContentText}>
            {post?.fullContent}
          </Typography>
        </DialogContent>
        <DialogActions className={styles.postModalActions}>
          <Button onClick={onClose} className={styles.modalCloseButtonText}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

export default PostModal;