import React, {useState, useEffect} from 'react';
import ThreadCard from '../components/ThreadCard';
import "../stylesheets/DiscussionThreads.scss";

function DiscussionThreads( lessonId ) {

	const fakeThreads = [
		{
			id: 123,
			user: 'Lisa',
			content: 'Test thread one',
			replies: [
				{
					id: 246,
					user: 'Jay',
					content: 'Test reply one',
				},
				{
					id: 122,
					user: 'Bey',
					content: 'Test reply two',
				}
			]
		},
		{
			id: 456,
			user: 'Mark',
			content: 'Test thread two',
			replies: [
				{
					id: 789,
					user: 'Jay',
					content: 'Test reply three',
				},
				{
					id: 135,
					user: 'Bey',
					content: 'Test reply four',
				}
			]
			
		}
	]
	const [threads, setThreads] = useState(fakeThreads);
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
	

	useEffect(() => {

		// Fetch threads
			// fetch("http://localhost:8080/api/threads/?lessonId=${lessonId}")
			// .then((resp) => resp.json())
			// .then(setThreads)

	}, [lessonId]);

	const threadCards = fakeThreads.map((thread) => <ThreadCard thread={thread} key={thread.id} />)
	
	return (
		<div className="thread-container">
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
        	</form>
			{threadCards}
		</div>
	);

};

export default DiscussionThreads;
