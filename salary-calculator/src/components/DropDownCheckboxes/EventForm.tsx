import { useState } from "react";
import { Event, instructors2023 } from "../../assets/Classes";
import "./EventForm.css";

interface IDropDownCheckboxes {
  event: Event;
  onSave(updatedEvent : Event): void
}

const EventForm = ({ event, onSave }: IDropDownCheckboxes) => {
  // Den variabeln som lagrar ändringarna när man kryssar i checkboxarna
  const [eventData, setEventData] = useState<Event>(event);

  // Lista med alla instruktörer vid start
  const [markedInstructors, setMarkedInstructors] = useState<string[]>(
    event.instructors
  );
  // Innehåller de valdas instruktörerna vid ändring
  const [tempInstructors, setTempInstructors] = useState<string[]>(
    event.instructors
  );

 

  // ---------- Event handlers -------------------
  // Hanterar onChange events och lagrar dom i markedInstructors
  const handleCheckboxChange = (instructorId: string, isChecked: boolean) => {
   const updatedInstructors = [...tempInstructors];


}

     // Event handler for saving changes
  const handleSaveChanges = () => {
    setMarkedInstructors(tempInstructors);
  };

  // Event handler for discarding changes
  const handleDiscardChanges = () => {
    setTempInstructors(markedInstructors);
  };

  return (
    <form>
      <div className="checkbox-select">
        <ul>
          {instructors2023.map((instructor) => {
            return (
              <div className="list-item-container" key={instructor.id}>
                <li
                  className={eventData.instructors.includes(instructor.id)
                      ? "selected-instructor form-list"
                      : "form-list"
                  }
                >
                  <input
                    type="checkbox"
                    id={instructor.id}
                    value={instructor.id}
                    checked={eventData.instructors.includes(instructor.id)}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      handleCheckboxChange(instructor.id, isChecked);
                    }}
                  />
                  <label htmlFor={instructor.id}>{instructor.fullName}</label>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </form>
  );
};

export default EventForm;
