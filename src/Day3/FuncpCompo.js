function FuncpCompo(props){
    console.log(props.data4);
    return(
        <>
            <h2>Hello... By function</h2>
            <h3>{props.data}</h3>
            <h4>{props.data2}</h4>
            <h4>{props.data3.name}</h4>
        </>
    )
}

export default FuncpCompo;