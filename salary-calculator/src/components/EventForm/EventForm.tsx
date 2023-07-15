import { useState } from "react";
import { Event, instructors2023 } from "../../assets/Classes";
import "./EventForm.css";

interface IDropDownCheckboxes {
  event: Event;
  onSave(updatedEvent: Event): void;
}

const EventForm = ({ event, onSave }: IDropDownCheckboxes) => {
  // Fyll på med fält när formuläret byggs ut
  const [calculateSalary, setCalculateSalary] = useState<boolean>(
    event.calculateSalary
  );
  const [addRent, setAddRent] = useState<boolean>(event.addRent);
  const [lessons, setLessons] = useState<number>(event.lessons);
  const [lessonLength, setLessonLength] = useState<number>(event.lessonLength);
  const [price, setprice] = useState<number>(event.price);
  const [instructors, setInstructors] = useState<string[]>(event.instructors);

  // ---------- Event handlers -------------------
  const handleSaveChanges = () => {
    const updatedEvent = new Event(
      event.id,
      addRent,
      calculateSalary,
      event.eventName,
      event.startDate,
      lessons,
      lessonLength,
      price,
      instructors,
      false //Stänger edit mode
    );
    onSave(updatedEvent);
  };

  const handleClose = () => {
    const updatedEvent = new Event(
      event.id,
      event.addRent,
      event.calculateSalary,
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

  const handleCalculateSalaryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCalculateSalary(event.target.checked);
  };

  const handleAddRentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddRent(event.target.checked);
  };

  const handleLessonsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let lessonsNumber = Number(event.target.value);
    setLessons(lessonsNumber);
  };

  const handleLessonLengthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let lessonLnghtNumber = Number(event.target.value);
    setLessonLength(lessonLnghtNumber);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let priceNumber = Number(event.target.value);
    setprice(priceNumber);
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
      <td>
        <p>Salary:</p>
        <div className="checkbox-btn-row">
          <input
            className="event-checkbox"
            type="checkbox"
            name="salary-input"
            id="salary-input-yes"
            checked={calculateSalary}
            onChange={handleCalculateSalaryChange}
          />
          <label htmlFor="salary-input-yes">Yes</label>
        </div>
      </td>
      <td>
        <p>Rent:</p>
        <div className="checkbox-btn-row">
          <input
            className="event-checkbox"
            type="checkbox"
            name="rent-input"
            id="rent-input"
            checked={addRent}
            onChange={handleAddRentChange}
          />
          <label htmlFor="rent-input">Yes</label>
        </div>
      </td>
      <td className="event-name-column">
        <p>{event.eventName}</p>
      </td>
      <td className="event-startdate-column">
        <p>{event.startDate}</p>
      </td>
      <td className="event-lessons-column">
        <p className="old-value-text">
          {event.lessons} x {event.lessonLength}h
        </p>
        <label htmlFor="lessonLength">Lessons:</label>
        <input
          type="number"
          name="lessons"
          id="lessons-input"
          className="event-input"
          value={lessons}
          onChange={handleLessonsChange}
        />
        <label htmlFor="lessonLength">Lesson lenght:</label>
        <input
          type="number"
          name="lessonLength"
          id="lessonLength-input"
          className="event-input"
          value={lessonLength}
          onChange={handleLessonLengthChange}
        />
      </td>
      <td className="event-lesson-length-column">
        <p>{event.lessons * event.lessonLength} h</p>
      </td>
      <td className="event-price-column">
        <p className="old-value-text">{event.price} SEK</p>
        <p>Price:</p>
        <input
          type="number"
          name="price"
          id="price-input"
          className="event-input"
          value={price}
          onChange={handlePriceChange}
        />
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
