import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const ViewCustomers = (history) => {
  const location = useLocation();
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUser();
  }, [location]);
  const loadUser = async () => {
    axios
      .get(
        ` https://xssatfu8jb.execute-api.ap-south-1.amazonaws.com/customers/${location.state.detail}`
      )
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <div>
        <ul>
          <li>{users.name}</li>
          <li>{users.email}</li>
          <li>{users.contactNo}</li>
          <li>
            <img
              src={users.image}
              style={{ width: "100px", height: "100px" }}
              alt="new"
            />
          </li>
          <li>{users.status}</li>
        </ul>
      </div>
    </div>
  );
};

export default ViewCustomers;
