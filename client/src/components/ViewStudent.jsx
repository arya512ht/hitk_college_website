import React, { useState, useEffect } from "react";
import { getUsers } from "../service/api";
import "./ViewStudent.css";
import {useNavigate } from 'react-router-dom';
import { Button} from '@mui/material';

const ViewStudent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    };
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/onlinefacility');
    };
    return (
        <div className="view-student">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="body-title">
                            <h1>Welcome To Heritage Institute of Technology Kolkata</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="service-view">
                            <h5>View Student Details</h5>
                            <hr />

                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Sno.</th>
                                            <th>Student Name</th>
                                            <th>Mobile Number</th>
                                            <th>Email Id</th>
                                            <th>Gender</th>
                                            <th>Course</th>
                                            <th>Department</th>
                                            <th>Roll</th>
                                            <th>Image</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user, key) => (
                                            <tr key={key}>
                                                <td>{key + 1}</td>
                                                <td>{user.name}</td>
                                                <td>{user.mobile}</td>
                                                <td>{user.email}</td>
                                                <td>{user.gender}</td>
                                                <td>{user.course}</td>
                                                <td>{user.department}</td>
                                                <td>{user.roll}</td>
                                                <td>
                                                    <img
                                                        src={`http://localhost:8000/uploads/${user.image}`}
                                                        alt="uimage"
                                                        width="30px"
                                                        height="30px"
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                            <Button variant='contained' color='primary' onClick={handleLogout}>
                                Log out
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewStudent;
