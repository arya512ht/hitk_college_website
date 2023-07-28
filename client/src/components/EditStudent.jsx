import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { editUser } from "../service/api";
import './EditStudent.css'

const EditStudent = () => {
  const location = useLocation();
  const { user } = location.state;

  const navigate = useNavigate();

  const [editedUser, setEditedUser] = useState({ ...user });

  useEffect(() => {
    setEditedUser({ ...user });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      // Call the API to update the user
      await editUser(user._id, editedUser);

      // Redirect back to the view student page
      navigate('/Main');
    } catch (error) {
      console.log('Error while updating user', error);
    }
  };

  return (
    <div className="editStudentContainer">
      <h2 className="editStudentHeading">Edit Student Details</h2><hr></hr>
      <h4 className="text-center" style={{ color:'#E9B384'}}>Personal Information</h4>
      
      
      <div className="inputRow">
        <div className="inputColumn">
          <label className="editStudentLabel">Name:</label>
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleChange}
            className="editStudentInput"
              />
          </div>
         
        <div className="inputColumn">
          <label className="editStudentLabel">Father's Name:</label>
          <input
            type="text"
            name="fname"
            value={editedUser.fname}
            onChange={handleChange}
            className="editStudentInput"
               />
          </div>
        
        <div className="inputColumn">
          <label className="editStudentLabel">Mother's Name:</label>
          <input
            type="text"
            name="mname"
            value={editedUser.mname}
            onChange={handleChange}
            className="editStudentInput"
              />
          </div>
      
      </div>
      <div className="inputRow">
        <div className="inputColumn">
          <label className="editStudentLabel">Mobile No:</label>
          <input
            type="number"
            name="mobile"
            value={editedUser.mobile}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
        <div className="inputColumn">
          <label className="editStudentLabel">Email Id:</label>
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
        <div className="inputColumn">
          <label className="editStudentLabel">Date Of Birth:</label>
          <input
            type="date"
            name="dob"
            value={editedUser.dob}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
      </div>
      <div className="inputRow">
        <div className="inputColumn">
          <label className="editStudentLabel">Gender:</label>
          <input
            type="text"
            name="gender"
            value={editedUser.gender}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
        <div className="inputColumn">
          <label className="editStudentLabel">Religion:</label>
          <input
            type="text"
            name="rel"
            value={editedUser.rel}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
        <div className="inputColumn">
          <label className="editStudentLabel">User Name:</label>
          <input
            type="text"
            name="uname"
            value={editedUser.uname}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
      </div>
      <div className="inputRow">
        <div className="inputColumn">
          <label className="editStudentLabel">Password:</label>
          <input
            type="text"
            name="pass"
            value={editedUser.pass}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
        <div className="inputColumn">
          <label className="editStudentLabel">Street:</label>
          <input
            type="text"
            name="street"
            value={editedUser.street}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
        <div className="inputColumn">
          <label className="editStudentLabel">Post Office:</label>
          <input
            type="text"
            name="post"
            value={editedUser.post}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
      </div>
      <div className="inputRow">
        <div className="inputColumn">
          <label className="editStudentLabel">District:</label>
          <input
            type="text"
            name="dist"
            value={editedUser.dist}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
        <div className="inputColumn">
          <label className="editStudentLabel">Pin Code:</label>
          <input
            type="number"
            name="pin"
            value={editedUser.pin}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
        <div className="inputColumn">
          <label className="editStudentLabel">State:</label>
          <input
            type="text"
            name="state"
            value={editedUser.state}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
      </div>
      <h4 className="text-center" style={{ color: '#E9B384' }}>Acadamic Details</h4>
      <div className="inputRow">
        
        <div className="inputColumn">
          <label className="editStudentLabel">Roll Number:</label>
          <input
            type="number"
            name="roll"
            value={editedUser.roll}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
        <div className="inputColumn">
          <label className="editStudentLabel">Course:</label>
          <input
            type="text"
            name="course"
            value={editedUser.course}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
        <div className="inputColumn">
          <label className="editStudentLabel">Department:</label>
          <input
            type="text"
            name="department"
            value={editedUser.department}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
        <div className="inputColumn">
          <label className="editStudentLabel">Admission Date:</label>
          <input
            type="date"
            name="adate"
            value={editedUser.adate}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
      </div>
      <h4 className="text-center" style={{ color: '#E9B384' }}>Admin Section</h4>
      <div className="inputRow">

        
        <div className="inputColumn">
          <label className="editStudentLabel">Payment Status:</label>
          <input
            type="text"
            name="payment"
            value={editedUser.payment}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
        <div className="inputColumn">
          <label className="editStudentLabel">Academic CGPA:</label>
          <input
            type="text"
            name="cgpa"
            value={editedUser.cgpa}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
        <div className="inputColumn">
          <label className="editStudentLabel">Academic Status:</label>
          <input
            type="number"
            name="performance"
            value={editedUser.performance}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
        
        <div className="inputColumn">
          <label className="editStudentLabel">Class Attendance:</label>
          <input
            type="text"
            name="attendance"
            value={editedUser.attendance}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
        <div className="inputColumn">
          <label className="editStudentLabel">Attendence Percentage:</label>
          <input
            type="number"
            name="apercentage"
            value={editedUser.apercentage}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
        <div className="inputColumn">
          <label className="editStudentLabel">Overall Performance:</label>
          <input
            type="text"
            name="operformance"
            value={editedUser.operformance}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
        <div className="inputColumn">
          <label className="editStudentLabel">Overall Progress:</label>
          <input
            type="number"
            name="progress"
            value={editedUser.progress}
            onChange={handleChange}
            className="editStudentInput"
          />
        </div>
        
      </div>
      
      
      {/* Add other input fields for other user properties */}
      <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditStudent;


