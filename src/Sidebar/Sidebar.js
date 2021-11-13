import React from 'react';
import Menu from './Menu/Menu';
import Photo from './Photo/Photo';

function Sidebar() {	
	return (
		<div className='sidebar'> 
			<Photo/>
			<Menu/>
		</div>
	)
}

export default Sidebar;