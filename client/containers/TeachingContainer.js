import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function TeachingContainer() {
	const { id } = useParams();
	const[lessonDetails, setLessonDetails] = useState([]);
	
	useEffect(() => {

		// Fetch lesson details using id
		fetch("http://localhost:3000/api/teaching-texts/${id}")
			.then((response) =>
			response.json())
			.then((data) => {
				setLessonDetails(data);
			});

			// fetch("http://localhost:3000/api/threads/?lessonId=${lessonId}")
			// .then((resp) => resp.json())
			// .then(setThreads)

	}, [id]);
	// const threadCards = threads.map((thread) => <div><p>{thread.content}</p></div>)
	// const lessonLinks = lessons.map((lesson)=> <div><p>{lesson.title}</p></div>)
	return (
		<div>
			<h2>{lessonDetails.title}</h2>
			<p>{lessonDetails.description}</p>
		</div>
	);

};

export default TeachingContainer;
