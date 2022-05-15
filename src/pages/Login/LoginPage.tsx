import {
	useCallback,
	useState,
} from 'react';
import {
	useLocation,
	useNavigate,
} from 'react-router-dom';

import {
	login,
	signUp,
} from '../../api/login';
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
	
	const handleSignUp = useCallback(() => {
		if (username && password) {
			signUp(username, password)
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
					<div className="flex justify-between">
						<Button
							onClick={handleLogin}
							rounded
							className="mr-2"
						>
							Login
						</Button>
						<Button
							onClick={handleSignUp}
							rounded
						>
							Sign Up
						</Button>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default LoginPage;
