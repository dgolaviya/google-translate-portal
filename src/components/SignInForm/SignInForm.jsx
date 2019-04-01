import React, { Component } from 'react'
import { Formik } from 'formik';
import { Row, Container, Button, Form } from 'react-bootstrap';
class SignInForm extends Component {
	state = {
		user: {
			email: 'test@123.com',
			password: 123,
			check: true
		}
	}
	render() {
		return (
			<Formik
				initialValues={
					this.state.user
				}
			>
				{({ values, handleChange }) => {
					return (
						<Container>
							<Row className="justify-content-center mt-20">
								<Form>
									<Form.Group controlId="formBasicEmail">
										<Form.Label>Email address</Form.Label>
										<Form.Control onChange={handleChange} value={values.email} name="email" type="email" placeholder="Enter email" />
										<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
									</Form.Group>

									<Form.Group controlId="formBasicPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control onChange={handleChange} value={values.password} name="password" type="password" placeholder="Password" />
									</Form.Group>
									<Form.Group controlId="formBasicChecbox">
										<Form.Check onChange={handleChange} checked={values.check} name="check" type="checkbox" label="Check me out" />
									</Form.Group>
									<Button variant="primary" type="submit">Submit</Button>
								</Form>
							</Row>
						</Container>
					)
				}}
			</Formik>
		)
	}
}

export default SignInForm;
