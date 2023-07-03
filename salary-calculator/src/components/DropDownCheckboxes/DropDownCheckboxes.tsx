import { useState } from "react";
import { instructors2023 } from "../../assets/Classes";
import "./DropDownCeckboxes.css";
const DropDownCheckboxes = () => {
  const [selected, setSelected] = useState<String[]>([]);

  // ---------- Event handlers -------------------
  const handleCheckboxChange = (instructorId: string) => {
    if (selected.includes(instructorId)) {
      setSelected(selected.filter((checkbox) => checkbox !== instructorId));
    } else {
      setSelected([...selected, instructorId]);
    }
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
