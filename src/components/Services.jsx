import React from "react";
import { Container, Row, Col, Card, Stack } from "react-bootstrap";

const Services = () => {
	// We can store the services in an array to map over them cleanly
	const programs = [
		{
			title: "Financial Literacy",
			icon: "💰",
			text: "Equipping youth with the knowledge to manage finances and build wealth.",
		},
		{
			title: "Life Skills",
			icon: "🌱",
			text: "Teaching essential daily skills for self-reliance and personal growth.",
		},
		{
			title: "Job Readiness",
			icon: "💼",
			text: "Preparing students for the workforce with resume building and interview prep.",
		},
		{
			title: "Content Creation",
			icon: "📱",
			text: "Creative expression through modern digital media and technology.",
		},
	];

	const facilities = ["Social Media Room", "Game Room", "Computer Center"];

	return (
		// Replaced bg-light with a custom light orange background style
		<div className="py-5" id="programs" style={{ backgroundColor: "#c4978a" }}>
			<Container className="py-md-5">
				<div className="text-center mb-5">
					{/* Keep the text Navy Blue so it pops against the orange */}
					<h2 className="display-5 fw-bold" style={{ color: "#0a192f" }}>
						Our Services
					</h2>
					<p className="lead text-muted">
						Fostering individual growth and community empowerment through
						comprehensive instruction and well-equipped facilities.
					</p>
				</div>

				{/* The Programs Grid */}
				<Row className="g-4 mb-5">
					{programs.map((prog, index) => (
						<Col md={6} lg={3} key={index}>
							<Card className="h-100 shadow-sm border-0 btn-hover-lift">
								<Card.Body className="text-center p-4">
									<div className="display-4 mb-3">{prog.icon}</div>
									<Card.Title className="fw-bold">{prog.title}</Card.Title>
									<Card.Text className="text-muted">{prog.text}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>

				{/* The Facilities Banner */}
				<div className="bg-white p-4 rounded shadow-sm text-center border-top border-warning border-4">
					<h3 className="h5 fw-bold mb-3" style={{ color: "#0a192f" }}>
						Our Facilities Include:
					</h3>
					<Stack
						direction="horizontal"
						gap={4}
						className="justify-content-center flex-wrap"
					>
						{facilities.map((facility, index) => (
							<span key={index} className="fs-5 text-secondary fw-semibold">
								✓ {facility}
							</span>
						))}
					</Stack>
				</div>
			</Container>
		</div>
	);
};

export default Services;
