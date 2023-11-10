import Navbar from "../components/Navbar";

import React from 'react';

function AboutPage() {

	return (
		<>

		<div>
			<h1>{'Sodoto'}</h1>
			<p>
				{'Here at Sodoto we know that true mastery of a subject comes with that ability to teach that skill to others. Based on the “see one, do one, teach one” philosophy, we strive to be a platform where learners of all types can both teach and learn from each other.'}
			</p> 
			<p>
				<h2>{'How It Works'}</h2>
				<h3>{'If you are here to learn…'}</h3>
				<li>
					<ul>
						{'Search by topic on the home page. Find a subject that interests you and click to view a teaching demonstration.'}
					</ul>
					<ul>
						{'View the teaching video or read through the teaching content. Be sure to leave feedback or ask question in the comments!'}
					</ul>
				</li>
				<h3>{'If you are here to reinforce your own learning by teaching it to others...'}</h3>
				<li>
					<ul>
						{'Click “Create New Teaching Demonstration” on the home page.'}
					</ul>

					<ul>
						{'Add your content by uploading or linking a video or creating a blog-style text description of your content.'}
					</ul>
					<ul>
						{'Be on the look out for questions and feedback in the comments! Help viewers learn by answering their questions and continued teaching through discussion.'}
					</ul>
				</li>


			</p>
		</div>
		</>
	);

};

export default AboutPage;
