import { useState } from "react";
import { Event, eventsVT22, instructors2023 } from "../../../assets/Classes";
import "./Events.css";
import EventForm from "../../EventForm/EventForm";

const Events = () => {
  // Innehåller de Events som visas aka ordinarie event[]
  const [events, setEvents] = useState<Event[]>(eventsVT22);

  // Lägger till det nya uppdaterade eventet med de andra
  const handleSaveEvent = (updatedEvent: Event) => {
    const updatedEvents = events.map((event) => {
      if (event.id === updatedEvent.id) {
        return updatedEvent;
      } else return event;
    });
    setEvents(updatedEvents);
  };

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

  const handleSaveChangesClick = (e: React.FormEvent, eventId: string) => {
    alert("nu ska saker sparas!");
    // Nu sakans funktion som trycker in det nya eventet i events från
    toggleEditUI(eventId);
  };

  const handleUndoChangesClick = (eventId: string) => {
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
                <p>
                  Event
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </p>
              </th>
              <th>
                <p>
                  Start date
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </p>
              </th>
              <th>
                <p>
                  Lessons
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </p>
              </th>
              <th>
                <p>
                  Length
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </p>
              </th>
              <th>
                <p>
                  Price
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </p>
              </th>
              <th>
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
                    <p>{event.eventName}</p>
                  </td>
                  <td>
                    <p>{event.startDate}</p>
                  </td>
                  <td>
                    <p>
                      {event.lessons} x {event.lessonLength}h
                    </p>
                  </td>
                  <td>
                    <p>{event.lessons * event.lessonLength} h</p>
                  </td>
                  <td>
                    <p>{event.price} SEK</p>
                  </td>
                  <td>
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
    </section>
  );
};

export default Events;
