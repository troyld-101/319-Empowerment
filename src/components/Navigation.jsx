import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Navigation = () => {
	return (
		<Nav className="ms-auto align-items-center">
			{/* We use href with the # symbol to target the IDs in your components */}
			<Nav.Link href="#about" className="fw-semibold px-3 text-dark">
				About
			</Nav.Link>
			<Nav.Link href="#programs" className="fw-semibold px-3 text-dark">
				Services
			</Nav.Link>
			<Nav.Link href="#team" className="fw-semibold px-3 text-dark">
				Team
			</Nav.Link>

			<Nav.Link href="#contact" className="ms-lg-3 mt-3 mt-lg-0">
				<Button
					variant="warning"
					className="fw-bold px-4 shadow-sm"
					style={{ color: "#0a192f" }}
				>
					Contact Us
				</Button>
			</Nav.Link>
		</Nav>
	);
};

export default Navigation;
