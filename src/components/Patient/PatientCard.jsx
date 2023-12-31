import React from 'react';

function PatientCard({ patient, onDelete }) {
  function handleDelete() {
    fetch(`/api/patients/${patient.id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          onDelete(patient.id);
        } else {
          console.error('Error deleting patient:', response.status);
        }
      })
      .catch(error => console.error('Error deleting patient:', error));
  }

  return (
    <div className="patient-card">
      <button onClick={handleDelete}>Delete</button>
      <button>Edit</button>

      <p><strong>Room:</strong>{patient.room} | <strong>NHI:</strong>{patient.nhi}</p>
      <h1>{patient.lastName}, {patient.firstName}</h1>
      <p><strong>Age:</strong>{patient.age} | <strong>Resus:</strong>{patient.resus}</p>
      <p><strong>Diagnosis:</strong>{patient.diagnosis}</p>
      <p><strong>History:</strong>{patient.history}</p>

      <button>Vital Signs</button>
      <button>Notes</button>
      <button>Plan</button>
    </div>
  );
}

export default PatientCard;
