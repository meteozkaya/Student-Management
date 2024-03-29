import axios from "axios";
import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { StudensC } from "../StudentsC";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function AddModal(props) {

    const {students, setStudents} = useContext(StudensC)
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;    
        event.preventDefault();        

        if(form.checkValidity()){
            axios.post('http://localhost:8000/students',
                {
                    fname: event.target[0].value,
                    lname: event.target[1].value,
                    num: event.target[2].value,
                    dept: event.target[3].value,
                    pob: event.target[4].value,
                    dob: event.target[5].value
                }).then(function(response){
                    setStudents((students) => [...students,response.data,]);
                }).then(()=>{
                    props.onHide();
                }).catch(function(e){
                    console.log(e);
                })
            props.onHide();
        }
        setValidated(true);
    }

    return ( 
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
            <Modal {...props} >
                <Modal.Header closeButton >
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form  id="addStudentForm" className="row needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="has-validation col-12 col-md-6 p-2">

                                <label htmlFor="fname" className="form-label">İsim</label>
                                <input className="form-control mt-2" type="text" name="fname" id="fname" placeholder="Soner" pattern="[A-Za-zŞşÇçİÜüĞğÖöı]{3,}" required/>
                                <div className="invalid-feedback">İsim en az 3 harf içermelidir</div>
                            </div>
                            <div className="col-12 col-md-6 p-2">
                                <label htmlFor="lname" className="form-label">Soyisim</label>
                                <input className="form-control  mt-2" type="text" name="lname" id="lname" placeholder="Özaşık" pattern="[A-Za-zŞşÇçİÜüĞğÖöı]{3,}" required/>
                                <div className="invalid-feedback">Soyisim en az 3 harf içermelidir</div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 p-2">
                                <label htmlFor="num" className="form-label">Öğrenci Numarası</label>
                                <input className="form-control  mt-2" type="number" name="num" id="num" placeholder="152120181069" min="100000000000" max="999999999999" required/>
                                <div className="invalid-feedback">Öğrenci numarası 12 harf içermelidir</div>

                            </div>
                            <div className="col-12 col-md-6 p-2">
                                <label htmlFor="dept" className="form-label">Bölüm</label>
                                <select className="form-select  mt-2" name="dept" id="dept" required>
                                    <option value="" disabled selected>Bölüm Seçiniz</option>
                                    <option value="1">Bilgisayar Müh.</option>
                                    <option value="2">Elektrik-Elektronik Müh.</option>
                                    <option value="3">Endüstri Müh.</option>
                                    <option value="4">İnşaat Müh.</option>
                                </select>
                                <div className="invalid-feedback">Bölüm seçiniz</div>
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 p-2">
                                <label htmlFor="pob" className="form-label" >Doğum Yeri</label>
                                <input className="form-control mt-2" type="text" name="pob" id="pob" placeholder="Mustafakemalpaşa" pattern="[A-Za-zŞşÇçİÜüĞğÖöı]{3,}" required/>
                                <div className="invalid-feedback">Doğum yeri en az 3 harf içermelidir</div>

                            </div>
                            <div className="col-12 col-md-6 p-2">
                                <label htmlFor="dob" className="form-label">Doğum Tarihi</label>
                                <input className="form-control mt-2" type="date" name="dob" id="dob" required/>
                                <div className="invalid-feedback">Tarih seçiniz</div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={props.onHide}>Close</button>
                            <button type="submit" className="btn btn-primary">Add</button>
                      </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
     );
}

export default AddModal;