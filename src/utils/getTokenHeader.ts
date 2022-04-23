import getToken from './getToken';

const getTokenHeader = () => {
	const accessToken = getToken() || '';
	return {
		'x-access-token': accessToken,
	};
}

export default getTokenHeader;
