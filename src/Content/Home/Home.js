import React from 'react';
import homeImg from './../../images/home.jpeg'
import downloadSvg from './../../images/download.svg'
import cvPdf from './../../files/CV.pdf'


function Home() {
	return (
		<div className="main home" id="home-page">
			<img src={homeImg} className="image-bg" alt="city view"/>
			<div className="desc">
				<h1>Hi!</h1>
				<h1>I'm Andrii</h1><br/>
				<h2>Welcome to my portfolio</h2>
				<a href={cvPdf} download><button type="button" className="btn btn-outline-dark">Download CV <img src={downloadSvg} alt='download'/></button></a>				
			</div>
		</div>
	)
}

export default Home;
