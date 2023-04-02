import { Chess } from "chess.js";
import React, { useEffect } from "react";
import { Chessboard } from "react-chessboard";

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
		<Chessboard
			position={game.fen()}
			onPieceDrop={onDrop}
			boardWidth={500}
		/>
	);
};

export default Game;
