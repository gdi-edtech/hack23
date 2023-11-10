import React, { useEffect, useState } from 'react'
import LessonPost from '../components/LessonPost';
import { Container, Grid } from '@mui/material';


function HomePage() {
	const[lessons, setLessons] = useState([]); 

  useEffect(() => {
		// Fetch All lessons from DB
		fetch("http://localhost:3000/api/teaching-texts/")
			.then((resp) =>
			resp.json())
			.then((res) => {
        const list = res.concat(res).concat(res); // not a lot of data to read right now so duplicating
				setLessons(list);
			});

	}, []);
  return (
    <div>
      <h1>Available Lessons</h1>
      <Grid rowSpacing={4} columnSpacing={3}
        container
        direction="row"
        alignItems="stretch"
      >
        {lessons.map((lesson, index) => {
          console.log(lesson);
          return(
            <Grid item key={index} xs={3}>
              <LessonPost title={lesson.title} desc={lesson.description} id={lesson._id}></LessonPost>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}

export default HomePage