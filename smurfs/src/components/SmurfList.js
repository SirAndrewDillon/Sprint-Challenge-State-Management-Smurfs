import React, { useEffect } from 'react'

import Smurf from './Smurf'

const SmurfsList = ({ smurfs, deleteSmurf, setSmurfInfo, setIsEditing }) => {
	console.log(smurfs)
	if (smurfs) {
		return (
			<div>
				{/* <h1 className="header-text">Welcome To The Jungle</h1> */}
				{smurfs.map(smurf => (
					<Smurf
						setIsEditing={setIsEditing}
						setSmurfInfo={setSmurfInfo}
						deleteSmurf={deleteSmurf}
						smurf={smurf}
					/>
				))}
			</div>
		)
	} else {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		)
	}
}

export default SmurfsList
