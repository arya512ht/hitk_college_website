import React, { useState, useEffect } from "react";
import { getUsers, deleteUser } from "../service/api";
import "./ViewStudent.css";
import { useNavigate } from 'react-router-dom';

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

    const handleDelete = async (id) => {
        try {
            // Call the deleteUser API to delete the user
            await deleteUser(id);

            // After successful deletion, update the state to refresh the users list
            const updatedUsers = users.filter((user) => user._id !== id);
            setUsers(updatedUsers);
        } catch (error) {
            console.log('Error while deleting user', error);
        }
    };

    const handleEdit = (user) => {
        // Navigate to the edit page with the selected user details as state
        navigate(`/EditStudent/${user._id}`, { state: { user } });
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
                                            <th>Action</th>
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
                                                        width="50px"
                                                        height="50px"
                                                        style={{borderRadius:"10px"}}
                                                    />
                                                </td>
                                                <td>
                                                <button type="button" class="btn btn-outline-success" onClick={() => handleEdit(user)}>Edit</button>
                                                    <button type="button" class="btn btn-outline-danger" onClick={() => handleDelete(user._id)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <button type="button" class="btn btn-primary" onClick={handleLogout} style={{marginTop:"10px"}}>Log Out</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewStudent;


