import React, { useContext } from "react";
import { Candle } from "../Candles/Candle";
import "./Cart.css";
import Modal from "../Layout/Modal/Modal";
import { CartContext } from "../store/CartContext";

export default function Cart(props: any) {

	const cart = useContext(CartContext);



	return (
		<Modal  hideModal={props.onHide} showModal={props.onShow}>
			<ul className="cart-items">
				{cart.items.map((can) => (
					<li key={can.id}>{can.color}</li>
				))}
			</ul>

			<div className="total">
				<span>Total amount</span>
				<span>{cart.items.reduce((num:number,item:Candle)=>{
					return num + item.price
				},0)}</span>
			</div>
			<div className="actions">
				<button className="button button--alt">Close</button>
				<button className="button">Order</button>
			</div>
		</Modal>
	);
}
