import React, { useState } from 'react';

function EventCalendar() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    description: '',
  });

  const handleInputChange = (e) => {
    setNewEvent({
      ...newEvent,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({
      title: '',
      date: '',
      description: '',
    });
  };

  return (
    <div style={styles.eventCalendarContainer}>
      <h1>Event Calendar</h1>
      <p>Stay updated on upcoming events, workshops, and activities in our hostel.</p>

      <div style={styles.calendar}>
        <div style={styles.newEventForm}>
          <h2>Add New Event</h2>
          <input
            type="text"
            placeholder="Event Title"
            name="title"
            value={newEvent.title}
            onChange={handleInputChange}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Event Date"
            name="date"
            value={newEvent.date}
            onChange={handleInputChange}
            style={styles.input}
          />
          <textarea
            placeholder="Event Description"
            name="description"
            value={newEvent.description}
            onChange={handleInputChange}
            style={styles.textArea}
          />
          <button onClick={handleAddEvent} style={styles.addButton}>
            Add Event
          </button>
        </div>

        {events.map((event, index) => (
          <div key={index} style={styles.event}>
            <p style={styles.eventTitle}>{event.title}</p>
            <p style={styles.eventDate}>Date: {event.date}</p>
            <p style={styles.eventDescription}>Description: {event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  eventCalendarContainer: {
    padding: '20px',
  },
  calendar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '20px',
  },
  newEventForm: {
    marginBottom: '20px',
  },
  input: {
    marginBottom: '10px',
    padding: '8px',
    width: '100%',
    boxSizing: 'border-box',
  },
  textArea: {
    marginBottom: '10px',
    padding: '8px',
    width: '100%',
    boxSizing: 'border-box',
  },
  addButton: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  event: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  },
  eventTitle: {
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '5px',
  },
  eventDate: {
    fontSize: '14px',
    marginBottom: '5px',
  },
  eventDescription: {
    fontSize: '14px',
  },
};

export default EventCalendar;
