import React, { useContext, useState, useEffect } from "react";
import CartIcon from "./Cart/CartIcon";
import "../components/HeaderButton.css";
import { CartContext } from "./store/CartContext";

export default function HeaderButton(props: any) {
	const [btnAnimation, setBtnAnimation] = useState(false);
	const cart = useContext(CartContext);
	const { items } = cart;

	const btnClass = `${"button"} ${btnAnimation ? "bump" : ""}`;

	useEffect(() => {
		if (cart.items.length === 0) {
			return;
		}
		setBtnAnimation(true);
		const time = setTimeout(() => {
			setBtnAnimation(false);
		}, 300);

		return () => {
			clearTimeout(time);
		};
	}, [items]);

	return (
		<button className={btnClass} onClick={props.onClick}>
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
