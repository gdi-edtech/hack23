import React from 'react';
import ThreadReply from './ThreadReply';
import "../stylesheets/ThreadCard.scss";


function ThreadCard( thread ) {

	const handleReply = () => {
		console.log('replying!')
	}

	const threadReplies = thread.thread.replies
	const displayThreads= threadReplies.map((reply) => <ThreadReply reply={reply} handleReply={handleReply}/>)

	return (
		<>
			<div className={'card'}>
				{thread.thread.user}: <br/>
				{thread.thread.content}
				<button onClick={handleReply}>{'Reply'}</button>
			</div>
			<div>
				{displayThreads}
			</div>
		</>
	);

};

export default ThreadCard;
