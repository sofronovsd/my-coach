import {
	Link,
	Outlet,
	useNavigate,
} from 'react-router-dom';
import { useCallback } from 'react';
import getToken from '../utils/getToken';
import { logout } from '../services/authorization';
import Button from '../ui/Button';

const MainLayout = () => {
	const navigate = useNavigate();
	const token = getToken();
	
	const handleOnLogOut = useCallback(() => {
		logout();
		navigate('/home');
	}, []);
	
	return (
		<div className="pl-5 pr-5 h-screen flex flex-col bg-sea">
			<ul className="flex mt-3 mb-3">
				<li className="mr-2 text-stone-400">
					<Link to="/home">Home</Link>
				</li>
				<li className="text-stone-400">
					<Link to="/dashboard">Dashboard</Link>
				</li>
				{token ? (
					<Button
						onClick={handleOnLogOut}
						className="ml-2 !p-0 border-none w-fit"
						color="secondary"
					>
						Log out
					</Button>
				) : (
					<li className="ml-2 text-amber-700">
						<Link to="/login">Login</Link>
					</li>
				)}
			</ul>
			<Outlet />
		</div>
	);
};

export default MainLayout;
