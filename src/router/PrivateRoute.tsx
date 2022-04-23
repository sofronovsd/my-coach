import getToken from '../utils/getToken';
import {
	Navigate,
	useLocation,
} from 'react-router-dom';

type PrivateRouteProps = {
	children: JSX.Element,
}

const PrivateRoute = (props: PrivateRouteProps) => {
	const {
		children,
	} = props;
	
	const token = getToken();
	const location = useLocation();
	return token ? children : <Navigate replace to="/login" state={{ from: location }} />
};

export default PrivateRoute;
