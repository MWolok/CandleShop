import React from "react";
import "./Modal.css";

export default function ModalOverlay(props:any) {
	return (
		<div className="modal">
			<div className="content">{props.children}</div>
		</div>
	);
}
