import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	// Defining a light gray for the body text to keep it readable
	const lightText = { color: "#adb5bd" };

	return (
		<footer
			className="py-5"
			style={{
				backgroundColor: "#050c16",
				color: "#f8f9fa",
				borderTop: "1px solid #1a2a40",
			}}
		>
			<Container>
				<Row className="gy-4">
					{/* Mission Column */}
					<Col lg={6}>
						<h5 className="fw-bold mb-3" style={{ color: "#c4978a" }}>
							319 Empowerment
						</h5>
						<p
							className="small mb-0"
							style={{ ...lightText, maxWidth: "400px" }}
						>
							Empowering our community by providing essential resources and
							knowledge that promote education, self-reliance, and overall
							well-being.
						</p>
					</Col>

					{/* Location Column */}
					<Col lg={3} md={6}>
						<h6 className="fw-bold text-white mb-3">Location</h6>
						<p className="small mb-0" style={lightText}>
							919 West 4th St
							<br />
							Waterloo, Iowa 50701
						</p>
					</Col>

					{/* Hours Column */}
					<Col lg={3} md={6}>
						<h6 className="fw-bold text-white mb-3">Hours</h6>
						<p className="small mb-0" style={lightText}>
							Monday - Friday
							<br />3 PM - 7 PM
						</p>
					</Col>
				</Row>

				<hr className="my-4" style={{ borderColor: "#1a2a40" }} />

				<div className="d-flex justify-content-between align-items-center flex-wrap">
					<p className="small mb-0" style={lightText}>
						&copy; {currentYear} 319 Empowerment. All rights reserved.
					</p>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
