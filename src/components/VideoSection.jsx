import React from "react";
import { Container } from "react-bootstrap";

const VideoSection = () => {
	return (
		<div className="py-5 bg-white" id="about">
			<Container>
				<div className="text-center mb-5">
					<h2 className="display-5 fw-bold" style={{ color: "#0a192f" }}>
						See Us in Action
					</h2>
					<p className="lead text-muted">
						Take a look at what we are building for the youth in our community.
					</p>
				</div>

				{/* The Bootstrap 'ratio' wrapper makes the video perfectly responsive! */}
				<div className="ratio ratio-16x9 shadow-lg rounded overflow-hidden">
					{/* PASTE YOUR FACEBOOK IFRAME HERE. Here is an example of the corrected JSX format: */}
					<iframe
						src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F24.7BLAC%2Fvideos%2F1025834015728659%2F&show_text=false&width=560&t=0"
						style={{ border: "none", overflow: "hidden" }}
						scrolling="no"
						frameBorder="0"
						allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
						allowFullScreen={true}
					></iframe>
				</div>
			</Container>
		</div>
	);
};

export default VideoSection;
