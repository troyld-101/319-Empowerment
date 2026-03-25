import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
	return (
		<div
			className="py-5"
			style={{ backgroundColor: "#0a192f", color: "white" }}
			id="contact"
		>
			<Container className="py-md-5">
				<div className="text-center mb-5">
					<h2 className="display-5 fw-bold text-white">Get In Touch!</h2>
					<p className="lead" style={{ color: "#c4978a" }}>
						Reach out to learn more, volunteer, or support 319 EMPOWERMENT.
					</p>
				</div>

				<Row className="g-5 justify-content-center">
					{/* Left Column: Contact Information */}
					<Col lg={5}>
						<div className="p-4 bg-white rounded shadow text-dark h-100">
							<h3 className="h4 fw-bold mb-4" style={{ color: "#0a192f" }}>
								Contact Information
							</h3>

							<div className="mb-4">
								<h4 className="h6 fw-bold text-muted text-uppercase mb-1">
									Address
								</h4>
								<p className="fs-5 mb-0">
									919 West 4th St
									<br />
									Waterloo, Iowa 50701
								</p>
							</div>

							<div className="mb-4">
								<h4 className="h6 fw-bold text-muted text-uppercase mb-1">
									Phone
								</h4>
								<p className="fs-5 mb-0">
									(319) 233-1617
									<br />
									(319) 508-3784
								</p>
							</div>

							<div>
								<h4 className="h6 fw-bold text-muted text-uppercase mb-1">
									Email
								</h4>
								<p className="fs-5 mb-0">319Empowerment@gmail.com</p>
							</div>
						</div>
					</Col>

					{/* Right Column: Formspree Contact Form */}
					<Col lg={6}>
						<Form
							action="https://formspree.io/f/mvzvpbkq"
							method="POST"
							className="p-4 rounded shadow border border-secondary"
						>
							<h3 className="h4 fw-bold mb-4 text-white">Send us a Message</h3>

							<Form.Group className="mb-3" controlId="formName">
								<Form.Label>Your Name</Form.Label>
								<Form.Control
									type="text"
									name="name"
									placeholder="Enter your name"
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									name="email"
									placeholder="name@example.com"
									required
								/>
							</Form.Group>

							<Form.Group className="mb-4" controlId="formMessage">
								<Form.Label>Message</Form.Label>
								<Form.Control
									as="textarea"
									name="message"
									rows={4}
									placeholder="How can we help?"
									required
								/>
							</Form.Group>

							<Button
								variant="warning"
								type="submit"
								size="lg"
								className="w-100 fw-bold shadow"
							>
								Send Message
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Contact;
