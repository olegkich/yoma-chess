import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Auth = (props: Props) => {
	const navigate = useNavigate();

	return (
		<div>
			<div>
				<h2>Sign in</h2>
				<form>
					<input placeholder="name" />
					<input placeholder="password" />
					<button onClick={() => navigate("/game")}>submit</button>
				</form>
			</div>
			<div>
				<h2>Sign up</h2>
				<form>
					<input placeholder="name" />
					<input placeholder="password" />
					<button onClick={() => navigate("/game")}>submit</button>
				</form>
			</div>
		</div>
	);
};

export default Auth;
