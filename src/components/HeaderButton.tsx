import React, { useContext } from "react";
import CartIcon from "./Cart/CartIcon";
import "../components/HeaderButton.css";
import { CartContext } from "./store/CartContext";

export default function HeaderButton(props: any) {
	const cart = useContext(CartContext);
	console.log(cart.totalAmount);
	return (
		<button className="button" onClick={props.onClick}>
			<span className="icon">
				<CartIcon />
			</span>
			<span>Your Cart</span>
			{/* Cart items num */}
			<span className="badge">
				{cart.items.reduce((number, item) => {
					return 0 + cart.totalAmount;
				}, 0)}
			</span>
		</button>
	);
}
