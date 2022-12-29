import { Modal } from "bootstrap";

function addStudentModal() {


    return ( 
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                <button variant="secondary">Close</button>
                <button variant="primary">Save changes</button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
     );
}

export default addStudentModal;