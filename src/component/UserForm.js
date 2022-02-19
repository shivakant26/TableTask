import React from 'react';
import { Button, Form, Container ,Col ,Row } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
class UserForm extends React.Component {
    constructor(){
        super();
        this.state={
            username:"",
            password:"",
            userError:"",
            passwordError:"",
            redirect:null
        }
    }
    valid(){
        if(this.state.username === "" || this.state.username === null && 
        this.state.password === "" || this.state.password === null){
            this.setState({
                userError:"Required",
                passwordError:"Required"
            })  
        }else if(this.state.username === "" || this.state.username === null){
            this.setState({
                userError:"Required",
            }) 
        }else if(this.state.password === "" || this.state.password === null){
            this.setState({
                passwordError:"Required",
            })
        }else{
            return true;
        }
    }
    save(e){
        e.preventDefault();
        this.setState({
            userError:"",
            passwordError:""
        })  
        if(this.valid()){
            var list = JSON.parse(localStorage.getItem("key"));
            let data = list ? list : [];
            data.push({
                username:this.state.username,
                password:this.state.password
            })
            localStorage.setItem("key",JSON.stringify(data));
            this.setState({
                data,
                username:"",
                password:""
            })
            document.getElementById("myform").reset();
            this.setState({redirect:"/table"})
        }
       
        
    }
    render() {
        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        return (
            <div>
                <h2>Form</h2>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Form id="myform">
                                <Form.Group className="mb-3" controlId="username">
                                    <Form.Control type="email" 
                                    placeholder="Username" 
                                    onChange={(e)=>{this.setState({username:e.target.value})}}
                                    />
                                    <p className='error'>{this.state.userError}</p>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Control type="password" 
                                    placeholder="Password"
                                    onChange={(e)=>{this.setState({password:e.target.value})}} 
                                    />
                                    <p className='error'>{this.state.passwordError}</p>
                                </Form.Group>

                                <Button variant="primary" type="submit" onClick={(e)=>{this.save(e)}}>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
export default UserForm;