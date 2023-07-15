import { useState } from "react";
import { Event, instructors2023 } from "../../assets/Classes";
import "./EventForm.css";

interface IDropDownCheckboxes {
  event: Event;
  onSave(updatedEvent: Event): void;
}

const EventForm = ({ event, onSave }: IDropDownCheckboxes) => {
  // Fyll på med fält när formuläret byggs ut
  const [instructors, setInstructors] = useState<string[]>(event.instructors);

  // ---------- Event handlers -------------------
  const handleSaveChanges = () => {
    const updatedEvent = new Event(
      event.id,
      event.eventName,
      event.startDate,
      event.lessons,
      event.lessonLength,
      event.price,
      instructors,
      false //Stänger edit mode
    );
    onSave(updatedEvent);
  };

  const handleClose = () => {
    const updatedEvent = new Event(
      event.id,
      event.eventName,
      event.startDate,
      event.lessons,
      event.lessonLength,
      event.price,
      event.instructors,
      false //Stänger edit mode
    );
    onSave(updatedEvent);
  };

  // Hanterar onChange events och lagrar dom i markedInstructors
  const handleCheckboxChange = (instructor: string) => {
    // Om instruktören finns redan så tas den bort från arrayen annars så läggs hen till
    const updatedInstructors = instructors.includes(instructor)
      ? instructors.filter((alreadyAddedInstructor) => {
          return alreadyAddedInstructor !== instructor;
        })
      : [...instructors, instructor];
    setInstructors(updatedInstructors);
  };
  return (
       <tr key={event.id}>
      <td className="event-name-column">
        <p>{event.eventName}</p>
      </td>
      <td className="event-startdate-column">
        <p>{event.startDate}</p>
      </td>
      <td className="event-lessons-column">
        <p>
          {event.lessons} x {event.lessonLength}h
        </p>
      </td>
      <td className="event-lesson-length-column">
        <p>{event.lessons * event.lessonLength} h</p>
      </td>
      <td className="event-price-column">
        <input type="number" name="price" id="price-input" className="event-input"  value={event.price}/><p>SEK</p>
      </td>

      <td className="event-instructors-column">
        {/* Instruktör input */}
        <div className="checkbox-select">
          <ul>
            {instructors2023.map((instructor) => {
              return (
                <div className="list-item-container" key={instructor.id}>
                  <li
                    className={
                      instructors.includes(instructor.id)
                        ? "selected-instructor form-list"
                        : "form-list"
                    }
                  >
                    <input
                      type="checkbox"
                      id={instructor.id}
                      value={instructor.id}
                      checked={instructors.includes(instructor.id)}
                      onChange={() => handleCheckboxChange(instructor.id)}
                    />
                    <label htmlFor={instructor.id}>{instructor.fullName}</label>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </td>

      <td className="action-column">
        <button type="button" onClick={handleSaveChanges}>
          <span className="material-symbols-outlined">done</span>
        </button>
        <div>
          <button type="button">
            <span
              className="material-symbols-outlined"
              onClick={() => {
                handleClose();
              }}
            >
              close
            </span>
          </button>
        </div>
      </td>
    </tr>
   
  );
};

export default EventForm;
