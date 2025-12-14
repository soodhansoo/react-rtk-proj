import React from "react";
import "./CustomModal.css";
import { useSelector } from "react-redux";

const CustomModal = ({id, showPopup, setShowPopup}) => {
  const allusers = useSelector((state) => state.app.users);

  const singleUser = allusers.filter((user) => user.id === id);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={()=> setShowPopup(false)} >Close</button>    

        <h1>Single User</h1>
        <h6>Name: {singleUser[0].name}</h6>    
        <h6>Email: {singleUser[0].email}</h6>    
        <h6>Age: {singleUser[0].age}</h6>    
        <h6>Gender: {singleUser[0].gender}</h6>    

      </div>
    </div>
  );
};

export default CustomModal;
