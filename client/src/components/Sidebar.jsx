import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

class Sidebar extends React.Component {
  Show = () => {
    if (document.getElementById("submenu").style.display === "block") {
      document.getElementById("submenu").style.display = "none";
    } else {
      document.getElementById("submenu").style.display = "block";
    }
  };
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 m-0 p-0">
              <div className="sidebar">
                <div className="sidebar-top">
                  <p>
                    <b>HITK</b>
                  </p>
                </div>
                <div id="sidebar-bottom">
                  <nav>
                    <NavLink to="/" className="nav" id="nav1">
                      <i class="fas fa-tachometer-alt"></i> Dashboard
                    </NavLink>
                    <NavLink to="" className="nav" onClick={this.Show}>
                      <i class="fas fa-user"></i> Student{" "}
                      <i id="drop" class="fas fa-plus"></i>
                    </NavLink>
                    <div id="submenu">
                      <NavLink to="/pages/AddStudent" className="nav">
                        <i class="far fa-circle"></i>Add New Student
                      </NavLink>
                      <NavLink to="/ViewStudent" className="nav">
                        <i class="far fa-circle"></i> View Student Details
                      </NavLink>
                    </div>
                    <NavLink to="/" className="nav">
                      <i class="fas fa-user"></i> Teacher{" "}
                      <i id="drop1" class="fas fa-plus"></i>
                    </NavLink>
                    <NavLink to="/" className="nav">
                      <i class="fas fa-users"></i> Staff{" "}
                      <i id="drop1" class="fas fa-plus"></i>
                    </NavLink>
                    <NavLink to="/" className="nav">
                      <i class="fas fa-bus"></i> Transport{" "}
                      <i id="drop1" class="fas fa-plus"></i>
                    </NavLink>
                    <NavLink to="/" className="nav">
                      <i class="fas fa-book"></i> Book{" "}
                      <i id="drop1" class="fas fa-plus"></i>
                    </NavLink>
                    <NavLink to="/" className="nav">
                      <i class="far fa-calendar-alt"></i> Attendance{" "}
                      <i id="drop1" class="fas fa-plus"></i>
                    </NavLink>

                    <div className="title">
                      <span>ADMINISTRATOR</span>
                    </div>
                    <NavLink to="/" className="nav">
                      <i class="far fa-user"></i> Add User
                    </NavLink>
                    <div className="title">
                      <span>Report</span>
                    </div>
                    <NavLink to="/" className="nav">
                      <i class="far fa-plus-square"></i> Admission Report
                    </NavLink>
                    <NavLink to="/" className="nav">
                      <i class="far fa-plus-square"></i> Course Report
                    </NavLink>
                    <NavLink to="/" className="nav">
                      <i class="far fa-plus-square"></i> Staff Report
                    </NavLink>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
