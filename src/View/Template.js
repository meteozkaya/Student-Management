import { useContext, useState } from "react";
import Head from "./Head";
import List from "./List";
import { ToggleC } from "../ToggleC";

function Templateview() {
   
    const [toggle, setToggle] = useState(true);

    return ( 

        <div>
            <ToggleC.Provider value={{toggle,setToggle}}>
                <Head/>
                <List/>
            </ToggleC.Provider>
        </div>
    );
}

export default Templateview;