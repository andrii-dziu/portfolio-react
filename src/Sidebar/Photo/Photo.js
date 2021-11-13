import React from 'react';
import photo from './../../images/photo.jpg'
function Photo() {
	return (  
		<>
			<div className="logo-photo">
				<img src={photo} className="logo" alt="Andrii Dziura" />
			</div>
			<div className="name">
				<h4><a href="/">Andrii Dziura</a></h4>
				<span>Developer in Ukraine</span>
			</div>
		</>		
	 )
}

export default Photo;