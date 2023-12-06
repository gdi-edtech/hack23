import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LessonCard from '../components/LessonCard';
import { Container, Grid } from '@mui/material';
import VideoPost from '../components/VideoPost';

function HomePage() {
	const[lessons, setLessons] = useState([]); 
	const [videos, setVideos] = useState([]); 
  useEffect(() => {
		// Fetch All lessons from DB
		fetch("http://localhost:3000/api/teaching-texts/")
			.then((resp) =>
			resp.json())
			.then((res) => {
        // const list = res.concat(res).concat(res); // not a lot of data to read right now so duplicating
				setLessons(res);
			});
      fetch("http://localhost:3000/api/video-uploads/")
        .then((resp) => resp.json())
        .then((res) => {
          // not a lot of data to read right now so duplicating
          setVideos(res);
        });

	}, []);
  console.log(videos);
  return (
    <>
    <div className="learningPage">
      <div>
        <h1>Available Lessons</h1>
        <Grid
          rowSpacing={4}
          columnSpacing={3}
          container
          direction="row"
          alignItems="stretch"
        >
          {lessons.map((lesson, index) => {
            console.log(lesson);
            return (
              <Grid item key={index} xs={3}>
                 <Link to={`/singlelesson`}>
                <LessonCard
                  title={lesson.title}
                  desc={lesson.description}
                  id={lesson._id}
                ></LessonCard>
              </Link>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <div>
        <h1>Available Videos</h1>
        <Grid
          rowSpacing={4}
          columnSpacing={3}
          container
          direction="row"
          alignItems="stretch"
        >
          {videos.map((singleVideo, index) => {
            
            return (
              <Grid item key={index} xs={3}>
                <VideoPost
                  caption={singleVideo.caption}
                  video={singleVideo.video}
                  id={singleVideo._id}
                ></VideoPost>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
    </>
  );
}

export default HomePage