import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoTeachingDisplay from '../components/VideoTeachingDisplay';
import DiscussionThreads from './DiscussionThreads';
import "../stylesheets/TeachingContainer.scss";

function TeachingContainer() {

	const { id } = useParams();
	const[lesson, setLesson] = useState([]);

	useEffect(() => {

		// Fetch threads
		fetch(`http://localhost:3000/api/video-uploads/${id}`)
			.then((resp) =>
			resp.json())
			.then((value) => {
				console.log(value);
				setLesson(value);
			});

	}, [id]);

	return (
		<div className="container">
			<div className="video-display">
				<VideoTeachingDisplay
					caption={lesson.caption}
					video={lesson.video}
					id={lesson._id}></VideoTeachingDisplay>
			</div>
			<div>
				<DiscussionThreads lessonId={id}/>
			</div>
		</div>
	);

};

export default TeachingContainer;
