import axios from 'axios';
import { useState } from 'react';

function LoginForm() {
	const [user, setUser] = useState({
		username: '',
		password: '',
		error: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		const authObject = {
			'Project-ID': '5b6638c9-d284-4670-9035-047dc463755a',
			'User-Name': username,
			'User-Secret': password,
		};

		try {
			await axios.get('https://api.chatengine.io/chats', { headers: authObject });
			localStorage.setItem('username', username);
			localStorage.setItem('password', password);
			window.location.reload();
			setUser({ error: '' });
		} catch (error) {
			setUser({ ...user, error: 'Incorrect Credentials' });
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};
	const { username, password, error } = user;

	return (
		<div className='wrapper'>
			{console.log(user)}
			<div className='form'>
				<h1 className='title'>Chat Application</h1>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						value={username}
						name='username'
						placeholder='Username'
						className='input'
						onChange={handleChange}
						required
					/>
					<input
						type='password'
						value={password}
						name='password'
						placeholder='Password'
						className='input'
						onChange={handleChange}
						required
					/>
					<div align='center'>
						<button type='submit' className='button'>
							<span>Start Chatting</span>
						</button>
					</div>
					<h2 className='error'>{error}</h2>
				</form>
			</div>
		</div>
	);
}

export default LoginForm;
