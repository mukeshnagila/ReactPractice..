import React, { useState } from 'react';
import FuncpCompo from "./FuncpCompo";
import ClasspCompo from './ClasspCompo';

function PropsCompo(){
    const [data4, setData] = useState(0);
    const [data5, setData5] = useState({
            name: "Mukesh",
            age: 24
        }
    )
    return(
        <>
            <h2>Hello...By Prop</h2>
            <FuncpCompo data='This Data is come from Props Compo' data2='This is second data frome props Compo' data3={{name: 'Mukesh', age: 24}} />
            {/* <FuncpCompo data4 = {{data4, setData}} /> */}
            {/* <FuncpCompo data5 = {{data5, setData5}} /> */}
            <ClasspCompo value = {{data4, setData}} value2 ={{data5, setData5}} />
        </>
    )
}

export default PropsCompo;