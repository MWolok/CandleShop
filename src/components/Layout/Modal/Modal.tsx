import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import ReactDOM from "react-dom";

function ModalComp(props: any) {
	// const [show, setShow] = useState(false);

	// const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);

	return (
		<>
			<Modal show={props.showModal} >
				<Modal.Header closeButton onClick={props.hideModal}>
					<Modal.Title>Your Cart</Modal.Title>
				</Modal.Header>
				<Modal.Body>{props.children}</Modal.Body>
			</Modal>
		</>
	);
}

export default ModalComp;
