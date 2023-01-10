import esogu_logo from './esogu-logo.png';
import {PersonPlus , ToggleOff, ToggleOn} from 'react-bootstrap-icons'
import { useContext, useState } from 'react';
import { ToggleC } from './ToggleC';
import { Modal } from 'react-bootstrap';
import AddModal from './Modals/AddModal';

function Head() {
    
    const [addstudent, setAddstudent] = useState(false);
    const {toggle, setToggle} = useContext(ToggleC);

    return (

        <div>
            <div className="col">
                <div className="row justify-content-between">
                    <div className="col-8 d-flex align-items-center p-5 pb-0">
                        <img src={esogu_logo}/>
                        <div>
                            <h1 className="d-block fs-3 text-nowrap">Eskişehir Osmangazi Üniversitesi</h1>
                            <h2 className="d-block fs-4 fw-normal text-nowrap">Öğrenci Yönetim Sistemi</h2>
                        </div>
                    </div>
                    <div className="col-4 Wlcm">
                        <span className="fw-semibold fs-4 col-12 text-nowrap text-end hellospan">Merhaba, John Doe</span>
                        <button className="btn bg-secondary text-white d-inline-block exitbtn">Çıkış Yap</button>
                    </div>
                </div>
            </div>
            <div className="col-12 pt-5 px-5 d-flex justify-content-between mb-2">
                <h3 className="col-10">Öğrenci Listesi</h3>
                <button className='btn btn-primary btn_tog' onClick={() => {setToggle(!toggle)}}> Table View
                    {toggle? (<ToggleOn size={25} color="white"/>):(<ToggleOff size={25}/>) }
                </button>
                <button id="addStudentButton" className="btn text-white p-0 px-3" data-bs-toggle="modal" data-bs-target="#addStudentModal">
                    <PersonPlus size={30} onClick={() => setAddstudent(true)} />
                </button>

            </div>
            <AddModal show={addstudent}
            onHide= {() => setAddstudent(false)}
            ></AddModal>
        </div>
    );
}

export default Head;