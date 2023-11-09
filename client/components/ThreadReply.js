import React from 'react';
import "../stylesheets/Reply.scss";

function ThreadCard( reply ) {

	return (
		<div className="reply">
			{reply.reply.content}
		</div>
	);

};

export default ThreadCard;
