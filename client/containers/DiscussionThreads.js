import React, {useState, useEffect} from 'react';
import ThreadCard from '../components/ThreadCard';

function DiscussionThreads( lessonId ) {

	const [threads, setThreads] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {

		// Reset the state...
		setLoading(true);
		setThreads([]);

		// Fetch threads
		const config = {
			params: {
				scope: lessonId,
			},
		};

		axiosClient.get('/threads', config).then(({ data }) => {

			setThreads(data);
			setLoadingInitial(false);

		}).catch((error) => {

			console.error(error);

		});

	}, [lessonId]);

	const threadCards = threads.map((thread) => <ThreadCard thread={thread.id} />)

	return (
		<div>
			{threads}
		</div>
	);

};

export default DiscussionThreads;
