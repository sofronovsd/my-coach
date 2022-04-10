import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';

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
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
