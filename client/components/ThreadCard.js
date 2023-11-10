import React, {useState} from 'react';
import ThreadReply from './ThreadReply';

function ThreadCard( thread, user ) {

	const [showReplyForm, setShowReplyForm] = useState(false)
	const [formData, setFormData] = useState({ 
		content: "",
		user: user,
		thread: thread.id, 
	})

	const handleChange = (e) => {
		let key = e.target.name
        let value = e.target.value
        setFormData({...formData, [key]: value})
	}

	function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3000/api/replies", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            setThreads(current => [data, ...current])
			setShowReplyForm(false)
            setFormData({
                content: "",
            })
        });
    }

	const handleReply = () => {
		setShowReplyForm(true)
	}

	const threadReplies = thread.thread.replies
	const displayThreads= threadReplies.map((reply) => <ThreadReply reply={reply} handleReply={handleReply}  key={reply.id}/>)

	return (
		<>
			<div className={'card'}>
				{thread.thread.user.name}: <br/>
				{thread.thread.content}
				<div>
					<button className="buttons" onClick={handleReply}>{'Edit'}</button>
					<button className="buttons" onClick={handleReply}>{'Reply'}</button>
				</div>
			</div>
			<div>
				{showReplyForm ? 
					<form onSubmit={handleSubmit} className="card">
					<label>{'Reply: '}
						<input 
							name="content" 
							type="text" 
							value={formData.content} 
							onChange={handleChange} 
							placeholder="Reply here..." required>
						</input>
					</label>
					<button className='submit buttons' type="submit">{'Submit'}</button>
					</form> :
					null } 
				{displayThreads}
			</div>
		</>
	);

};

export default ThreadCard;
