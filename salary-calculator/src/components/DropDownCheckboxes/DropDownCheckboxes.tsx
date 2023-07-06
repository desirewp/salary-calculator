import { useState } from "react";
import { Event, instructors2023 } from "../../assets/Classes";
import "./DropDownCeckboxes.css";

interface IDropDownCheckboxes {
  event: Event;
}

interface IEventFormData {
  id: string;
  // lessons: number;
  // lessonLength: number;
  instructors: string[];
}

// Hela eventet behöver hämtas in som en usestate Variabel
const DropDownCheckboxes = ({ event }: IDropDownCheckboxes) => {
  const [eventFormData, setEventFormData] = useState<IEventFormData>(event);
  const [orginalEventFormData, setOrginalEventFormData] =
    useState<IEventFormData>(event);

  // ---------- Event handlers -------------------
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Skriver över "sparvariabeln" med den nya datan
    setOrginalEventFormData(eventFormData);
  };

  const handleUndoChanges = () => {
    // Återställer eventet till ordinarie data (ångrar)
    setEventFormData(orginalEventFormData);
  };

  // Hanterar onChange events och lagrar dom i "nya data variabeln" eventFormData
  const handleFormFieldChange = (field: keyof IEventFormData, value: any) => {
    setEventFormData((prevEventFormData) => ({
      ...prevEventFormData,
      [field]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="checkbox-select">
        <ul>
          {instructors2023.map((instructor) => {
            return (
              <div className="list-item-container" key={instructor.id}>
                <li
                  className={
                    eventFormData.instructors.includes(instructor.id)
                      ? "selected-instructor form-list"
                      : "form-list"
                  }
                >
                  <input
                    type="checkbox"
                    id={instructor.id}
                    value={instructor.id}
                    checked={eventFormData.instructors.includes(instructor.id)}
                    onChange={(event) => {
                      const isChecked = event.target.checked;
                      const instructor = event.target.value;

                      handleFormFieldChange(
                        "instructors",
                        isChecked
                          ? [...eventFormData.instructors, instructor]
                          : eventFormData.instructors.filter((i) => {
                              i !== instructor;
                            })
                      );
                    }}
                  />
                  <label htmlFor={instructor.id}>{instructor.fullName}</label>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      {/* <button type="submit">
        Spara! <span className="material-symbols-outlined">done</span>
      </button>
      <button type="button" onClick={handleUndoChanges}>
        Ångra <span className="material-symbols-outlined">close</span>
      </button> */}
    </form>
  );
};

export default DropDownCheckboxes;
