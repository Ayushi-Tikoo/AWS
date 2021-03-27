import React, { useState, useEffect } from "react";
import { Link, Route, Redirect, useHistory } from "react-router-dom";
import axios from "axios";

const Customers = (props) => {
  let history = useHistory();
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    axios
      .get(`https://xssatfu8jb.execute-api.ap-south-1.amazonaws.com/customers`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        console.log(users.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="content">
      <div className="container py-4">
        <div className="table-responsive" id="table-content">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact No</th>
                <th>Status</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.contactNo}</td>
                  <td>{user.status}</td>
                  <td>
                    <img
                      src={user.image}
                      style={{ width: "100px", height: "100px" }}
                      alt="new"
                    />
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        history.push({
                          pathname: "/customers/view/" + user.id,
                          state: { detail: user.id },
                        })
                      }
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
