import axios from "axios";
import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { StudensC } from "../StudentsC";
import { ExclamationTriangleFill } from "react-bootstrap-icons";

function DeleteModal(props) {

    const {students, setStudents} = useContext(StudensC)
    
    const deletestudent = () => {
        axios.delete('http://localhost:8000/students/'+ props.student.id)
        .then(response =>{
            setStudents(students.filter((selected)=>{
                return selected.id != props.student.id;
            }));

            props.onHide();
        })
        
    }

    return ( 
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
            <Modal {...props} >
                <Modal.Header closeButton >
                <Modal.Title><ExclamationTriangleFill color="red"/> Öğrenciyi Sil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong >{props.student.fname} {props.student.lname}</strong> isimli öğrenciyi siliyorsunuz. Bu işlem geri alınamaz. Devam etmek istediğinize emin misiniz?</p>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={props.onHide}>Vazgeç</button>
                    <button type="button" className="btn btn-danger" onClick={deletestudent} >Sil</button>
                </Modal.Footer>
            </Modal>
        </div>
     );
}

export default DeleteModal;