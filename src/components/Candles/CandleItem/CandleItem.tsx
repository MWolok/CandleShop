import React, { useContext } from "react";
import { Candle } from "../Candle";
import "./CandleItem.css";
import CandleItemForm from "./CandleItemForm";
import { CartContext } from "../../store/CartContext";

export default function CandleItem(props: Candle) {
	const cart = useContext(CartContext); 


	const addToCartHandler = (amount: number) => {
		cart.addItem({...props, amount:amount});
	};
	return (
		<li className="can">
			<div>
				<h3>{props.smell}</h3>
				<div className="description">{props.size}</div>
				<div className="price">{props.price}</div>
			</div>
			<div>
				<CandleItemForm
					onAddToCart={addToCartHandler}
					id={props.id}></CandleItemForm>
			</div>
		</li>
	);
}
