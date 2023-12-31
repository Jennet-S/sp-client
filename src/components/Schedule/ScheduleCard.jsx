import React from 'react';

function ScheduleCard({ patientSchedule }) {
  const uniqueHours = [...new Set(patientSchedule.map((item) => item.hour))];

  return (
    <div className='schedule-card'>
      {uniqueHours.map((hour) => (
        <div key={hour}>
          <h2>{hour}</h2>
          {renderScheduleForHour(hour, patientSchedule)}
        </div>
      ))}
    </div>
  );
}

function renderScheduleForHour(hour, patientSchedule) {
  const scheduleForHour = patientSchedule.filter((item) => item.hour === hour);

  return (
    <ul>
      {scheduleForHour.map((item) => (
        <li key={item.id}>
          Time: {item.hour}:{item.min}, Patient ID: {item.patientid}, Task: {item.task}
        </li>
      ))}
    </ul>
  );
}

export default ScheduleCard;
