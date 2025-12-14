import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";
import { deleteUser } from "../features/userDetailSlice";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();

  const { users, loading, searchData } = useSelector((state) => state.app);

  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [radioData, setRadioData] = useState("");

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}

      <h1>All Data</h1>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="all"
          checked={radioData === ""}
          onChange={(e) => setRadioData("")}
        />
        <label className="form-check-label" htmlFor="all">
          All
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="male"
          value="Male"
          checked={radioData === "Male"}
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label" htmlFor="male">
          Male
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="female"
          value="Female"
          checked={radioData === "Female"}
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label" htmlFor="female">
          Female
        </label>
      </div>
      {users &&
        users
          .filter((ele) => {
            if (searchData.length === 0) {
              return ele;
            } else {
              return ele.name.toLowerCase().includes(searchData.toLowerCase());
            }
          })
          .filter((ele) => {
            if(radioData === ""){
              return true;
            }
            else{
              return ele.gender === radioData;
            }
          })
          .map((u) => (
            <div
              key={u.id}
              className="card w-50 mx-auto my-2"
              style={{ marginRight: "10px" }}
            >
              <div className="card-body">
                <h5 className="card-title">{u.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{u.email}</h6>
                {/* <p className="card-text">{u.age}</p> */}
                <h6 className="card-subtitle mb-2 text-muted">{u.gender}</h6>
                <a
                  href="#"
                  className="card-link"
                  onClick={() => [setId(u.id), setShowPopup(true)]}
                >
                  View
                </a>
                <Link to={`/edit/${u.id}`} className="card-link">
                  Edit
                </Link>
                <a
                  href="#"
                  className="card-link"
                  onClick={() => dispatch(deleteUser(u.id))}
                >
                  Delete
                </a>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Read;
