import React from 'react';

function TeachingContainer() {

	return (
		<div>
			{/* teaching content component here */}
			<form method='POST' action="/knowledge/form" enctype="multipart/form-data">   
   				<input type="file" name="img" />   
   				<button>Upload</button> 
			</form>
			{/* discussion thread component here */}
		</div>
	);

};

export default TeachingContainer;
