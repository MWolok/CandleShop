import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BrnadLogo from "./BrnadLogo";

export default function Header() {
	return (
		<>
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="#home">
						<BrnadLogo></BrnadLogo>
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<div className="img">
				<img src="https://cdn.thewirecutter.com/wp-content/media/2021/08/scentedcandles-2048px-0S1A9970-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=2" alt="Table full of candles" />
			</div>
		</>
	);
}
