import React, {useState} from 'react';
import ThreadReply from './ThreadReply';

function ThreadCard( thread ) {

	const [showReplyForm, setShowReplyForm] = useState(false)
	const [formData, setFormData] = useState({ 
		thread: "",
	})

	const handleChange = (e) => {
		let key = e.target.name
        let value = e.target.value
        setFormData({...formData, [key]: value})
	}

	function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:8080/threads", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            setThreads(current => [data, ...current])
            setFormData({
                name: "",
                address: ""
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
				{thread.thread.user}: <br/>
				{thread.thread.content}
				<div>
					<button className="buttons" onClick={handleReply}>{'Edit'}</button>
					<button className="buttons" onClick={handleReply}>{'Reply'}</button>
				</div>
			</div>
			<div>
				{showReplyForm ? 
					<form onSubmit={handleSubmit}>
					<label>{'Discussion: '}
						<input 
							name="thread" 
							type="text" 
							value={formData.thread} 
							onChange={handleChange} 
							placeholder="Create thread..." required>
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
