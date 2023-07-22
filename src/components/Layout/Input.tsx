import React from "react";
import "../Layout/Input.css";

export default function Input(props: any) {
	return (
		<div className="input">
			<label htmlFor={props.id}>{props.label}</label>
			<input {...props.input} />
		</div>
	);
}
