import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Game from "./components/Game";
import Root from "./Root";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
	},
	{ path: "/game", element: <Game /> },
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<div className="container">
			<RouterProvider router={router} />
		</div>
	</React.StrictMode>
);
