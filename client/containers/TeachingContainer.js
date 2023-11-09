import React from 'react';
import DiscussionThreads from './DiscussionThreads';

function TeachingContainer( lessonId ) {

	return (
		<div>
			{/* teaching content component here */}
			<DiscussionThreads lessonId={lessonId}/>
		</div>
	);

};

export default TeachingContainer;
