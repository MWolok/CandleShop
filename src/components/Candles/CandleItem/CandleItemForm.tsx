import React from "react";
import "./CandleItemForm.css";
import Input from "../../Layout/Input";

export default function CandleItemForm(props: any) {
	const submitHandler = (event: any) => {
		event.preventDefault();
	}

	return (
		<form className="form" onSubmit={submitHandler}>
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
