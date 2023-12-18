import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const responce = await fetch("http://localhost:3400/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userDetails.email,
        password: userDetails.password,
      }),
    });
    const json = await responce.json();
    console.log(json);

    if (!json.success) {
      alert("Failed to register");
    }
  };

  const onChange = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={userDetails.email}
                onChange={onChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={userDetails.password}
                onChange={onChange}
              />
            </div>

            <button type="submit" className="m-3 btn btn-primary">
              Submit
            </button>
            <Link to="/signup" className="m-3 btn btn-danger">
              Want to Register!
            </Link>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
