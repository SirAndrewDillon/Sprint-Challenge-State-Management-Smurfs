import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSmurfs } from '../store/actions'

export default function DisplaySmurfs() {
	const smurfs = useSelector(state => state.smurfs)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getSmurfs())
	}, [smurfs])

	return <div>Hello</div>
}
