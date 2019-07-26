import axios from 'axios'

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'

export const getSmurfs = () => dispatch => {
	console.log('In action!')
	dispatch({ type: FETCH_SMURFS_START })
	axios
		.get('http://localhost:3333/smurfs')
		.then(res => {
			console.log(res.data)
		})
		.catch(err => {
			console.log(err)
		})
}
