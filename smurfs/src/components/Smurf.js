import React, { useState } from 'react'

const Smurf = ({ smurf, deleteSmurf }) => {
	// const populateForm = smurf => {
	//   setSmurfInfo(smurf);
	//   setIsEditing(true);
	// };
	console.log(smurf)
	return (
		<div>
			<h3>{smurf.name}</h3>
			<h4>Age: {smurf.age}</h4>
			<h4>Height: {smurf.height}</h4>
			<button
				onClick={() => {
					deleteSmurf(smurf.id)
					{
						/* setIsEditing(false); */
					}
				}}
			>
				Delete
			</button>
			{/* <button onClick={() => populateForm(smurf)}>Edit</button> */}
		</div>
	)
}

export default Smurf
