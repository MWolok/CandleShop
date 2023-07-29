import React from 'react'
import './CartItem.css'

export default function CartItem(props:any) {
    return (
        <li className='cart-item'>
          <div>
            <h2>{props.smell}</h2>
            <div className="summarys">
              <span className="price">{`$${props.price.toFixed(2)}`}</span>
              <span className="amount">x {props.amount}</span>
            </div>
          </div>
          <div className="actions">
            <button onClick={props.onRemove}>−</button>
            <button onClick={props.onAdd}>+</button>
          </div>
        </li>
      );
}
