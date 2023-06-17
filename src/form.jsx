import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [stuData, setStuData] = useState({
    name: '',
    age: '',
    id: '',
    home_address: '',
    phone_number:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStuData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(stuData);

    setStuData({
      name: '',
      age: '',
      id: '',
      home_address: '',
      phone_number:''
    });
  };

  return (
    <div className="Form">
      <div className="container">
        <h1>Student Form</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder='Enter your name'
              value={stuData.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Age:
            <input
              type="number"
              name="age"
              placeholder='Enter your age'
              value={stuData.age}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Id:
            <input
              type="text"
              name="id"
              placeholder='Enter your id'
              value={stuData.id}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Home_Address:
            <textarea
              name="home_address"
              placeholder='Enter your home address'
              value={stuData.home_address}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            phone_number:
            <textarea
              name="phone_number"
              placeholder='Enter your phone number'
              value={stuData.phone_number}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
