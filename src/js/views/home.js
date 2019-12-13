import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="container">
		<div className="row">
			<div className="card col-md-4">
				<div className="imgdiv">
					<img
						className="card-img-top"
						src="https://secureimg.stitcher.com/feedimagesplain328/78814.jpg"
						alt="Card image cap"
					/>
				</div>
				<div className="card-body">
					<h5 className="card-title">Ep 75: Blade Runner (Part 2)</h5>
					<h8>
						Blade Runner continues! Courtney gets a hat! Carolyn gets a wig! Lisa drinks Champagne! Pitr
						drinks Zima! Paulo pets a cat!
					</h8>
					{/* <p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</p> */}
				</div>
			</div>
			<div className="card col-md-4">
				<div className="imgdiv">
					<img
						className="card-img-top"
						src="https://secureimg.stitcher.com/feedimagesplain328/78814.jpg"
						alt="Card image cap"
					/>
				</div>
				<div className="card-body">
					<h5 className="card-title">Ep 74: Blade Runner (Part 1)</h5>
					<h8>
						We run some blades! Pitr gets a job! Lisa drinks champagne! Courtney does some snooping! Paulo
						has soup!
					</h8>
					{/* <p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</p> */}
				</div>
			</div>
			<div className="card col-md-4">
				<div className="imgdiv">
					<img
						className="card-img-top"
						src="https://secureimg.stitcher.com/feedimagesplain328/78814.jpg"
						alt="Card image cap"
					/>
				</div>
				<div className="card-body">
					<h5 className="card-title">Ep 73: Adventure Time</h5>
					<h8>
						We play through the Elements saga of Adventure Time! Andy loses himself! Pitr finds himself! Jon
						embraces his inner Cthulhu!
					</h8>
					{/* <p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</p> */}
				</div>
			</div>
		</div>
	</div>
);
