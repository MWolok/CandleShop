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
		
		const idOfExistingItem = items.findIndex((it) => it.id === item.id);
		
		if (idOfExistingItem !== -1) {
			console.log("true")
		
		
			const updatedItems = items.map((it, index) =>
			index === idOfExistingItem ? { ...it, amount: it.amount + 1 } : it
		  );
		  setItems(updatedItems);
			// const updateObject = { ...items[idOfExistingItem], amount: amount + 1 };
			// const updateState = [
			// 	...items.slice(9, idOfExistingItem),
			// 	updateObject,
			// 	...items.slice(idOfExistingItem + 1),
			// ];
			// setItems(updateState);
			// return;
		}else {
			setItems([...items, item]);
		}

		
		setAmount((prevAmount) => prevAmount + 1);
	};

	const removeItem = (id: number) => {
		if (amount > 1) {
			const newArray = items.filter((item) => item.id !== id);
			setItems(newArray);
			setAmount((prevAmount) => prevAmount - 1);
		}
	};
	return (
		<CartContext.Provider
			value={{
				items: items,
				totalAmount: amount,
				addItem: addItem,
				removeItem: removeItem,
			}}>
			{props.children}
		</CartContext.Provider>
	);
};
