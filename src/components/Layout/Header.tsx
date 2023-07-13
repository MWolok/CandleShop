import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BrnadLogo from "./BrnadLogo";
import "./Header.css";
import HeaderButton from "../HeaderButton";

export default function Header() {
	return (
		<>
			<Navbar className="z-3" bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="#home">
						<BrnadLogo></BrnadLogo>
						
					</Navbar.Brand>
					<Nav className="me-auto">
						
						
					</Nav>
				<HeaderButton></HeaderButton>
				</Container>
				
			</Navbar>
			<div className="main-imge">
				<img className="main-image-img"
					src="https://cdn.thewirecutter.com/wp-content/media/2021/08/scentedcandles-2048px-0S1A9970-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=2"
					alt="Table full of candles"
				/>
			</div>
		</>
	);
}
