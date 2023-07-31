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
			console.log("true");

			const updatedItems = items.map((it, index) =>
				index === idOfExistingItem ? { ...it, amount: it.amount + 1 } : it
			);
			setItems(updatedItems);
		} else {
			setItems([...items, item]);
		}

		setAmount((prevAmount) => prevAmount + 1);
	};

	const removeItem = (id: number) => {
		const existingItem = items.find((item) => item.id === id);

		if (existingItem) {
			if (existingItem.amount > 1) {
				const updatedItems = items.map((item) =>
					item.id === id ? { ...item, amount: item.amount - 1 } : item
				);
				setItems(updatedItems);
			} else {
				const updatedItems = items.filter((item) => item.id !== id);
				setItems(updatedItems);
			}

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
