import { createContext, useState } from "react";
import { Candle } from "../Candles/Candle";


export type CartValue = {
	items: Candle[];
	totalAmount: number;
	addItem: (item: Candle) => void;
	removeItem: (id: number) => void;
};
export const CartContext = createContext<CartValue>({
	items: [],
	totalAmount: 0,
	addItem: () => {},
	removeItem: () => {},
});

export const CartProvider = (props: React.PropsWithChildren) => {
	const [items, setItems] = useState<Candle[]>([]);
	const [amount, setAmount] = useState(0);

	const addItem = (item: Candle) => {

		setItems([...items, item]);
		setAmount((prevAmount) => prevAmount+1)
	};
	const removeItem = (id: number) => {
		if(amount>1){
		const newArray = items.filter((item) => item.id !== id);
		setItems(newArray);
		setAmount((prevAmount) => prevAmount-1)}
	};
    return (
        <CartContext.Provider
          value={{
            items: items,
            totalAmount: amount,
            addItem: addItem,
            removeItem: removeItem,
          }}
        >
          {props.children}
        </CartContext.Provider>
      );

};
