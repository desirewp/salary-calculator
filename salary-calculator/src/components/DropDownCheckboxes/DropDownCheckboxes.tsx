import { useState } from "react";
import { instructors2023 } from "../../assets/Classes";
import "./DropDownCeckboxes.css";


interface IDropDownCheckboxes{
  selectedInstructors: string[];
}

// Hela eventet behöver hämtas in som en usestate Variabel
const DropDownCheckboxes = ({selectedInstructors} : IDropDownCheckboxes ) => {
  const [selected, setSelected] = useState<String[]>(selectedInstructors);

  // ---------- Event handlers -------------------

  // Den här metoden behöver kunna lägga till och ta bort i eventsVT22
  const handleCheckboxChange = (instructorId: string) => {
    if (selected.includes(instructorId)) {
      // Det här utfallet tar bort instruktören om hen kryssas ur
      setSelected(selected.filter((checkbox) => checkbox !== instructorId));
    } else {
      // Det här utfallet lägger till instruktören om hen kryssas i.
      setSelected([...selected, instructorId]);
    }
    alert(selected);
  };

  return (
    <div className="checkbox-select">
      <ul>
        {instructors2023.map((instructor) => {
          return (
            <div className="list-item-container" key={instructor.id}>
              <li
                className={
                  selected.includes(instructor.id) ? "selected-instructor" : ""
                }
              >
                <input
                  type="checkbox"
                  id={instructor.id}
                  value={instructor.id}
                  checked={selected.includes(instructor.id)} 
                  onChange={() => {
                    handleCheckboxChange(instructor.id);
                  }}
                />
                <label htmlFor={instructor.id}>{instructor.fullName}</label>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDownCheckboxes;
