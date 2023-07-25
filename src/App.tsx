import React, { useState } from "react";
import Header from "./components/Layout/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Candles from "./components/Candles/Candles";
import Cart from "./components/Cart/Cart";
import Modal from "./components/Layout/Modal/Modal";

function App() {
	const [showCart, setShowCart] = useState(true);

	const handleClose = () => setShowCart(false);
	const handleShow = () => setShowCart(true);

	return (
		<>
			<Header onhandleClose={handleShow}></Header>

			<Cart onShow={showCart}></Cart>
			<main>
				<Candles />
			</main>
		</>
	);
}

export default App;
