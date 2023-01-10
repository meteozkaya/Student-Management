import { useEffect, useState } from 'react';
import List from './View/List';
import axios from "axios"
import { StudensC } from './View/StudentsC';
import Templateview from './View/Template';

function App() {
  const [loading, setLoading] = useState(true)
  const [students, setStudents] = useState()

  const url = "http://localhost:8000/students"
  useEffect(() => {
    axios.get(url).then((response)=>{
      setStudents(response.data)
      setLoading(false)
    })

  }, [])
  
  
 const returnC = loading ? <div>Loading...</div> :
    <StudensC.Provider value={{students, setStudents}}>
      <div className = "container-fluid">
        <Templateview/>
     </div> 
    </StudensC.Provider>

  return returnC
  
}

export default App;
