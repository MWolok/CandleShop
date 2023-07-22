import React from "react";
import { Candle } from "../Candle";
import "./CandleItem.css";
import CandleItemForm from "./CandleItemForm";

export default function CandleItem(props: Candle) {
	const price = `${props.price.toFixed(2)}zl`;

	return (
		<li className="can">
			<div>
				<h3>{props.smell}</h3>
				<div className="description">{props.size}</div>
				<div className="price">{price}</div>
			</div>
			<div>
				<CandleItemForm id={props.id}></CandleItemForm>
			</div>
		</li>
	);
}
