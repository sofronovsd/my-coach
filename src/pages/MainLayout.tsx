import {
	Link,
	Outlet,
	useNavigate,
} from 'react-router-dom';
import { useCallback } from 'react';
import getToken from '../utils/getToken';
import { logout } from '../services/authorization';

const MainLayout = () => {
	const navigate = useNavigate();
	const token = getToken();
	
	const handleOnLogOut = useCallback(() => {
		logout();
		navigate('/home');
	}, [])
	
	return (
		<div className="pl-5 pr-5 h-screen flex flex-col">
			<ul className="flex p-1">
				<li className="p-1">
					<Link to="/home">Home</Link>
				</li>
				<li className="p-1">
					<Link to="/login">Login</Link>
				</li>
				<li className="p-1">
					<Link to="/dashboard">Dashboard</Link>
				</li>
				{token && (
					<button
						type="button"
						onClick={handleOnLogOut}
						className="border-2 border-black"
					>
						log out
					</button>
				)}
			</ul>
			<Outlet />
		</div>
	);
};

export default MainLayout;
