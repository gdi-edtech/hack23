import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPost from '../components/VideoPost';
// import DiscussionThreads from './DiscussionThreads';


function TeachingContainer() {
	const { id } = useParams();
	const[lesson, setLesson] = useState([]);
	useEffect(() => {

		// Fetch threads
		fetch(`http://localhost:3000/api/teaching-videos/${id}`)
			.then((resp) =>
			resp.json())
			.then((value) => {
				console.log(value);
				setLesson(value);
			});

			// fetch("http://localhost:3000/api/threads/?lessonId=${lessonId}")
			// .then((resp) => resp.json())
			// .then(setThreads)

	}, [id]);
	// const threadCards = threads.map((thread) => <div><p>{thread.content}</p></div>)

	return (
		<div>
			<VideoPost
				caption={lesson.caption}
				video={lesson.video}
				id={lesson._id}
	  ></VideoPost>
			{/* teaching content component here */}
			{/* <DiscussionThreads lessonId={lessonId}/> */}
		</div>
	);

};

export default TeachingContainer;
