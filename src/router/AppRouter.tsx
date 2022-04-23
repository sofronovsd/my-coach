import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import DashboardPage from '../pages/Dashboard';

type AppRouterProps = {
	children: JSX.Element | JSX.Element[];
}

const AppRouter = (props: AppRouterProps) => {
	const {
		children,
	} = props;
	
	return (
		<BrowserRouter>
			{children}
			<Routes>
				<Route path="/home" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route
					path="/dashboard"
					element={
						<PrivateRoute>
							<DashboardPage />
						</PrivateRoute>
					}
				/>
				<Route path="/*" element={<Navigate replace to="/home" />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
