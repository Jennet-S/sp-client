import React, { useState } from 'react';

function AddScheduleForm({ onAddSchedule, onCancel }) {
  const [schedule, setSchedule] = useState({
    patientId: '',
    hour: '',
    min: '',
    task: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [name]: value,
    }));
  };

  const submitSchedule = async (e) => {
    e.preventDefault();

    const newSchedule = {
      id: Date.now(),
      ...schedule,
    };

    await onAddSchedule(newSchedule);

    setSchedule({
      patientId: '',
      hour: '',
      min: '',
      task: '',

    });
  };

  return (
    <div>
      <form onSubmit={submitSchedule}>
      <label>
          Patient ID:
          <input
            type="number"
            value={schedule.patientId}
            onChange={handleChange}
            name="patientId"
            placeholder="Enter patient ID"
            required
          />
        </label>
        <label>
          Hour:
          <input
            type="number"
            value={schedule.hour}
            onChange={handleChange}
            name="hour"
            placeholder="Enter hour"
            required
          />
        </label>
        <label>
          Minute:
          <input
            type="number"
            value={schedule.min}
            onChange={handleChange}
            name="min"
            placeholder="Enter minute"
            required
          />
        </label>
        <label>
          Task:
          <input
            type="text"
            value={schedule.task}
            onChange={handleChange}
            name="task"
            placeholder="Enter task"
            required
          />
        </label>
      
        <div>
          <button type="submit">Add</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddScheduleForm;
