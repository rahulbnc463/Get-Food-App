import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const responce = await fetch("http://localhost:3400/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userDetails.name,
        email: userDetails.email,
        password: userDetails.password,
        location: userDetails.location,
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
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={userDetails.name}
              onChange={onChange}
            />
          </div>
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
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={userDetails.location}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="m-3 btn btn-primary">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user?
          </Link>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Signup;
