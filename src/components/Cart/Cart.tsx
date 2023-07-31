import React, { useContext } from "react";
import { Candle } from "../Candles/Candle";
import "./Cart.css";
import Modal from "../Layout/Modal/Modal";
import { CartContext } from "../store/CartContext";
import CartItem from "./CartItem";

export default function Cart(props: any) {
	const cart = useContext(CartContext);
	const hasItems: boolean = cart.items.length > 0;
	let price: number = 0;
	price.toFixed(2);

	const cartItemRemoveHandler = (id: number) => {
		cart.removeItem(id);
	};
	const cartItemAddHandler = (item: Candle) => {
		cart.addItem({ ...item, amount: 1 });
		console.log("Add");
	};

	return (
		<Modal hideModal={props.onHide} showModal={props.onShow}>
			<ul className="cart-items">
				{cart.items.map((can) => (
					<CartItem
						onRemove={cartItemRemoveHandler.bind(null, can.id)}
						onAdd={cartItemAddHandler.bind(null, can)}
						key={can.id}
						{...can}></CartItem>
				))}
			</ul>

			<div className="total">
				<span>Total amount</span>
				<span>
					{cart.items.reduce((num: number, item: Candle) => {
						return (price = num + item.price * item.amount);
					}, 0)}
				</span>
			</div>
			<div className="action">
				<button className="button button--alt">Close</button>
				{hasItems && <button className="button">Order</button>}
			</div>
		</Modal>
	);
}
