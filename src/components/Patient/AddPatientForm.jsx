import React, { useState } from "react";

function AddPatientForm({ onAdd }) {
  const [patient, setPatient] = useState({
    room: "",
    nhi: "",
    firstName: "",
    lastName: "",
    age: "",
    resus: "",
    diagnosis: "",
    history: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
    // console.log(patient);
  }

  function submitPatient(event) {
    event.preventDefault();

    const newPatient = {
      ...patient,
      id: patient.nhi,
    };

    fetch('http://localhost:3000/api/patients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPatient),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        onAdd(data);
      })
      .catch(error => console.error('Error adding patient:', error));

    setPatient({
      room: "",
    nhi: "",
    firstName: "",
    lastName: "",
    age: "",
    resus: "",
    diagnosis: "",
    history: ""
    });
  }

  return (
    <div>
      <form onSubmit={submitPatient}>
        <input
          name="room"
          onChange={handleChange}
          value={patient.room}
          placeholder="room"
          required
        />
        <input
          name="nhi"
          onChange={handleChange}
          value={patient.nhi}
          placeholder="nhi"
          required
        />
        <input
          name="firstName"
          onChange={handleChange}
          value={patient.firstName}
          placeholder="first name"
          required
        />
        <input
          name="lastName"
          onChange={handleChange}
          value={patient.lastName}
          placeholder="last name"
          required
        />
        <input
          name="age"
          onChange={handleChange}
          value={patient.age}
          placeholder="age"
          required
        />
        <input
          name="resus"
          onChange={handleChange}
          value={patient.resus}
          placeholder="resus status"
          required
        />
        <input
          name="diagnosis"
          onChange={handleChange}
          value={patient.diagnosis}
          placeholder="diagnosis"
          required
        />
        <input
          name="history"
          onChange={handleChange}
          value={patient.history}
          placeholder="history"
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddPatientForm;
