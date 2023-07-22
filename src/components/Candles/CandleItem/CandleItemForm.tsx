import React from "react";
import "./CandleItemForm.css";
import Input from "../../Layout/Input";

export default function CandleItemForm(props: any) {
	return (
		<form className="form" action="">
			<Input
				label="Amount"
				input={{
					id: "amount" + props.id,
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}></Input>
			<button>Add</button>
		</form>
	);
}
