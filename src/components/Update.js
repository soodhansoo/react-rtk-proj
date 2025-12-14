import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

const Update = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const nevigate = useNavigate();

  const [updateData, setUpdateData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });

  const users = useSelector((state) => state.app.users); // adjust slice key
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((user) => user.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);

  //console.log(updateData);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    nevigate("/read");
  };

  return (
    <div>
      <h1>Update User</h1>
      {/* <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}> */}
      <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={updateData.name || ""}
            onChange={newData}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={updateData.email || ""}
            onChange={newData}
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            name="age"
            value={updateData.age || ""}
            onChange={newData}
          />
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"   
            checked={updateData.gender === "Male"}
            onChange={newData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Female"   
            checked={updateData.gender === "Female"}
            onChange={newData}
          />
          <label className="form-check-label">Female</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
