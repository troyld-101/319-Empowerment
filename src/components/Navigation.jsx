import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Modal } from "react-bootstrap";
import EnrollmentPDF from "../Assets/Enrollment.PDF"; // Make sure your path matches!

const Navigation = () => {
	// State to control the Donate popup visibility
	const [showDonate, setShowDonate] = useState(false);

	const handleClose = () => setShowDonate(false);
	const handleShow = () => setShowDonate(true);

	return (
		<>
			<Navbar bg="light" expand="lg" className="shadow-sm sticky-top py-3">
				<Container>
					<Navbar.Brand
						href="#home"
						className="fw-bold fs-4"
						style={{ color: "#0a192f" }}
					>
						319 EMPOWERMENT
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto align-items-center">
							<Nav.Link href="./#about" className="fw-semibold px-3 text-dark">
								About
							</Nav.Link>
							<Nav.Link
								href="./#programs"
								className="fw-semibold px-3 text-dark"
							>
								Services
							</Nav.Link>
							<Nav.Link href="./#team" className="fw-semibold px-3 text-dark">
								Team
							</Nav.Link>
							<Nav.Link
								href="./#contact"
								className="fw-semibold px-3 text-dark"
							>
								Contact
							</Nav.Link>

							{/* Enrollment Button */}
							<Nav.Link
								href={EnrollmentPDF}
								target="_blank"
								rel="noreferrer"
								className="ms-lg-3 mt-3 mt-lg-0 p-0"
							>
								<Button
									variant="warning"
									className="fw-bold px-4 shadow-sm"
									style={{ color: "#0a192f", borderRadius: "25px" }}
								>
									Enroll Now
								</Button>
							</Nav.Link>

							{/* Donate Button triggering the Modal */}
							<Nav.Link className="mt-3 mt-lg-0 p-lg-0 ms-lg-3">
								<Button
									variant="success"
									onClick={handleShow}
									className="fw-bold px-4 shadow-sm"
									style={{ borderRadius: "25px" }}
								>
									Donate
								</Button>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			{/* The Donate Popup Modal */}
			<Modal show={showDonate} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title className="fw-bold" style={{ color: "#0a192f" }}>
						Support Our Mission
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p className="text-muted">
						You have the power to make a lasting impact. 319 Empowerment is a{" "}
						<strong>501(c)(3) nonprofit</strong> created to provide a safe space
						and vital resources for teens after school.
					</p>
					<hr />

					<div className="mb-4">
						<h6 className="fw-bold text-success mb-2">Cash App</h6>
						<Button
							variant="outline-success"
							href="https://cash.app/$Empowerment319"
							target="_blank"
							rel="noreferrer"
							className="fw-bold px-4"
						>
							Donate via Cash App
						</Button>
					</div>

					<div className="mb-4">
						<h6 className="fw-bold mb-1" style={{ color: "#0a192f" }}>
							Veridian Credit Union
						</h6>
						<p className="mb-0">
							Account Name: <strong>319Empowerment Corp</strong>
						</p>
					</div>

					<div>
						<h6 className="fw-bold mb-1" style={{ color: "#0a192f" }}>
							By Mail
						</h6>
						<p className="mb-0">
							919 West 4th St
							<br />
							Waterloo, IA 50702
						</p>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Navigation;
