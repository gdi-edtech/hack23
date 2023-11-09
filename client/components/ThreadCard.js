import React from 'react';
import ThreadReply from './ThreadReply';
import "../stylesheets/ThreadCard.scss";


function ThreadCard( thread ) {

	const threadReplies = thread.thread.replies
	const displayThreads= threadReplies.map((reply) => <ThreadReply reply={reply}/>)

	return (
		<>
			<div className={'card'}>
				{thread.thread.content}
			</div>
			<div>
				{displayThreads}
			</div>
		</>
	);

};

export default ThreadCard;
