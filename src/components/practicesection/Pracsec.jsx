import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./practicesection.css";
import Back from "../common/back/Back";

const PracticeSection = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Array of topics for DSA
  const dsaTopics = ["Topic 1", "Topic 2", "Topic 3", "Topic 4"]; // Add more topics as needed

  return (
    <>
      <Back title="Practice Section" />
      <div className="container" style={{top:"-150px"}}>
        <ul className="button-list">
          <li>
            <Link to="/pracsec/aptitude" className="button solid">
              <button>Aptitude</button>
            </Link>
          </li>
          <li>
            <Link to="/pracsec/compre" className="button solid">
              <button>Comprehension</button>
            </Link>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn" onClick={toggleDropdown}>DSA</button>
              {showDropdown && (
                <div className="dropdown-content" style={{marginTop:"2%",marginLeft:"50px"}}>
                  <ul>
                  <li>
                    <Link to="/pracsec/DSA/Array" className="button solid"><button style={{fontSize:"10px", margin:"10px"}}>Arrays</button></Link>
                  </li>
                  <li>
                    <Link to="/pracsec/DSA/Stack" className="button solid"><button style={{fontSize:"10px", margin:"10px"}}>Stacks</button></Link>
                  </li>
                  <li>
                    <Link to="/pracsec/DSA/Queue" className="button solid"><button style={{fontSize:"10px", margin:"10px"}}>Queues</button></Link>
                  </li>
                  <li>
                    <Link to="/pracsec/DSA/LinkedList" className="button solid"><button style={{fontSize:"10px", margin:"10px"}}>Linked List</button></Link>
                  </li>
                  <li>
                    <Link to="/pracsec/DSA/Tree" className="button solid"><button style={{fontSize:"10px", margin:"10px"}}>Tree</button></Link>
                  </li>
                  <li>
                    <Link to="/pracsec/DSA/Graph" className="button solid"><button style={{fontSize:"10px", margin:"10px"}}>Graph</button></Link>
                  </li>
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PracticeSection;
