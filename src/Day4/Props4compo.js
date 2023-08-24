import React, {useState} from 'react';
import Func4compo from './Func4compo';
import Class4compo from './Class4compo';

function Props4compo(){
    const [data, setData] = useState(0);
    const [data2, setData2] = useState({
        name: "Nagila Bhai",
        age: 23
    })
    return(
        <>
            <h2>Hello this is props compo</h2>
            <Func4compo />
            <Class4compo value = {{data, setData}} value2 ={{data2, setData2}} />
        </>
    )
}

export default Props4compo;