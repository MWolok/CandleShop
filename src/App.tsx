import React from "react";
import Header from "./components/Layout/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Candles from "./components/Candles/Candles";
import Cart from "./components/Cart/Cart";

function App() {
	return (
		<>
			<Header></Header>

			<Cart></Cart>
			<main>
				<Candles />
			</main>
		</>
	);
}

export default App;
