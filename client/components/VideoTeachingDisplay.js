import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
// Import your comments component
// import CommentsSection from './CommentsSection';

function VideoTeachingDisplay({ title, description, video }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}> {/* Adjust size as needed */}
        <Card raised sx={{ width: '100%' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
       {/* <Grid item xs={12} md={4}> 
            <CommentsSection /> dummy Comments Section component
        </Grid> */}
    </Grid>
  );
}

export default TextTeachingDisplay;