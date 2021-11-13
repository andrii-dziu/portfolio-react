import React from 'react';

function Menu() {
	return (
		<div className="navbar">
			<ul className="nav flex-column">
				<li className="nav-item">
					<a className="nav-link" href="#home-page">Home</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#about-page">About</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#education-page">Education</a>
				</li>
				<li className="nav-item ">
					<a className="nav-link" href="#skills-page">Skills</a>
				</li>
				<li className="nav-item ">
					<a className="nav-link" href="#contacts-page">Contacts</a>
				</li>
			</ul>
    	</div>
	)
}

export default Menu;