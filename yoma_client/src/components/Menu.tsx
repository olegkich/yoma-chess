import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Menu = (props: Props) => {
	const navigate = useNavigate();

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<button
				className="button-secondary"
				onClick={() => navigate("/game")}
			>
				play localy
			</button>
			<button
				className="button-secondary"
				onClick={() => navigate("/game")}
			>
				play with a friend
			</button>
			<button
				className="button-secondary"
				onClick={() => navigate("/game")}
			>
				play against an AI
			</button>
			<button
				className="button-secondary"
				onClick={() => navigate("/game")}
			>
				play against a chess engine
			</button>
		</div>
	);
};

export default Menu;
