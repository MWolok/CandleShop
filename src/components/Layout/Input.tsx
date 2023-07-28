import React from "react";
import "../Layout/Input.css";

const Input = React.forwardRef((props: any, ref:any) => {
	return (
		<div className="input">
			<label htmlFor={props.id}>{props.label}</label>
			<input ref={ref} {...props.input} />
		</div>
	);
	
});
export default Input;