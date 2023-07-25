import React from "react";
import CartIcon from "./Cart/CartIcon";
import '../components/HeaderButton.css'

export default function HeaderButton(props:any) {
	return (
		<button className="button">
			<span className="icon"><CartIcon/></span>
			<span>Your Cart</span>
            {/* Cart items num */}
			<span className="badge">1</span>
		</button>
	);
}
