import { useEffect, useState } from "react";
import { Event, instructors2023 } from "../../assets/Classes";
import "./DropDownCeckboxes.css";

interface IDropDownCheckboxes {
  event: Event;
}

interface IEventFormData {
  id: string;
  instructors: string[];
}

const DropDownCheckboxes = ({ event }: IDropDownCheckboxes) => {
  // Den variabeln som lagrar ändringarna när man kryssar i checkboxarna
  const [eventFormData, setEventFormData] = useState<IEventFormData>(event);
  
  // Innehåller alla instruktörer som är valda på kursen innehåller ord. instruktörer vid start
  const [markedInstructors, setMarkedInstructors] = useState<string[]>(
    event.instructors
  );


  useEffect(() => {
    addNewInstructorsToEvent();
  }, [markedInstructors]);

  // Lägger till ändringen i det ordinarie eventet
  const addNewInstructorsToEvent = () => {
    setEventFormData((prevData) => ({
      ...prevData,
      instructors: markedInstructors,
    }));
    console.log(markedInstructors);
  };

  // ---------- Event handlers -------------------
  // Hanterar onChange events och lagrar dom i markedInstructors
  const handleCheckboxChange = (instructorId: string, isChecked: boolean) => {
    if (!isChecked) {
      // Skapar en temp array som innehåller alla instruktörer utom den som togs bort
      const updatedMarkedInstructors = markedInstructors.filter((i) => {
        i !== instructorId;
      });
      // Skriver över de instruktörer som fanns tidigare
      setMarkedInstructors(updatedMarkedInstructors);
    } else {
      //lägger till instruktören i arrayen över instruktörer
      setMarkedInstructors((prevMarkedInstructors) => [
        ...prevMarkedInstructors,
        instructorId,
      ]);

      addNewInstructorsToEvent();
    }
  };

  return (
    <form>
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

export default DropDownCheckboxes;
