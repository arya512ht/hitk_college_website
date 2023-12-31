import React, { useState } from "react";
import './StudentLogin.css';
import { getUsersdata } from "../service/api";
import { useNavigate } from "react-router-dom"; // Import the getUsersdata function

const PaymentVerify = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        userpassword: '',
    });

    const [loginFailed, setLoginFailed] = useState(false);

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await getUsersdata({ uname: user.username });
            const userData = response.data;
            console.log("User Data from Server:", userData);

            if (!userData) {
                console.log("User not found.");
                setLoginFailed(true);
                return;
            }

            if (userData.pass === user.userpassword) {
                if (!userData.verified) {
                    console.log("Login Failed. User not verified.");
                    setLoginFailed(true);
                    return;
                }
                console.log("Login Successful!");
                navigate('/know', { state: { user: userData } });
            } else {
                console.log("Login Failed. Invalid credentials.");
                setLoginFailed(true);
            }
        } catch (error) {
            console.log("Error while logging in", error);
        }
    };

    // ... Rest of the code ...


    return (
        <>
            <div className="loginClass">
                <div className="container  mb-5">
                    <form onSubmit={handleLogin}>
                        <div className="container form pb-4">
                            <h5 className="text-center pt-3">Student Login</h5>
                            <hr></hr>
                            <div className="row">
                                <div className="col-12 col-md-12 form-filed">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">User Name</label>
                                        <input type="text" name="username" onChange={onValueChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter UserName" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-12 form-filed">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">PassWord </label>
                                        <input type="password" name="userpassword" onChange={onValueChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Password" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="submit-btn">
                                        <input type="reset" value={'Reset'} className="mr-2"></input>
                                        <button type="submit" className={'btn-submit'}>Submit</button>
                                    </div>
                                    {loginFailed && <p>Login Failed.</p>}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PaymentVerify;