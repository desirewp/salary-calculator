import { useState } from "react";
import {
  Event,
  Instructor,
  eventsVT22,
  instructors2023,
} from "../../../assets/Classes";
import "./Events.css";
import Select from "react-select";
import EventForm from "../../EventForm/EventForm";

const Events = () => {
  // Innehåller de Events som visas aka ordinarie event[]
  const [events, setEvents] = useState<Event[]>(eventsVT22);
  const instructors: Instructor[] = instructors2023;

  // Lägger till det nya uppdaterade eventet med de andra
  const handleSaveEvent = (updatedEvent: Event) => {
    const updatedEvents = events.map((event) => {
      if (event.id === updatedEvent.id) {
        return updatedEvent;
      } else return event;
    });
    setEvents(updatedEvents);
  };

  const addEvent = (event: React.FormEvent) => {
    event.preventDefault();
    alert("New event says Bop!");
  };

  // ------- Alternativen för dropdownen------------
  const instructorOptions = instructors.map((instructor) => ({
    value: instructor.id,
    label: instructor.fullName,
  }));

  // ------------ UI -DESSA FUNGERAR-------------------
  const toggleEditUI = (eventId: string) => {
    const updatedEditOnEvent = events.map((event) => {
      if (event.id === eventId) {
        return { ...event, edit: true };
      }
      return { ...event, edit: false };
    });
    // Ändrar edit mode på objektet så att UI togglas
    setEvents(updatedEditOnEvent);
  };

  // ---------------- Visning av data i kolumnen instructors -DESSA FUNGERAR-------
  // Hämtar om kursen har en giltig instruktör som har bet medlemsavgift
  const getInstructorNameById = (instructorId: string) => {
    // Hittar den instruktör som matchar idt kopplat på kursen
    const instructor = instructors2023.find(
      (instructor) => instructorId == instructor.id
    );
    return instructor ? instructor.fullName : "Instructor not member";
  };

  // Sköter visningen av instruktörers namn
  const instructorData = (instructors: string[]) => {
    if (instructors.length === 0) {
      return "No instructor found";
    }
    const instructorArray = instructors.map(getInstructorNameById);
    const instructorText = instructorArray.join(", ");
    return instructorText;
  };

  // ------------Event handlers  -DESSA FUNGERAR----------------
  //När man klickar på knappen visas edit-mode
  const handleEditCourseClick = (eventId: string) => {
    toggleEditUI(eventId);
  };

  return (
    <section className="content">
      <div className="box">
        <h1>Events 2022</h1>
        <table className="events-table">
          <thead>
            <tr>
              <th>
                <p>Salary</p>
              </th>
              <th>
                <p>Rent</p>
              </th>
              <th className="event-name-column">
                <p>
                  Event
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </p>
              </th>
              <th className="event-startdate-column">
                <p>
                  Start date
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </p>
              </th>
              <th className="event-lessons-column">
                <p>
                  Lessons
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </p>
              </th>
              <th className="event-lesson-length-column">
                <p>
                  Length
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </p>
              </th>
              <th className="event-price-column">
                <p>
                  Price
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </p>
              </th>
              <th className="event-instructors-column">
                <p>
                  Instructors
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </p>
              </th>
              <th className="action-column"></th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => {
              return !event.edit ? (
                <tr key={event.id}>
                  <td>
                    {event.calculateSalary ? (
                      <span className="material-symbols-outlined">
                        monetization_on
                      </span>
                    ) : (
                      <></>
                    )}
                  </td>
                  <td>
                    {event.addRent ? (
                      <span className="material-symbols-outlined">store</span>
                    ) : (
                      <></>
                    )}
                  </td>

                  <td className="event-name-column">
                    <p>{event.eventName}</p>
                  </td>
                  <td className="event-startdate-column">
                    <p>{event.startDate}</p>
                  </td>
                  <td className="event-lesson-column">
                    <p>
                      {event.lessons} x {event.lessonLength}h
                    </p>
                  </td>
                  <td className="event-lesson-length-column">
                    <p>{event.lessons * event.lessonLength} h</p>
                  </td>
                  <td className="event-price-column">
                    <p>{event.price} SEK</p>
                  </td>
                  <td className="event-instructors-column">
                    <p>{instructorData(event.instructors)}</p>
                  </td>
                  <td className="action-column">
                    <span
                      className="material-symbols-outlined edit-icon"
                      onClick={() => {
                        handleEditCourseClick(event.id);
                      }}
                    >
                      edit_document
                    </span>
                  </td>
                </tr>
              ) : (
                <>
                  <EventForm event={event} onSave={handleSaveEvent} />
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ------------- Add event form starts --------------- */}
      <div className="box">
        <h1>Add new event</h1>
        <form onSubmit={addEvent} className="add-event">
          <label htmlFor="event-name-input">Event name</label>
          <input type="text" id="event-name" name="event-name-input" />

          <label htmlFor="event-start-date-input">Start date</label>
          <input type="date" />

          <label htmlFor="lessonLength">Lessons:</label>
          <input
            type="number"
            name="lessons"
            id="lessons-input"
            // className="event-input"
            placeholder="1"
          />
          <label htmlFor="lessonLength">Lesson length:</label>
          <input
            type="number"
            name="lessonLength"
            id="lessonLength-input"
            // className="event-input"
            placeholder="1,5"
          />
          <label htmlFor="event-price-input">Price:</label>
          <input
            type="number"
            name="event-price"
            id="event-price-input"
            // className="event-input"
            placeholder="800"
          />
          <div className="instructor-select-container">
            {/* Kommer från: https://react-select.com/home */}
            <label htmlFor="instructor-select">Instructors:</label>
            <Select
              id="instructor-select"
              isMulti
              name="colors"
              options={instructorOptions}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <div className="float-right">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Events;
