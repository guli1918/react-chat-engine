import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import Topbar from './components/Topbar';

function App() {
	if (!localStorage.getItem('username')) return <LoginForm />;
	return (
		<div className='App'>
			<Topbar />
			<ChatEngine
				height='100vh'
				projectID='5b6638c9-d284-4670-9035-047dc463755a'
				userName={localStorage.getItem('username')}
				userSecret={localStorage.getItem('password')}
			/>
		</div>
	);
}

export default App;
