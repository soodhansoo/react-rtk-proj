import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";
import "./Create.css";
import { useFormik } from "formik";
import { createUserSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  age: "",
  gender: "",
};

const Create = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: createUserSchema,
    onSubmit: (values) => {
      //console.log("Form values:", values);

      dispatch(createUser(values)); 
            navigate("/read");
    },
  });

  //console.log("Current Formik Errors:", errors);

  //const [users, setUsers] = useState({});

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const getUserData = (e) => {
  //   setUsers({ ...users, [e.target.name]: e.target.value });
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(users);

  //   dispatch(createUser(users));
  //   navigate("/read");
  // };

  return (
    <div>
      <h1>Create User</h1>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={values.name}
            //onChange={getUserData}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {<p className="form-error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            //onChange={getUserData}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {<p className="form-error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            name="age"
            //onChange={getUserData}
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {<p className="form-error">{errors.age}</p>}
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            checked={values.gender === "Male"}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Female"
            checked={values.gender === "Female"}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label className="form-check-label">Female</label>
        </div>
        {errors.gender && <p className="form-error">{errors.gender}</p>}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
