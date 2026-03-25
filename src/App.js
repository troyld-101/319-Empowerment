import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<div className="App">
				<Navigation />

				{/* We are removing the <Routes> and <Route> tags entirely.
            In a HashRouter, stacking them like this is the safest 
            way to build a single-page site. */}
				<Hero />
				<VideoSection />
				<Services />
				<Team />
				<Contact />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
