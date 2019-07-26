import {
	FETCH_SMURFS_START,
	FETCH_SMURFS_SUCCESS,
	ADD_SMURF_START,
	ADD_SMURF_SUCCESS,
	DELETE_SMURF_START,
	DELETE_SMURF_SUCCESS,
	EDIT_SMURF_START,
	EDIT_SMURF_SUCCESS
} from '../actions'

const initialState = {
	smurfs: [],
	fetchingSmurfs: false,
	isLoading: false,
	addingSmurf: false,
	updatingSmurf: false,
	deletingSmurf: false,
	error: ''
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SMURFS_START:
			return {
				...state,
				fetchingSmurfs: true,
				isLoading: true,
				error: '',
				smurfs: []
			}
		case FETCH_SMURFS_SUCCESS:
			return {
				...state,
				fetchingSmurfs: false,
				error: '',
				smurfs: action.payload
			}
		case ADD_SMURF_START:
			return {
				...state,
				fetchingSmurfs: false,
				isLoading: true,
				addingSmurf: true,
				updatingSmurf: false,
				deletingSmurf: false,
				error: ''
			}
		case ADD_SMURF_SUCCESS:
			return {
				...state,
				fetchingSmurfs: false,
				isLoading: false,
				addingSmurf: false,
				updatingSmurf: false,
				deletingSmurf: false,
				error: '',
				smurfs: action.payload
			}
		case DELETE_SMURF_START:
			return {
				...state,
				fetchingSmurfs: false,
				isLoading: true,
				addingSmurf: false,
				updatingSmurf: false,
				deletingSmurf: true,
				error: ''
			}
		case DELETE_SMURF_SUCCESS:
			return {
				...state,
				fetchingSmurfs: false,
				isLoading: false,
				addingSmurf: false,
				updatingSmurf: false,
				deletingSmurf: false,
				error: '',
				smurfs: action.payload
			}
		case EDIT_SMURF_START:
			return {
				...state,
				fetchingSmurfs: false,
				isLoading: true,
				addingSmurf: false,
				updatingSmurf: true,
				deletingSmurf: false,
				error: ''
			}
		case EDIT_SMURF_SUCCESS:
			return {
				...state,
				fetchingSmurfs: false,
				isLoading: false,
				addingSmurf: false,
				updatingSmurf: false,
				deletingSmurf: false,
				error: '',
				smurfs: action.payload
			}
		default:
			return state
	}
}
