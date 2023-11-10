import React from 'react';

function ThreadCard( reply ) {

	const handleReply = () => {
		console.log('replying!')
	}

	return (
		<div className="reply">
			{reply.reply.user}: <br/>
			{reply.reply.content}
				<div>
					<button className="buttons" onClick={handleReply}>{'Edit'}</button>
					<button className="buttons" onClick={handleReply}>{'Reply'}</button>
				</div>
		</div>
	);

};

export default ThreadCard;
