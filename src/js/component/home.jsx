import React from "react";

import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first comp<Card />nt
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />

			<div className="container">
				<div className="row">
					<div className="col-sm">
						<Card />
					</div>
					<div className="col-sm">
						<Card />
					</div>
					<div className="col-sm">
						<Card />
					</div>
					<div className="col-sm">
						<Card />
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;
