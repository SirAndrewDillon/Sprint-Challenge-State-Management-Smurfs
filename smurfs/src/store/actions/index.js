import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";

export const fetchSmurfs = () => dispatch => {
	dispatch({ type: FETCH_SMURFS_START });

	axios
		.get("http://localhost:3333/smurfs")
		.then(res => {
			console.log(res);
			dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err);
		});
};

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";

export const addSmurf = values => dispatch => {
	console.log(values);
	dispatch({ type: ADD_SMURF_START });

	axios
		.post("http://localhost:3333/smurfs", values)
		.then(res => {
			console.log(res);
			dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
		})
		.catch(err => console.log(err));
};

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";

export const deleteSmurf = id => dispatch => {
	console.log(id);
	dispatch({ type: DELETE_SMURF_START });

	axios
		.delete(`http://localhost:3333/smurfs/${id}`)
		.then(res => {
			console.log(res);
			dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data });
		})
		.catch(err => console.log(err));
};

export const EDIT_SMURF_START = "EDIT_SMURF_START";
export const EDIT_SMURF_SUCCESS = "EDIT_SMURF_SUCCESS";

export const editSmurf = (id, values) => dispatch => {
	dispatch({ type: EDIT_SMURF_START });

	axios
		.put(`http://localhost:3333/smurfs/${id}`, values)
		.then(res => {
			console.log(res);
			dispatch({ type: EDIT_SMURF_SUCCESS, payload: res.data });
		})
		.catch(err => console.log(err));
};
