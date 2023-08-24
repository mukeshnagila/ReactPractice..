import { Component } from "react";

class Class4compo extends Component{
    constructor(props){
        super(props)
            console.log(props.value2);
    }
    
    render(){
        return(
            <>
                <h2>Hello this is class compo</h2>
                {this.props.value2.data2.name}
            </>
        )
    }
}

export default Class4compo;