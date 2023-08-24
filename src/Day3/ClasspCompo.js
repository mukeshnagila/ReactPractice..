import { Component } from "react";

class ClasspCompo extends Component{
    constructor(props){
        super(props)
        console.log("Hello This Is Prop Class compo", props)
    }

    render(){
        return(
            <>
                <h1>Hello This Is Prop Class compo render</h1>
                {this.props.value2.data5.name}
            </>
        )
    }
}

export default ClasspCompo;