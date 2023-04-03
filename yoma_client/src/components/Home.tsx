import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Menu from "./Menu";
import { UserRegistartionData } from "../types";
import showcase from "../assets/showcase.png";
import "../styles/home.css";

export enum Action {
	SINGUP,
	LOGIN,
	NONE,
	LOGGED_IN,
}

type Props = {};

const Home = (props: Props) => {
	const [action, setAction] = useState<Action>(Action.NONE);
	const nav = useNavigate();

	const handleLogin = (data: UserRegistartionData) => {
		setAction(Action.LOGGED_IN);
	};

	const handleSignup = (data: UserRegistartionData) => {
		setAction(Action.LOGGED_IN);
	};

	if (action === Action.LOGGED_IN) {
		return <Menu />;
	} else if (action === Action.LOGIN) {
		return (
			<div className="home">
				<img
					src={showcase}
					alt="big chess piece"
					className="home__showcase"
				/>
				<div className="home__main">
					<Login onSubmit={handleLogin} />
				</div>
			</div>
		);
	} else if (action === Action.SINGUP) {
		return (
			<div className="home">
				<img
					src={showcase}
					alt="big chess piece"
					className="home__showcase"
				/>
				<div className="home__main">
					<Signup onSubmit={handleSignup} />
				</div>
			</div>
		);
	} else {
		return (
			<div className="home">
				<img
					src={showcase}
					alt="big chess piece"
					className="home__showcase"
				/>
				<div className="home__main">
					<h1
						className="home__header"
						style={{ marginBottom: "1.5rem" }}
					>
						YOMA CHESS
					</h1>
					<button
						onClick={() => setAction(Action.SINGUP)}
						className="button-secondary"
					>
						Sign up
					</button>
					<button
						onClick={() => setAction(Action.LOGIN)}
						className="button-blank"
					>
						Log in
					</button>

					<p style={{ textAlign: "center", margin: "0.2rem 0rem" }}>
						or
					</p>
					<button
						className="button-primary"
						onClick={() => setAction(Action.LOGGED_IN)}
					>
						Play as guest
					</button>
				</div>
			</div>
		);
	}
};

export default Home;
