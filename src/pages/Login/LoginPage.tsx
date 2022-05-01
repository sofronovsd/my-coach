import {
	useCallback,
	useState,
} from 'react';
import {
	useLocation,
	useNavigate,
} from 'react-router-dom';

import { login } from '../../api/login';
import { getDashboard } from '../../api/dashboard';
import Card from '../../components/card';
import Button from '../../ui/Button';
import TextInput from '../../ui/TextInput';

const LoginPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const locationState = location.state as {
		from: {
			pathname: string;
		}
	};
	const from = locationState?.from?.pathname || '/';
	
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	
	const handleLogin = useCallback(() => {
		if (username && password) {
			login(username, password)
				.then(res => {
					const {
						data,
					} = res;
					const {
						token,
					} = data;
					localStorage.setItem('access-token', token);
					navigate(from, { replace: true });
				});
		}
	}, [username, password]);
	
	const handleFetchDashboard = useCallback(() => {
		getDashboard()
			.then(res => {
			});
	}, []);
	
	return (
		<div className="flex flex-col flex-grow flex-grow">
			<h1 className="text-3xl font-bold underline text-stone-400">
				Login page
			</h1>
			<div className="flex justify-center items-center flex-grow">
				<Card>
					<h1 className="text-sea font-bold mb-2">
						Login form
					</h1>
					<TextInput
						className="mb-2"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						rounded
					/>
					<TextInput
						className="mb-2"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						rounded
					/>
					<Button
						onClick={handleLogin}
						rounded
					>
						Login
					</Button>
				</Card>
			</div>
		</div>
	);
};

export default LoginPage;
