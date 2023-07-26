import React from "react";
import { Candle } from "../Candles/Candle";
import "./Cart.css";
import Modal from "../Layout/Modal/Modal";

export default function Cart(props: any) {
	const cartItems: Candle[] = [
		{ id: 12, size: "midium", smell: "vanila", price: 12, color: "red" },
	];

	return (
		<Modal  hideModal={props.onHide} showModal={props.onShow}>
			<ul className="cart-items">
				{cartItems.map((can) => (
					<li key={can.id}>{can.color}</li>
				))}
			</ul>

			<div className="total">
				<span>Total amount</span>
				<span>111</span>
			</div>
			<div className="actions">
				<button className="button button--alt">Close</button>
				<button className="button">Order</button>
			</div>
		</Modal>
	);
}
