import React  from "react";
import { Redirect } from "react-router-dom";
class Pagenotfound extends React.Component{
    constructor(){
        super();
        this.state={
            redirect:null,
            count:3
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                redirect:"/form",
                // count:count-1
            })
        },3000)
    }
    render(){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }
        return(
            <div>
                <h1>404 Pagenotfound</h1>
                <p className="error">Page Redirect within 3 second.....</p>
            </div>
        )
    }
}
export default Pagenotfound;