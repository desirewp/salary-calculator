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
  const handleSaveChanges = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    <form onSubmit={handleSaveChanges}>
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
      <button type="submit">
        <span className="material-symbols-outlined">done</span>
      </button>
    </form>
  );
};

export default EventForm;
