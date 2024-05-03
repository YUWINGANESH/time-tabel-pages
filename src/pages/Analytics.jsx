import React, { useState } from "react";
import { LiaBookSolid } from "react-icons/lia";
import "../styles/Subjects.css"; // Adjust the path to the CSS file

const Subjects = () => {
  const [subjectData, setSubjectData] = useState([]);
  const [newSubject, setNewSubject] = useState({
    name: "",
    id: "",
    type: "",
    department: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSubject({ ...newSubject, [name]: value });
  };

  const handleAddSubject = () => {
    if (
      newSubject.name &&
      newSubject.id &&
      newSubject.type &&
      newSubject.department
    ) {
      setSubjectData([...subjectData, newSubject]);
      setNewSubject({ name: "", id: "", type: "", department: "" });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <>
      <div className="subjects-container">
        <header>
          <h1>College Timetable</h1>
        </header>

        <main>
          <h2>
            <LiaBookSolid /> Add Subject
          </h2>
          <div className="form-group">
            <label htmlFor="subjectName">Subject Name:</label>
            <input
              type="text"
              id="subjectName"
              name="name"
              value={newSubject.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subjectId">Subject ID:</label>
            <input
              type="text"
              id="subjectId"
              name="id"
              value={newSubject.id}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subjectType">Subject Type:</label>
            <select
              id="subjectType"
              name="type"
              value={newSubject.type}
              onChange={handleInputChange}
            >
              <option value="">Select Type</option>
              <option value="Regular">Regular</option>
              <option value="Elective">Elective</option>
              <option value="Lab">Lab</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <select
              id="department"
              name="department"
              value={newSubject.department}
              onChange={handleInputChange}
            >
              <option value="">Select Department</option>
              <option value="AERONAUTICAL ENGINEERING">
                AERONAUTICAL ENGINEERING
              </option>
              <option value="AGRICULTURAL ENGINEERING">
                AGRICULTURAL ENGINEERING
              </option>
              <option value="ARTIFICIAL INTELLIGENCE AND DATA SCIENCE">
                ARTIFICIAL INTELLIGENCE AND DATA SCIENCE
              </option>
              <option value="ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING">
                ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING
              </option>
              <option value="AUTOMOBILE ENGINEERING">
                AUTOMOBILE ENGINEERING
              </option>
              <option value="BIOMEDICAL ENGINEERING">
                BIOMEDICAL ENGINEERING
              </option>
              <option value="BIOTECHNOLOGY">BIOTECHNOLOGY</option>
              <option value="CHEMISTRY">CHEMISTRY</option>
              <option value="CIVIL ENGINEERING">CIVIL ENGINEERING</option>
              <option value="COMPUTER SCIENCE AND BUSINESS SYSTEMS">
                COMPUTER SCIENCE AND BUSINESS SYSTEMS
              </option>
              <option value="COMPUTER SCIENCE AND DESIGN">
                COMPUTER SCIENCE AND DESIGN
              </option>
              <option value="COMPUTER SCIENCE AND ENGINEERING">
                COMPUTER SCIENCE AND ENGINEERING
              </option>
              <option value="COMPUTER TECHNOLOGY">COMPUTER TECHNOLOGY</option>
              <option value="ELECTRICAL AND ELECTRONICS ENGINEERING">
                ELECTRICAL AND ELECTRONICS ENGINEERING
              </option>
              <option value="ELECTRONICS AND COMMUNICATION ENGINEERING">
                ELECTRONICS AND COMMUNICATION ENGINEERING
              </option>
              <option value="ELECTRONICS AND INSTRUMENTATION ENGINEERING">
                ELECTRONICS AND INSTRUMENTATION ENGINEERING
              </option>
              <option value="FASHION TECHNOLOGY">FASHION TECHNOLOGY</option>
              <option value="FOOD TECHNOLOGY">FOOD TECHNOLOGY</option>
              <option value="HUMANITIES">HUMANITIES</option>
              <option value="INFORMATION SCIENCE AND ENGINEERING">
                INFORMATION SCIENCE AND ENGINEERING
              </option>
              <option value="INFORMATION TECHNOLOGY">
                INFORMATION TECHNOLOGY
              </option>
              <option value="MATHEMATICS">MATHEMATICS</option>
              <option value="MECHANICAL ENGINEERING">
                MECHANICAL ENGINEERING
              </option>
              <option value="MECHATRONICS ENGINEERING">
                MECHATRONICS ENGINEERING
              </option>
              <option value="PHYSICAL EDUCATION">PHYSICAL EDUCATION</option>
              <option value="PHYSICS">PHYSICS</option>
              <option value="SCHOOL OF MANAGEMENT STUDIES">
                SCHOOL OF MANAGEMENT STUDIES
              </option>
              <option value="TEXTILE TECHNOLOGY">TEXTILE TECHNOLOGY</option>
            </select>
          </div>

          <button className="btn" onClick={handleAddSubject}>
            Add Subject
          </button>

          <h2>Subject List</h2>
          <ul>
            {subjectData.map((subject, index) => (
              <li key={index}>
                <strong>Name:</strong> {subject.name}, <strong>ID:</strong>{" "}
                {subject.id}, <strong>Type:</strong> {subject.type},{" "}
                <strong>Department:</strong> {subject.department}
              </li>
            ))}
          </ul>
        </main>
      </div>
      <footer>
        <p>&copy; 2024 College Timetable. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Subjects;
