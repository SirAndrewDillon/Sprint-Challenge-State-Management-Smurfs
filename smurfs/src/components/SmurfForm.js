import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

import { Button, Form, Input } from 'semantic-ui-react'

const RegisterSchema = Yup.object().shape({
	name: Yup.string(),
	age: Yup.number(),
	height: Yup.string()
})

const SmurfForm = ({ addSmurf, editSmurf, updatingSmurf }) => {
	return (
		<div>
			<Formik
				initialValues={{
					name: '',
					age: 0,
					height: ''
				}}
				/* validationSchema={RegisterSchema} */
				onSubmit={(values, actions) => {
					actions.setSubmitting(true)
					updatingSmurf ? editSmurf(values) : addSmurf(values)
					actions.resetForm()
				}}
				render={({
					touched,
					errors,
					handleSubmit,
					handleChange,
					handleBlur
				}) => {
					return (
						<Form
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center'
							}}
							onSubmit={handleSubmit}
						>
							<Form.Field
								label="Name"
								control={Input}
								type="text"
								name="name"
								autoComplete="off"
								placeholder="Name"
								onChange={handleChange}
								onBlur={handleBlur}
								className={errors.name ? 'invalid_input' : ''}
								width="5"
							/>
							{errors.name && touched.name ? (
								<p style={{ marginBottom: '20px', color: 'red' }}>
									{errors.name}
								</p>
							) : null}

							<Form.Field
								label="Age"
								control={Input}
								type="number"
								name="age"
								autoComplete="off"
								placeholder="Age"
								onChange={handleChange}
								onBlur={handleBlur}
								className={errors.age ? 'invalid_input' : ''}
								width="5"
							/>
							{errors.age && touched.age ? (
								<p style={{ marginBottom: '20px', color: 'red' }}>
									{errors.age}
								</p>
							) : null}

							<Form.Field
								label="Height"
								control={Input}
								type="text"
								name="height"
								autoComplete="off"
								placeholder="Height"
								onChange={handleChange}
								onBlur={handleBlur}
								className={errors.height ? 'invalid_input' : ''}
								width="5"
							/>
							{errors.height && touched.height ? (
								<p style={{ marginBottom: '20px', color: 'red' }}>
									{errors.height}
								</p>
							) : null}

							<Button type="submit" color="blue">
								Submit&rarr;
							</Button>
							{/* {isSubmitting && "Loading!"} */}
						</Form>
					)
				}}
			/>
		</div>
	)
}

export default SmurfForm
