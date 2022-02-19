import React from 'react'
import { Table, Button } from 'react-bootstrap';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { BsFillSave2Fill } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
class Record extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            data: []
        }
    }
    componentDidMount() {
        var item = JSON.parse(localStorage.getItem("key"));
        this.setState({
            data: item
        })
    }
    Delete(id) {
        var data = JSON.parse(localStorage.getItem("key"));
        data.splice(id, 1);
        this.setState({
            data
        })
        localStorage.setItem("key", JSON.stringify(data));
    }
    edit(id) {
        console.log("Editable id", id);
        var item = JSON.parse(localStorage.getItem("key"));
        var obj = item[id];
        this.setState({
            id: id,
            username: obj.username,
            password: obj.password
        })
        console.log("Ediatble Object", obj)
    }
    save(id){
        var item = JSON.parse(localStorage.getItem("key"));
        let user = {
            username:this.state.username,
            password:this.state.password
        }
        item.splice(id,1,user);
        this.setState({
            item
        })
        localStorage.setItem("key", JSON.stringify(item));
        window.location="http://localhost:3000/table";
    }
    cancel() {
        window.location = "http://localhost:3000/table";
    }
    render() {
        return (
            <div>
                <h1>Table</h1>
                {
                    this.state.data ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Username</th>
                                        <th>Password</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.data.map((item, id) =>
                                            <tr key={id}>
                                                <td>{id}</td>
                                                <td>{
                                                    this.state.id == id ?
                                                        <span><input type="text"
                                                            value={this.state.username}
                                                            onChange={(e) => { this.setState({ username: e.target.value }) }}
                                                        /></span>
                                                        : <span>{item.username}</span>
                                                }</td>
                                                <td>{
                                                    this.state.id == id ?
                                                        <span><input type="text"
                                                            value={this.state.password}
                                                            onChange={(e) => { this.setState({ password: e.target.value }) }}
                                                        /></span>
                                                        : <span>{item.password}</span>
                                                }</td>
                                                <td>
                                                    {this.state.id == id ?
                                                        <span>
                                                            <Button variant='primary' onClick={()=>{this.save(id)}}
                                                            >
                                                            {<BsFillSave2Fill/>}
                                                            </Button>
                                                            <Button className='del'
                                                                variant='info'
                                                                onClick={() => { this.cancel() }}
                                                            >
                                                                {<ImCancelCircle style={{fontSize:'25px'}}/>}
                                                            </Button>
                                                        </span>
                                                        :
                                                        <span>
                                                            <Button variant="none" onClick={() => { this.edit(id) }}>
                                                            { <FaEdit style={{fontSize:'25px', color:'green'}}/> }
                                                            </Button>
                                                            <Button className='del'
                                                            variant='none'
                                                                onClick={() => { this.Delete(id) }}
                                                            >
                                                                {<AiFillDelete style={{fontSize:'25px',color:'red'}}/>}
                                                            </Button>
                                                        </span>
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>

                        : "Record not Found"
                }
            </div>
        )
    }
}
export default Record;