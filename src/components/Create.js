import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";
import './Create.css';

const Create = () => {

    const [users, setUsers] = useState({});

    const navigate = useNavigate();

    const dispatch = useDispatch();

    
    const getUserData = (e) => {
        setUsers({...users , [e.target.name] : e.target.value});

        
        

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(users);

        dispatch(createUser(users));
        navigate("/read");

    }

  return (
    <div>
      <h1>Create User</h1>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" name="name" onChange={getUserData}/>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" name="email" onChange={getUserData} />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input type="text" className="form-control" name="age" onChange={getUserData} />
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            checked={users.gender === "Male"}
            onChange={getUserData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            checked={users.gender === "Female"}
            value="Female"  onChange={getUserData}
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

export default Create;
