import Navbar from "../components/Navbar";
import React from 'react';
import { Link, Outlet } from "react-router-dom";

function About() {

	return (
		<>

<div className="about-section">
			<img
              className="logo-nav-bar"
              src="https://res.cloudinary.com/dsioshcio/image/upload/v1699583151/image_5_hpfwic.png"
              alt="logo"
            ></img>
  <p>Here at Sodoto we know that true mastery of a subject comes with that ability to teach that skill to others. Based on the “see one, do one, teach one” philosophy, we strive to be a platform where learners of all types can both teach and learn from each other.</p>
</div>

{/* <h1 style="text-align:center">Our Team</h1> */}
<div className="row">
  <div className="column">
    <div className="card">
		{/* <img
            style="width:100%"
            src="https://res.cloudinary.com/dsioshcio/image/upload/v1699583151/image_5_hpfwic.png"
            alt="GDI2023Member"
        ></img> */}
      <div className="container">
        <h2>How It Works</h2>
        <p className="title">If you are here to learn…</p>
        <p>
			<ul>
				<li>
					{'Search by topic on the home page. Find a subject that interests you and click to view a teaching demonstration.'}
				</li> 
				<li>
					{'View the teaching video or read through the teaching content. Be sure to leave feedback or ask question in the comments!'}
				</li>
			</ul>	
			<p>
				<Link to="/learn">
					<button className="button">Start learning</button>
				</Link>
			</p>
		</p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
	{/* <img
            style="width:100%"
            src="https://res.cloudinary.com/dsioshcio/image/upload/v1699583151/image_5_hpfwic.png"
            alt="GDI2023Member"
        ></img>       */}
		<div className="container">
        <h2>How it works</h2>
        <p class="title">If you are here to reinforce your own learning by teaching it to others...</p>
		<ul>
					<li>
						{'Click “Create New Teaching Demonstration” on the home page.'}
					</li>

					<li>
						{'Add your content by uploading or linking a video or creating a blog-style text description of your content.'}
					</li>
					<li>
						{'Be on the look out for questions and feedback in the comments! Help viewers learn by answering their questions and continued teaching through discussion.'}
					</li>
				</ul>
        <p>
			<Link to="/create-video-lesson">
			<button className="button">Start teaching</button>
			</Link>
		
		</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
	{/* <img
            style="width:100%"
            src="https://res.cloudinary.com/dsioshcio/image/upload/v1699583151/image_5_hpfwic.png"
            alt="GDI2023Member"
        ></img>       */}
		<div class="container">
        <h2>How it works</h2>
        <p class="title">If you are here to share you thoughts</p>
        <p>Share on the comments and exchange thoughts with others </p>
        <p>
		<Link to="/singlelesson">

		<button class="button">Start sharing</button>
		</Link>

		</p>
      </div>
    </div>
  </div>
</div>
		{/* <div>

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
		</div> */}
		</> 
	);

};

export default About;
