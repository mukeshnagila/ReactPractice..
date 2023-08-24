import {Component} from "react";

class Classcompo extends Component{
    render(){
        return(
                <div class="maindiv">
                     <h2>This is created using Class Component</h2>
                     <p>This is done using external CSS</p>
                     <p style={{color:"red"}}>This is done using Internal CSS</p>
                </div>
        )
    }
}

export default Classcompo;