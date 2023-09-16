import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Users() {
    const [users, setUsers] = useState([{
        Name: "devangi" , Email: "devangibhalodiya2305@gmail.com" , Age: 22 , address: "nikol"
    }])


    return (
        <div className='d-flex vh-100 bg-success justify-content-center align-items-center btn-danger           '>
            <div className='w-50 bg-white rounded p-4 h-5'>
            <h1 className='mb-3'>User List</h1>
            <Link to="/create" className="btn btn-success">Add +</Link>
            <table className='table table-striped table-bordered'>
                    
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=> {
                                return (<tr>
                                    <td>{user.Name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Age}</td>
                                    <td><Link to="/Update" className="btn btn-success">Update</Link><button className="btn btn-danger">Delete</button></td>
                                </tr>)
                            }) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users 