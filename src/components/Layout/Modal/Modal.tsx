import React from "react";
import BackDrop from "./BackDrop";
import ModalOverlay from "./ModalOverlay";
import ReactDOM from "react-dom";
import './Modal.css'

export default function Modal(props: any) {
const portalElement = document.getElementById('overlays')


	return (
		<>
			{/* {ReactDOM.createPortal(<BackDrop/>,portalElement!)} */}
			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement!)}
		</>
	);
}
