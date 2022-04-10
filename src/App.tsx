import { Link } from 'react-router-dom';
import AppRouter from './router';

const App = () => {
	return (
		<div className="pl-5 pr-5 h-screen flex flex-col">
			<AppRouter>
				<ul className="flex p-1">
					<li className="p-1">
						<Link to="/">Home</Link>
					</li>
					<li className="p-1">
						<Link to="/login">Login</Link>
					</li>
				</ul>
			</AppRouter>
		</div>
	);
};

export default App;
