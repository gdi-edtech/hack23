import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LessonPost from '../components/LessonPost';
import TextTeachingDisplay from '../components/TextTeachingDisplay';

function TeachingContainer() {
	const { id } = useParams();
	const[lesson, setLesson] = useState([]);
	// lesson id
	useEffect(() => {

		// Fetch lesson
		console.log(id);
		fetch(`http://localhost:3000/api/teaching-texts/${id}`)
			.then((resp) =>
			resp.json())
			.then((value) => {
				setLesson(value);
			});

			// fetch("http://localhost:3000/api/threads/?lessonId=${lessonId}")
			// .then((resp) => resp.json())
			// .then(setThreads)

	}, [id]);
	// const threadCards = threads.map((thread) => <div><p>{thread.content}</p></div>)
	// const lessonLinks = lessons.map((lesson)=> <div><p>{lesson.title}</p></div>)
	return (
		<div>
			<TextTeachingDisplay title={lesson.title} description={lesson.description}></TextTeachingDisplay>
{/* 			
			<h1> {lesson.title} </h1>
			<p>{lesson.description}</p> */}
			{/* <LessonPost title={lesson.title} desc={lesson.description} id={lesson._id}></LessonPost> */}
		</div>
	);

};

export default TeachingContainer;
