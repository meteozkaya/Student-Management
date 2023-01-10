import { useContext, useState } from "react";
import { StudensC } from "./StudentsC";
import ItemPaging from "./ItemPaging";
import { ToggleC } from "./ToggleC";
import Card from 'react-bootstrap/Card';
import {Info, InfoCircle, Pen, Trash} from 'react-bootstrap-icons'
import DeleteModal from "./Modals/DeleteModal";
import EditModal from "./Modals/EditModal";
import InfoModal from "./Modals/InfoModal";

function List() {
  const departs = {
    "1": "Bilgisayar Müh.",
    "2": "Elektrik-Elektronik Müh.",
    "3": "Endüstri Müh.",
    "4": "İnşaat Müh."
  };

  const [infostudent, setInfostudent] = useState(false)
  const [deletestudent, setDeletestudent] = useState(false)
  const [updatestudent, setUpdatestudent] = useState(false)

  const [selectedstudent, setSelectedstudent] = useState({
    id: '',
    fname: '',
    lname: '',
    num: '',
    dept: '',
    pob: '',
    dob: '',
  });

  const [perpage, setPerpage] = useState(8);
  const [currPage, setPage] = useState(0);
  const setNewPage = (page)=>setPage(page);

  const {students, setStudents} = useContext(StudensC)
  const {toggle, setToggle} = useContext(ToggleC);

  const tableV = () =>{
        return (
            <div className="row">
                <table className="table m-0">
                    <thead>
                        <tr className="table-secondary">
                            <th className="col-6 col-md-4 col-lg-3">İsim Soyisim</th>
                            <th className="col-3 d-none d-md-table-cell">Öğrenci Numarası</th>
                            <th className="col-3 d-none d-lg-table-cell">Bölüm</th>
                            <th className="col-6 col-md-4 col-lg-3">Yetkiler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.slice(currPage*perpage,(currPage+1)*perpage).map((s) => (
                        <tr>
                            <td className="px-5">{`${s.fname} ${s.lname}`}</td>
                            <td className="d-none d-md-table-cell">{s.num}</td>
                            <td className="d-none d-lg-table-cell">{departs[s.dept]}</td>
                            <td className="d-flex flex-nowrap">
                                <button  className="btn button bg-red" onClick={() => {setDeletestudent(true); setSelectedstudent(s); }}>Sil</button>
                                <button  className="btn button bg-blue" onClick={() => {setUpdatestudent(true); setSelectedstudent(s);}}>Düzenle</button>
                                <button  className="btn button bg-green" onClick={() => {setInfostudent(true); setSelectedstudent(s);}}>Detay</button>                    
                            </td>
                        </tr>))} 
                    </tbody>
                </table>
                <ItemPaging  numItems={students.length} currPage={currPage} setNewPage={setNewPage} numItemsPerPage={perpage} setPerPage={setPerpage}></ItemPaging>
                <DeleteModal  show={deletestudent} 
                onHide= {() => setDeletestudent(false)} 
                student ={selectedstudent}></DeleteModal>

                <EditModal show={updatestudent}
                onHide= {() => setUpdatestudent(false)} 
                student ={selectedstudent}></EditModal>

                <InfoModal show={infostudent }
                onHide= {() => setInfostudent(false)} 
                student ={selectedstudent}></InfoModal>
            </div>
        )
    }

    const cardV = () =>{
        return (
            <div className="row card-list mx-0">
                {students.slice(currPage*perpage,(currPage+1)*perpage).map((s) => (
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 py-2 px-3">
                        <Card className="card-item ">
                            <Card.Body>
                                <Card.Title>{`${s.fname} ${s.lname}`}</Card.Title>
                                <Card.Text>{s.num}</Card.Text>
                                <Card.Text>{departs[s.dept]}</Card.Text>
                                <Card.Text>
                                    <div className="d-flex flex-wrap">
                                        <button className="btn-modal" onClick={() => {setDeletestudent(true); setSelectedstudent(s);}}>
                                            <Trash size={20} color ="red"></Trash>
                                        </button>
                                        <button className="btn-modal" onClick={() => {setUpdatestudent(true); setSelectedstudent(s);}}>
                                            <Pen size={20} color ="blue"></Pen>
                                        </button>
                                        <button className="btn-modal" onClick={() => {setInfostudent(true); setSelectedstudent(s);}}>
                                            <InfoCircle size={20} color="green"></InfoCircle>
                                        </button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
                <ItemPaging  numItems={students.length} currPage={currPage} setNewPage={setNewPage} numItemsPerPage={perpage} setPerPage={setPerpage}></ItemPaging>
                <DeleteModal  show={deletestudent}
                onHide= {() => setDeletestudent(false)} 
                student ={selectedstudent}></DeleteModal>
                
                <EditModal show={updatestudent}
                onHide= {() => setUpdatestudent(false)} 
                student ={selectedstudent}></EditModal>

                <InfoModal show={infostudent }
                onHide= {() => setInfostudent(false)} 
                student ={selectedstudent}></InfoModal>
            </div>
            
        )
    }

    return(
        <div>
            {toggle? tableV(): cardV()}
        </div>
    )

}

export default List;
