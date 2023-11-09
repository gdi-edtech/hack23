import React, {useState, useEffect} from 'react';
import ThreadCard from '../components/ThreadCard';

function DiscussionThreads( lessonId ) {

	const fakeThreads = [
		{
			id: 123,
			user: 'Lisa',
			content: 'Test thread one',
			replies: [
				{
					id: 246,
					user: 'Jay',
					content: 'Test reply one',
				},
				{
					id: 122,
					user: 'Bey',
					content: 'Test reply two',
				}
			]
		},
		{
			id: 456,
			user: 'Mark',
			content: 'Test thread two',
			replies: [
				{
					id: 789,
					user: 'Jay',
					content: 'Test reply three',
				},
				{
					id: 135,
					user: 'Bey',
					content: 'Test reply four',
				}
			]
			
		}
	]
	const [threads, setThreads] = useState(fakeThreads);
	const [isLoading, setIsLoading] = useState(false);

	

	useEffect(() => {

		// Reset the state...
		// setIsLoading(true);
		setThreads(fakeThreads);

		// Fetch threads
		// const config = {
		// 	params: {
		// 		lessonId: lessonId,
		// 		// sort: 'timestamp', ?
		// 	},
		// };

		// axiosClient.get('/threads', config).then(({ data }) => {

		// 	setThreads(data);
		// 	setLoadingInitial(false);

		// }).catch((error) => {

		// 	console.error(error);

		// });

	}, [lessonId]);

	const threadCards = fakeThreads.map((thread) => <ThreadCard thread={thread} />)

	// const loadingIcon = <i
	// 	aria-hidden="true"
	// 	className="ml-2 fas fa-circle-notch fa-spin" />

	return (
		<div>
			{/* {isLoading ? loadingIcon : threadCards} */}
			{threadCards}
		</div>
	);

};

export default DiscussionThreads;
