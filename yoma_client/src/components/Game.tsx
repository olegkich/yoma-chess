import { Chess } from "chess.js";
import React, { useEffect } from "react";
import { Chessboard } from "react-chessboard";
import "../styles/root.css";

interface Move {
	from: string;
	to: string;
	promotion?: string | undefined;
}

type Props = {};

const Game = (props: Props) => {
	const [game, setGame] = React.useState(new Chess());

	useEffect(() => {
		setGame(new Chess());
	}, []);
	const onMove = (move: Move) => {
		const gameCopy = new Chess();
		gameCopy.loadPgn(game.pgn());

		try {
			const result = gameCopy.move(move);
			setGame(gameCopy);
			return result;
		} catch (e) {}
	};

	function onDrop(sourceSquare: string, targetSquare: string) {
		const move = onMove({
			from: sourceSquare,
			to: targetSquare,
			promotion: "q",
		});

		if (move === null) return false;
		return true;
	}

	return (
		<div className="container">
			<div>
				<Chessboard
					position={game.fen()}
					onPieceDrop={onDrop}
					boardWidth={500}
					customBoardStyle={{
						borderRadius: "15px",
					}}
					customDarkSquareStyle={{
						backgroundColor: "rgb(83, 104, 131)",
					}}
					customLightSquareStyle={{
						backgroundColor: "rgb(251, 214, 135)",
					}}
				/>
			</div>
		</div>
	);
};

export default Game;
