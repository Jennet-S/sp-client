// // App.jsx
// import React, { useState } from 'react';
// import AddPatientForm from './components/Patient/AddPatientForm';
// import PatientCard from './components/Patient/PatientCard';
// import AddScheduleForm from './components/Schedule/AddScheduleForm';
// import ScheduleCard from './components/Schedule/ScheduleCard';
// import Modal from './components/Common/Modal';
// import './App.css';

// function App() {
//   const [patients, setPatients] = useState([]); 
//   const [schedules, setSchedules] = useState([]);
//   const [isModalOpen, setModalOpen] = useState(false); 
//   const [isScheduleFormOpen, setScheduleFormOpen] = useState(false); 

//   // Add patient function
//   const addPatient = (newPatient) => {
//     setPatients((prevPatients) => [...prevPatients, newPatient]);
//     setModalOpen(false);
//   };

//   // Delete patient function
//   const deletePatient = (id) => {
//     setPatients((prevPatients) => prevPatients.filter((patient) => patient.id !== id));
//   };

//   // Add schedule function
//   const addSchedule = (newSchedule) => {
//     setSchedules((prevSchedules) => [...prevSchedules, newSchedule]);
//     setScheduleFormOpen(false);
//   };

//   // Delete schedule function
//   const deleteSchedule = (id) => {
//     setSchedules((prevSchedules) => prevSchedules.filter((schedule) => schedule.id !== id));
//   };

//   return (
//     <>
//       <h1>Patients</h1>

//       {!isModalOpen && (
//         <button onClick={() => setModalOpen(true)}>Add Patient</button>
//       )}

//       {isModalOpen && (
//         <Modal onClose={() => setModalOpen(false)}>
//           <AddPatientForm onAdd={addPatient} />
//           <button onClick={() => setModalOpen(false)}>Cancel</button>
//         </Modal>
//       )}

//       <div className='patient-card-area'>
//         {patients.map((patientItem) => (
//           <PatientCard
//             key={patientItem.id}
//             {...patientItem}
//             onDelete={() => deletePatient(patientItem.id)}
//           />
//         ))}
//       </div>

//       <h1>Schedule</h1>

//       {!isScheduleFormOpen && (
//         <button onClick={() => setScheduleFormOpen(true)}>
//           Add Schedule Item
//         </button>
//       )}

//       {isScheduleFormOpen && (
//         <div>
//           <AddScheduleForm
//             onAddSchedule={addSchedule}
//             onCancel={() => setScheduleFormOpen(false)}
//           />
//         </div>
//       )}

//       <ScheduleCard patientSchedule={schedules} onDeleteSchedule={deleteSchedule} />
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import AddPatientForm from './components/Patient/AddPatientForm';
import PatientCard from './components/Patient/PatientCard';
import AddScheduleForm from './components/Schedule/AddScheduleForm';
import ScheduleCard from './components/Schedule/ScheduleCard';
import Modal from './components/Common/Modal';
import './App.css';

function App() {
  const [patients, setPatients] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isScheduleFormOpen, setScheduleFormOpen] = useState(false);

  // Add patient function
  const addPatient = (newPatient) => {
    setPatients((prevPatients) => [...prevPatients, newPatient]);
    setModalOpen(false);
  };

  // Delete patient function
  const deletePatient = (id) => {
    setPatients((prevPatients) => prevPatients.filter((patient) => patient.id !== id));
  };

  // Add schedule function
  const addSchedule = (newSchedule) => {
    setSchedules((prevSchedules) => [...prevSchedules, newSchedule]);
    setScheduleFormOpen(false);
  };

  // Delete schedule function
  const deleteSchedule = (id) => {
    setSchedules((prevSchedules) => prevSchedules.filter((schedule) => schedule.id !== id));
  };

  useEffect(() => {
    fetch('/api/patients')
      .then(response => response.json())
      .then(data => setPatients(data))
      .catch(error => console.error('Error fetching patients:', error));

    fetch('/api/schedules')
      .then(response => response.json())
      .then(data => setSchedules(data))
      .catch(error => console.error('Error fetching schedules:', error));
  }, []);

  return (
    <>
      <h1>Patients</h1>

      {!isModalOpen && (
        <button onClick={() => setModalOpen(true)}>Add Patient</button>
      )}

      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <AddPatientForm onAdd={addPatient} />
          <button onClick={() => setModalOpen(false)}>Cancel</button>
        </Modal>
      )}

      <div className='patient-card-area'>
        {patients.map((patientItem) => (
          <PatientCard
            key={patientItem.id}
            {...patientItem}
            onDelete={() => deletePatient(patientItem.id)}
          />
        ))}
      </div>

      <h1>Schedule</h1>

      {!isScheduleFormOpen && (
        <button onClick={() => setScheduleFormOpen(true)}>
          Add Schedule Item
        </button>
      )}

      {isScheduleFormOpen && (
        <div>
          <AddScheduleForm
            onAddSchedule={addSchedule}
            onCancel={() => setScheduleFormOpen(false)}
          />
        </div>
      )}

      <ScheduleCard patientSchedule={schedules} onDeleteSchedule={deleteSchedule} />
    </>
  );
}

export default App;
