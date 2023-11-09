import React from 'react';
import DiscussionThreads from './DiscussionThreads';

function ThreadCard( reply ) {

	return (
		<div>
			{reply.content}
		</div>
	);

};

export default ThreadCard;
