import { useContext, useState } from "react";
import { StudensC } from "../StudentsC";
import ItemPaging from "./ItemPaging";
import { ToggleC } from "../ToggleC";
import Card from 'react-bootstrap/Card';
import {Info, InfoCircle, Pen, Trash} from 'react-bootstrap-icons'

function List() {
  const departs = {
    "1": "Bilgisayar Müh.",
    "2": "Elektrik-Elektronik Müh.",
    "3": "Endüstri Müh.",
    "4": "İnşaat Müh."
  };

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
                                <button  className="btn button bg-red">Sil</button>
                                <button  className="btn button bg-blue">Düzenle</button>
                                <button  className="btn button bg-green">Detay</button>                    
                            </td>
                        </tr>))} 
                    </tbody>
                </table>
                <ItemPaging  numItems={students.length} currPage={currPage} setNewPage={setNewPage} numItemsPerPage={perpage} setPerPage={setPerpage}></ItemPaging>
            </div>
        )
    }

    const cardV = () =>{
        return (
            <div className="row card-list mx-0">
                {students.slice(currPage*perpage,(currPage+1)*perpage).map((s) => (
                    <Card className="col-12 col-md-6 col-lg-4 col-xl-3  card-item ">
                        <Card.Body>
                            <Card.Title>{`${s.fname} ${s.lname}`}</Card.Title>
                            <Card.Text>{s.num}</Card.Text>
                            <Card.Text>{departs[s.dept]}</Card.Text>
                            <Card.Text>
                                <div className="d-flex flex-wrap">
                                    <button className="btn-modal">
                                        <Trash size={20} color ="red"></Trash>
                                    </button>
                                    <button className="btn-modal">
                                        <Pen size={20} color ="blue"></Pen>
                                    </button>
                                    <button className="btn-modal">
                                        <InfoCircle size={20} color="green"></InfoCircle>
                                    </button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
                <ItemPaging  numItems={students.length} currPage={currPage} setNewPage={setNewPage} numItemsPerPage={perpage} setPerPage={setPerpage}></ItemPaging>
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
