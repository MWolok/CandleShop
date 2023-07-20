import React from "react";
import Header from "./components/Layout/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Candles from "./components/Candles/Candles";

function App() {
	return (
		<>
			<Header></Header>
			<main>
				<Candles />
			</main>
		</>
	);
}

export default App;
