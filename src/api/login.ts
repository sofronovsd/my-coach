const BASE_URL = 'http://localhost:3001/api/v1'

export const login = (login: string, password: string) => {
	fetch(`${BASE_URL}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': "application/json",
		},
		body: JSON.stringify({
			login,
			password,
		})
	})
		.then((res) => {
			console.log({res});
		})
}
