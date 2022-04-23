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
import MainLayout from '../pages/MainLayout';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
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
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
