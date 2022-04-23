import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1'

export const login = async (login: string, password: string) => {
	let data = JSON.stringify({
		login,
		password,
	})
	
	return axios.post<{ token: string }>(`${BASE_URL}/login`, data,{
		headers: {
			"Content-Type" : "application/json",
		}
	});
}
