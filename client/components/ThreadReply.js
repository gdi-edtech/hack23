import React from 'react';
import "../stylesheets/Reply.scss";

function ThreadCard( reply ) {

	const handleReply = () => {
		console.log('replying!')
	}

	return (
		<div className="reply">
			{reply.reply.user}: <br/>
			{reply.reply.content}
			<button onClick={handleReply}>{'Reply'}</button>
		</div>
	);

};

export default ThreadCard;
