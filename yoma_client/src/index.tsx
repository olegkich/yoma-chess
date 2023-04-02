import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Game from "./Game";
import Root from "./Root";

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
		<RouterProvider router={router} />
	</React.StrictMode>
);