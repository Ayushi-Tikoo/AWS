import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./AddCustomers.css";

const AddCustomers = () => {
  let history = useHistory();
  const [user, setUser] = useState([]);

  const { name, email, password, status, contactNo, image } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://xssatfu8jb.execute-api.ap-south-1.amazonaws.com/customers",
      user,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    history.push("/customers");
  };
  return (
    <div className="content">
      <div className="container">
        <form
          className="form-horizontal"
          id="table-content"
          role="form"
          onSubmit={(e) => onSubmit(e)}
        >
          <h2>Registration Form</h2>
          <div className="form-group">
            <label className="col-sm-3 control-label">Name</label>
            <div className="col-sm-9">
              <input
                type="text"
                id="Name"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">Email</label>
            <div className="col-sm-9">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                className="form-control"
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">Password</label>
            <div className="col-sm-9">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                className="form-control"
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-3 control-label">Contact No</label>
            <div className="col-sm-9">
              <input
                type="text"
                id="contactNo"
                placeholder="ContactNo"
                value={contactNo}
                className="form-control"
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-3 control-label">Status</label>
            <div className="col-sm-9">
              <select
                id="country"
                className="form-control"
                value={status}
                onChange={(e) => onInputChange(e)}
              >
                <option>Active</option>
                <option>Deactive</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-3 control-label">Upload Image</label>
            <div className="col-sm-9">
              <input
                type="file"
                id="Image"
                placeholder="Image"
                value={image}
                className="Image"
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-9 col-sm-offset-3">
              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddCustomers;
