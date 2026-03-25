import React from "react";
import { Container, Button, Stack } from "react-bootstrap";
import heroBg from "../pics/319Basement.jpg";
import EnrollmentPDF from "../Assets/Enrollment.PDF";
import HandbookPDF from "../Assets/Handbook.PDF";

const Hero = () => {
	return (
		<div
			className="position-relative text-center py-5 px-3"
			style={{
				// A deeper, navy-blue tinted overlay to give it a bold, community-focused vibe
				backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.7)), url(${heroBg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				padding: "140px 0",
				color: "white",
			}}
		>
			<Container>
				{/* Main Headline from the brochure */}
				<h1 className="display-3 fw-bold text-white mb-3 tracking-tight">
					319 EMPOWERMENT
				</h1>

				{/* Sub-headline / Tagline */}
				<h2 className="h4 fw-light text-light mb-4">
					Empowering the Community through youth
				</h2>

				{/* Operational details for quick visibility */}
				<div className="mb-5">
					<span className="badge bg-warning text-dark fs-6 me-2 shadow-sm">
						Grades: 4th - 12th
					</span>
					<span className="badge bg-info text-dark fs-6 shadow-sm">
						Monday - Friday | 3 PM - 7 PM
					</span>
				</div>

				{/* Action Buttons */}
				<Stack
					direction="horizontal"
					gap={3}
					className="justify-content-center flex-wrap"
				>
					<Button
						variant="warning"
						href={EnrollmentPDF}
						target="_blank"
						rel="noreferrer"
						className="fw-bold px-4 shadow-sm"
						style={{ color: "#0a192f", borderRadius: "25px" }}
					>
						View Enrollment Form
					</Button>

					<Button
						variant="warning"
						href={HandbookPDF}
						target="_blank"
						rel="noreferrer"
						className="fw-bold px-4 shadow-sm"
						style={{ color: "#0a192f", borderRadius: "25px" }}
					>
						View Parent Handbook
					</Button>
				</Stack>
			</Container>
		</div>
	);
};

export default Hero;
