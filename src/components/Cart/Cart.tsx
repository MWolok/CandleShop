import React from "react";
import { Candle } from "../Candles/Candle";
import './Cart.css'
import Modal from "../Layout/Modal/Modal";

export default function Cart(props: any) {
const cartItems:Candle[] = [];


	return (
		<Modal>
            <ul className="cart-items">
                {cartItems.map(can => <li>{can.color}</li>)}
            </ul>
            
			<div className="total">
                <span>Total amount</span>
                <span>111</span>
            </div>
			<div className="actions">
        <button className="button--alt">Close</button>
        <button className="button">Order</button>
            </div>
		</Modal>
	);
}
