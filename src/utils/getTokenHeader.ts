const getTokenHeader = () => {
	const accessToken = localStorage.getItem("access-token") || '';
	return {
		'x-access-token': accessToken,
	};
}

export default getTokenHeader;
