import React, { useState } from "react";
import './AdmissionStyle.css';
import { NavLink } from "react-router-dom";
import { addUser, checkUsernameAvailability } from "../service/api.js";
import { ChakraProvider, useToast } from '@chakra-ui/react'



const Admission = () => {
    const toast = useToast()

    const [user, setUser] = useState({
        name: '',
        fname: '',
        mname: '',
        dob: '',
        mobile: '',
        email: '',
        gender: '',
        rel: '',
        image: '',
        uname: '',
        pass: '',
        street: '',
        post: '',
        police: '',
        dist: '',
        state: '',
        pin: '',
        course: '',
        department: '',
        roll: '',
        adate: '',

    })

    const fileData = (e) => {
        const imageFile = e.target.files[0];

        // Check if the file size is within 500KB (500 * 1024 bytes)
        if (imageFile.size > 500 * 1024) {
            alert("Image size should be within 500KB.");
            return;
        }

        // Check if the file extension is either jpg or jpeg
        const allowedExtensions = /(\.jpg|\.jpeg)$/i;
        if (!allowedExtensions.test(imageFile.name)) {
            alert("Only JPG or JPEG images are allowed.");
            return;
        }

        setUser({ ...user, image: imageFile });
    };


    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }



    const submitForm = async (e) => {
        e.preventDefault();

        const { image, name, fname, mname, dob, mobile, email, gender, rel, uname, pass, street, post, police, dist, state, pin, course, department, roll, adate } = user

        // Check username availability
        const usernameAvailable = await checkUsernameAvailability({ uname: user.uname });
        if (!usernameAvailable.available) {
            alert("Username is already taken. Please choose a different username.");
            return;
        }

        // Check if the roll number is a 6-digit number
        if (!/^\d{6}$/.test(user.roll)) {
            alert("Roll number must be a 6-digit number.");
            return;
        }

        // Validate mobile number for Indian numbers and 10-digit length
        const mobileRegex = /^[6-9]\d{9}$/;
        if (!mobileRegex.test(mobile)) {
            alert("Enter a valid 10-digit Indian mobile number");
            return;
        }

        // Check for 6-digit pin code
        const pinRegex = /^\d{6}$/;
        if (!pinRegex.test(pin)) {
            alert("Pin code must be 6 digits.");
            return;
        }

        // Check for valid email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Check if the date of birth is before today's date
        const today = new Date();
        const selectedDOB = new Date(dob);
        if (selectedDOB >= today) {
            alert("Date of birth should be before today's date.");
            return;
        }

        // Calculate the minimum admission date based on the date of birth
        const dateOfBirth = new Date(dob);
        const minAdmissionDate = new Date(dateOfBirth);
        minAdmissionDate.setFullYear(dateOfBirth.getFullYear() + 17);

        // Check if the selected admission date is at least 17 years after the date of birth
        const selectedAdmissionDate = new Date(adate);
        if (selectedAdmissionDate < minAdmissionDate) {
            alert("Admission date should be at least 17 years after the date of birth.");
            return;
        }

        // Check if the selected admission date is after today's date
        if (selectedAdmissionDate > today) {
            alert("Admission date cannot be after today's date.");
            return;
        }

        // Change the image file name to username.extension
        const username = user.uname;
        const originalFileName = user.image.name;
        const fileExtension = originalFileName.split('.').pop();
        const newFileName = `${username}.${fileExtension}`;
        const renamedImageFile = new File([user.image], newFileName, { type: user.image.type });

        if (!name) {
            alert("Enter Your Name");
        } else if (!fname) {
            alert("Enter Your Father's Name");
        } else if (!mname) {
            alert("Enter Your Mother's Name");
        } else if (!dob) {
            alert("Enter Date Of Birth");
        } else if (!mobile) {
            alert("Enter Your Mobile");
        } else if (!email) {
            alert("Enter Your Email");
        } else if (!gender) {
            alert("Select Your Gender");
        } else if (!rel) {
            alert("Select Your Religion");
        } else if (!image) {
            alert("Select Your Image");
        } else if (!uname) {
            alert("Enter Your User Name");
        } else if (!pass) {
            alert("Enter your Password");
        } else if (!street) {
            alert("enter Your street or vill or city");
        } else if (!post) {
            alert("Enter Your post");
        } else if (!police) {
            alert("Enter Your Police Station");
        } else if (!dist) {
            alert("Enter Your Police Station");
        } else if (!state) {
            alert("Enter Your State");
        } else if (!pin) {
            alert("Enter Your Pin Code");
        } else if (!course) {
            alert("Select Your course");
        } else if (!department) {
            alert("enter your department");
        }
        else if (!roll) {
            alert("Enter Roll Number");
        } else if (!adate) {
            alert("Enter Admission Date");
        } else {

            const formData = new FormData();

            formData.append('image', renamedImageFile);
            formData.append('name', user.name)
            formData.append('fname', user.fname)
            formData.append('mname', user.mname)
            formData.append('dob', user.dob)
            formData.append('mobile', user.mobile)
            formData.append('email', user.email)
            formData.append('gender', user.gender)
            formData.append('rel', user.rel)
            formData.append('uname', user.uname)
            formData.append('pass', user.pass)
            formData.append('street', user.street)
            formData.append('post', user.post)
            formData.append('police', user.police)
            formData.append('dist', user.dist)
            formData.append('state', user.state)
            formData.append('pin', user.pin)
            formData.append('course', user.course)
            formData.append('department', user.department)
            formData.append('roll', user.roll)
            formData.append('adate', user.adate)

            try {
                const res = await addUser(formData);
                console.log("API response:", res); // Log the response to check its content

                if (res) {
                    toast({
                        title: res,
                        description: "Registration Successful",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                        position: 'top'
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                } else {
                    toast({
                        title: "Something Went Wrong",
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                        position: 'top'
                    });
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                toast({
                    title: "Error While Submitting Form",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    position: 'top'
                });
            }
        }
    }

    return (
        <>
            <ChakraProvider>

            </ChakraProvider>
            <div className="container-fluid mb-5">
                <form>
                    <h4 className="text-center pt-3">Student Registration Form</h4><hr></hr>

                    <div className="container form pb-4">
                        <h5 className="pt-3">Personal Details</h5><hr></hr>
                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Name <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="name" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Father's Name <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="fname" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Father's Name" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Mother's Name <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="mname" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Mother's Name" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Date Of Birth <span style={{ color: 'red' }}>*</span></label>
                                    <input type="date" name="dob" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Mobile Number <span style={{ color: 'red' }}>*</span></label>
                                    <input type="number" name="mobile" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Mobile" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email Id <span style={{ color: 'red' }}>*</span></label>
                                    <input type="email" name="email" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Eg: demo@gmail.com" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Gender <span style={{ color: 'red' }}>*</span></label>
                                    <select class="form-control" name="gender" onChange={onValueChange} id="exampleFormControlSelect1">
                                        <option selected value={''}>--Select Gender--</option>
                                        <option value={'male'}>Male</option>
                                        <option value={'female'}>Female</option>
                                        <option value={'other'}>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Religion <span style={{ color: 'red' }}>*</span></label>
                                    <select class="form-control" name="rel" onChange={onValueChange} id="exampleFormControlSelect1">
                                        <option selected value={''}>--Select Religion--</option>
                                        <option value={'hinduism'}>Hinduism</option>
                                        <option value={'islam'}>Islam</option>
                                        <option value={'sikh'}>Sikh</option>
                                        <option value={'christianity'}>Christianity</option>
                                        <option value={'buddhism'}>Buddhism</option>
                                        <option value={'sikhism'}>Sikhism</option>
                                        <option value={'jainism'}>Jainism</option>
                                        <option value={'other'}>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Image <span style={{ color: 'red' }}>*</span></label>
                                    <input type="file" name="image" onChange={fileData} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Eg: demo@gmail.com" />
                                </div>
                            </div>
                        </div>



                        <div className="container m-0 p-0">
                            <h5 className="pt-3">Address Details</h5><hr></hr>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Street<span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="street" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Village" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Post Office <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="post" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Post Office" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Police Station <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="police" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Police Station" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">District <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="dist" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your District" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">State <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="state" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your State" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Pin Code <span style={{ color: 'red' }}>*</span></label>
                                    <input type="number" name="pin" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your 6 Digit Pin" />
                                </div>
                            </div>
                        </div>

                        <div className="container m-0 p-0">
                            <h5 className="pt-3">Admission Details</h5><hr></hr>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-6 form-filed">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Course<span style={{ color: 'red' }}>*</span></label>
                                    <select class="form-control" name="course" onChange={onValueChange} id="exampleFormControlSelect1">
                                        <option selected value={''}>--Select Select--</option>
                                        <option value={'B.Tech'}>B.Tech</option>
                                        <option value={'M.Tech'}>M.Tech</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 form-filed">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Department<span style={{ color: 'red' }}>*</span></label>
                                    <select class="form-control" name="department" onChange={onValueChange} id="exampleFormControlSelect1">
                                        <option selected value={''}>--Select Select--</option>
                                        <option value={'CSE'}>Computer Science & Engineering (CSE)</option>
                                        <option value={'CSE-AIML'}>Computer Science & Engineering (Artificial Intelligence
                                            and Machine Learning) (CSE - AI & ML)</option>
                                        <option value={'CSE-IOTCS'}>Computer Science & Engineering (IoT & Cyber Security
                                            including Block Chain Technology) (CSE - IoT & CS)</option>
                                        <option value={'CSE-DESC'}>Computer Science & Engineering (Data Science)
                                            (CSE - D.Sc.)</option>
                                        <option value={'CSBS'}>Computer Science and Business Systems (CSBS)</option>
                                        <option value={'ECE'}>Electronics & Communication Engineering (ECE)</option>
                                        <option value={'IT'}>Information Technology (IT)</option>
                                        <option value={'EE'}>Electrical Engineering (EE)</option>
                                        <option value={'AEIE'}>Applied Electronics & Instrumentation Engineering (AEIE)</option>
                                        <option value={'ME'}>Mechanical Engineering (ME)</option>
                                        <option value={'CE'}>Civil Engineering (CE)</option>
                                        <option value={'CHE'}>Chemical Engineering (ChE)</option>
                                        <option value={'BT'}>Biotechnology (BT)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-6 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Roll Number <span style={{ color: 'red' }}>*</span></label>
                                    <input type="number" name="roll" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Roll Number" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Admission Date <span style={{ color: 'red' }}>*</span></label>
                                    <input type="date" name="adate" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Roll Number" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">User Name<span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="uname" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="user@rollnumber" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Password<span style={{ color: 'red' }}>*</span></label>
                                    <input type="password" name="pass" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="create new password" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="submit-btn">
                                    <input type="reset" value={'Reset'} className="mr-2"></input>
                                    <NavLink to={''} className={'btn-submit'} onClick={submitForm}>Submit</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Admission;



