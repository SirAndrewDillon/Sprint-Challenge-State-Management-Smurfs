import {
	FETCH_SMURFS_START,
	FETCH_SMURFS_SUCCESS,
	FETCH_SMURFS_FAILURE
} from '../actions/'

const initialState = {
	error: '',
	isFetching: false,
	smurfs: []
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_SMURFS_START:
			console.log('In FETCH_START!')
			return state
		case FETCH_SMURFS_START:
			console.log('In FETCH_SUCCESS!')
			return state
		case FETCH_SMURFS_START:
			console.log('In FETCH_FAILURE!')
			return state
		default:
			return state
	}
}

export default reducer
