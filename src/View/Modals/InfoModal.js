import axios from "axios";
import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { StudensC } from "../StudentsC";
import { ExclamationTriangleFill, InfoCircleFill } from "react-bootstrap-icons";

function InfoModal(props) {

    const {students, setStudents} = useContext(StudensC)
    
    
    return ( 
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
            <Modal {...props} >
                <Modal.Header closeButton >
                <Modal.Title><InfoCircleFill color="blue"/> Öğrenciyi Düzenle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="editStudentForm" className="row needs-validation" novalidate>
                        <div className="row">
                            <div className="has-validation col-12 col-md-6 p-2">
                                <label htmlFor="fname" className="form-label">İsim</label>
                                <input className="form-control mt-2" defaultValue={props.student.fname} type="text" name="fname" id="es_fname" placeholder={props.student.fname} pattern="[A-Za-zŞşÇçİÜüĞğÖöı]{3,}" disabled/>
                                <div className="invalid-feedback">İsim en az 3 harf içermelidir</div>
                            </div>
                            <div className="col-12 col-md-6 p-2">
                                <label htmlFor="lname" className="form-label">Soyisim</label>
                                <input className="form-control  mt-2" defaultValue={props.student.lname} type="text" name="lname" id="es_lname" placeholder="Özaşık" pattern="[A-Za-zŞşÇçİÜüĞğÖöı]{3,}" disabled/>
                                <div className="invalid-feedback">Soyisim en az 3 harf içermelidir</div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 p-2">
                                <label htmlFor="num" className="form-label">Öğrenci Numarası</label>
                                <input className="form-control  mt-2" defaultValue={props.student.num} type="number" name="num" id="es_num" placeholder="152120181069" min="100000000000" max="999999999999" disabled/>
                                <div className="invalid-feedback">Öğrenci numarası 12 harf içermelidir</div>

                            </div>
                            <div className="col-12 col-md-6 p-2">
                                <label htmlFor="dept" className="form-label">Bölüm</label>
                                <select className="form-select  mt-2" defaultValue={props.student.dept} name="dept" id="es_dept" disabled>
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
                                <input className="form-control mt-2" defaultValue={props.student.pob} type="text" name="pob" id="es_pob" placeholder="Mustafakemalpaşa" pattern="[A-Za-zŞşÇçİÜüĞğÖöı]{3,}" disabled/>
                                <div className="invalid-feedback">Doğum yeri en az 3 harf içermelidir</div>

                            </div>
                            <div className="col-12 col-md-6 p-2">
                                <label htmlFor="dob" className="form-label">Doğum Tarihi</label>
                                <input className="form-control mt-2" defaultValue={props.student.dob} type="date" name="dob" id="es_dob" disabled/>
                                <div className="invalid-feedback">Tarih seçiniz</div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={props.onHide}>Close</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
     );
}

export default InfoModal;