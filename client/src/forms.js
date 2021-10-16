import React, { useState } from 'react'

export const AddStudentForm = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    address: "",
    gpa: "",
    major: "",
    image: ""
  })

  const handleChange = (e) => {
    const newData = { ...data }
    newData[e.target.name] = e.target.value
    setData(newData)
    console.log(newData)
  }

  return (
    <form className="addForm" action="/api/students" method="POST">
      <div className="input-container">
        <label htmlFor="add-name">Name:</label>
        <input onChange={(e) => handleChange(e)} type="text" id="add-name" name="name" value={data.name} />
        <label htmlFor="add-age">Age:</label>
        <input type="number" step="1" min="14" max="100" id="add-age" name="age" />
        <label htmlFor="add-address">Address:</label>
        <input type="text" id="add-address" name="address" />
        <label htmlFor="add-gpa">GPA:</label>
        <input type="number" step="0.01" min="0" max="4.00" id="add-gpa" name="gpa" />
        <label htmlFor="add-major">Major:</label>
        <input type="text" id="add-major" name="major" />
        <label htmlFor="add-image">Image:</label>
        <input type="text" id="add-image" name="image" />
      </div>
      <div className="submit-container">
        <button className="submit" type="submit">Submit Change</button>
      </div>
    </form>
  )
}

export const UpdateStudentForm = () => {
  return (
    <form className="updateForm" action="/api/students" method="POST">
      <div className="input-container">
        <label htmlFor="update-name">Name:</label>
        <input type="text" id="update-name" name="name" />
        <label htmlFor="update-age">Age:</label>
        <input type="number" step="1" min="14" max="100" id="update-age" name="age" />
        <label htmlFor="update-address">Address:</label>
        <input type="text" id="update-address" name="address" />
        <label htmlFor="update-gpa">GPA:</label>
        <input type="number" step="0.01" min="0" max="4.00" id="update-gpa" name="gpa" />
        <label htmlFor="update-major">Major:</label>
        <input type="text" id="update-major" name="major" />
        <label htmlFor="update-image">Image:</label>
        <input type="text" id="update-image" name="image" />
        <label htmlFor="update-id">Student ID:</label>
        <input type="text" maxLength="6" id="update-id" />
      </div>
      <div className="submit-container">
        <button className="submit" type="submit">Submit Change</button>
      </div>
    </form>
  )
}

export const DeleteStudentForm = () => {
  return (
    <form className="deleteForm" action="/api/students" method="POST">
      <div className="input-container">
        <label htmlFor="delete-id">Student ID:</label>
        <input type="text" maxLength="6" id="delete-id" />
      </div>
      <div className="submit-container">
        <button className="submit" type="submit">Submit Change</button>
      </div>
    </form>
  )
}