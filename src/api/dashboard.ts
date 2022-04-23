import axios from "axios"
import getTokenHeader from '../utils/getTokenHeader';

const BASE_URL = 'http://localhost:3001/api/v1'

export const getDashboard = () => {
	return axios.get(`${BASE_URL}/dashboard`, {
		headers: {
			"Content-Type" : "application/json",
			...getTokenHeader(),
		},
	})
}
