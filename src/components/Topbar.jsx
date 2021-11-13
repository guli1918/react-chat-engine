import { LogoutOutlined } from '@ant-design/icons';
import React from 'react';

function Topbar() {
	return (
		<div className='topbar'>
			<LogoutOutlined
				onClick={() => {
					localStorage.removeItem('username');
					localStorage.removeItem('password');
					window.location.reload();
				}}
				className='topbar-logout'
			/>
		</div>
	);
}

export default Topbar;
