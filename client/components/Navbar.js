import React from "react";
import { Link, Outlet } from "react-router-dom";

import "../stylesheets/NavBar.scss";

const NavBar = () => {

  return (

    <>

    	<div className="navbar">

			<div className="navbar-logo">

				{/* TODO add logo */}
				{/* <Link to="/">
					<img
					className="navbar-logo"
					src="https://res.cloudinary.com/dsioshcio/image/upload/v1699583151/image_5_hpfwic.png"
					alt="logo"
					></img>
				</Link> */}

			</div>

			<div className="navbar-links">

				<Link
				to="/"
				className="navbar-links">
					Home
				</Link>

				<Link
				to="/about"
				className="navbar-links">
					About
				</Link>

				{/* TODO add authentication */}
				<Link
				to="/"
				className="navbar-links">
					Login/Sign up
				</Link>
			
			</div>
		
    	</div>

   		<Outlet />

	</>

  );

};

export default NavBar;
