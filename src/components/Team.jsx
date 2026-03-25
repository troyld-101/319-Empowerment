import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import renitaPic from "../pics/Renita.jpg"; // Uncomment and add the real image path
import alexisPic from "../pics/Alexis.jpg"; // Uncomment and add the real image path

const Team = () => {
	const teamMembers = [
		{
			name: "Renita Johnson",
			role: "Founder and CEO",
			bio: "Her vision will make a stronger community.",
			image: renitaPic,
		},
		{
			name: "Alexis Wright-Davis",
			role: "Director",
			bio: "Working daily to assist with making the vision reality.",
			image: alexisPic,
		},
	];

	return (
		<div className="py-5" style={{ backgroundColor: "#f8f9fa" }} id="team">
			<Container className="py-md-5">
				<div className="text-center mb-5">
					<h2 className="display-5 fw-bold" style={{ color: "#0a192f" }}>
						Meet Our Team
					</h2>
					<p className="lead text-muted">
						The dedicated leaders behind 319 Empowerment.
					</p>
				</div>

				{/* Centered Row for the two team members */}
				<Row className="justify-content-center g-4">
					{teamMembers.map((member, index) => (
						<Col md={6} lg={5} key={index}>
							<Card className="h-100 shadow-sm border-0 text-center py-4 btn-hover-lift">
								<Card.Body>
									<div
										className="mx-auto rounded-circle d-flex align-items-center justify-content-center bg-secondary text-white mb-4 shadow"
										style={{
											width: "150px",
											height: "150px",
											fontSize: "2.5rem",
										}}
									>
										<img
											src={member.image}
											alt={member.name}
											className="img-fluid rounded-circle"
											style={{
												width: "150px",
												height: "150px",
												objectFit: "cover",
											}}
										/>
										{member.placeholder}
									</div>
									<Card.Title
										className="h3 fw-bold"
										style={{ color: "#0a192f" }}
									>
										{member.name}
									</Card.Title>
									<Card.Subtitle className="mb-3 text-warning fw-bold fs-5">
										{member.role}
									</Card.Subtitle>
									<Card.Text className="text-muted fs-5 px-3">
										"{member.bio}"
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Team;
