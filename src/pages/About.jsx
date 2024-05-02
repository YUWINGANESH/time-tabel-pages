import React, { useState } from "react";
import "../styles/Faculty.css"; // Adjust the path to the CSS file

const Faculty = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [newFaculty, setNewFaculty] = useState({
    name: "",
    id: "",
    department: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFaculty({ ...newFaculty, [name]: value });
  };

  const handleAddFaculty = () => {
    if (newFaculty.name && newFaculty.id && newFaculty.department) {
      setFacultyData([...facultyData, newFaculty]);
      setNewFaculty({ name: "", id: "", department: "" });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="faculty-container">
      <header>
        <h1>College Timetable</h1>
      </header>

      <main>
        <h2>Add Faculty</h2>
        <div className="form-group">
          <label htmlFor="facultyName">Faculty Name:</label>
          <input
            type="text"
            id="facultyName"
            name="name"
            value={newFaculty.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="facultyId">Faculty ID:</label>
          <input
            type="text"
            id="facultyId"
            name="id"
            value={newFaculty.id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={newFaculty.department}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn" onClick={handleAddFaculty}>
          Add Faculty
        </button>

        <h2>Faculty List</h2>
        <ul>
          {facultyData.map((faculty, index) => (
            <li key={index}>
              <strong>Name:</strong> {faculty.name}, <strong>ID:</strong>{" "}
              {faculty.id}, <strong>Department:</strong> {faculty.department}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Faculty;
