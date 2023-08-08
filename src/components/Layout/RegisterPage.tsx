import React from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function RegisterPage() {
	return (
		<>
			<Container>
				
				<Form>
					<Form.Group controlId="username">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" name="username" required />
					</Form.Group>

					<Form.Group controlId="email">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" name="email" required />
					</Form.Group>

					<Form.Group controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" name="password" required />
					</Form.Group>

					<Form.Group controlId="confirmPassword">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type="password"
							name="confirmPassword"
							value={""}
							required
						/>
					</Form.Group>

					<Button  variant="primary" type="submit">
						Register
					</Button>
				</Form>
			</Container>
		</>
	);
}
