import Card from '../../components/card';
import {
	useCallback,
	useState,
} from 'react';
import { login } from '../../api/login';
import { getDashboard } from '../../api/dashboard';

const LoginPage = () => {
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
					localStorage.setItem("access-token", token);
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
			<h1 className="text-3xl font-bold underline">
				Login page
			</h1>
			<div className="flex justify-center items-center flex-grow">
				<Card>
					<h1>Login form</h1>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						type="submit"
						onClick={handleLogin}
					>
						login
					</button>
					<button
						type="submit"
						onClick={handleFetchDashboard}
					>
						getDashboard
					</button>
				</Card>
			</div>
		</div>
  );
};

export default LoginPage;
