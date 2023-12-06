import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function VideoTeachingDisplay({ caption,video,id }) {

	if (!video) {
		return null
	}

  return (
    <>
      <Card sx={{ maxWidth: 1000 }} className="lessonCard">
          <CardMedia
            component="div" // Use a div to create a custom container
            alt="piano"
            height="140"
            style={{ position: "relative" }}
          >
            <video
              controls
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </CardMedia>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
				{caption}
            </Typography>
          </CardContent>
      </Card>
    </>
  );
}

export default VideoTeachingDisplay;
