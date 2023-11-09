import React from 'react';
import ThreadReply from './ThreadReply';


function ThreadCard( thread ) {

	const threadReplies = thread.replies.map((reply) => <ThreadReply reply={reply.id}/>)

	return (
		<div>
			{thread.content}
			{replies}
		</div>
	);

};

export default ThreadCard;
