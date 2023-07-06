import { useEffect, useState } from "react";
import { Event, eventsVT22, instructors2023 } from "../../../assets/Classes";
import "./Events.css";
import DropDownCheckboxes from "../../DropDownCheckboxes/DropDownCheckboxes";

const Events = () => {
  // Innehåller de Events som visas aka ordinarie event[]
  const [events, setEvents] = useState<Event[]>(eventsVT22);
  // Innehåller ny data från formuläret där ett event är uppdaterat
  const [formDataEvents, setFormDataEvents] = useState<Event[]>(eventsVT22);
let newevent : Event;
let updatedEvents : Event[];

  // Hämtar data från child komponenten och lägger till den i separat useState så att man kan välja om den sa sparas eller ej.
  const replaceFormData = (eventId: string, newEvent: Event) => {
    newevent = newEvent;
    const eventIndex = formDataEvents.findIndex((e) => eventId === e.id);
    if (eventIndex !== -1) {
      updatedEvents = [...events];
      updatedEvents[eventIndex] = newEvent;
      setFormDataEvents(updatedEvents);
    }
  };

  // ------------ UI -------------------
  const toggleEditUI = (eventId: string) => {
    const updatedEditOnEvent = events.map((event) => {
      if (event.id === eventId) {
        return { ...event, edit: !event.edit };
      }
      return event;
    });
    // Ändrar edit mode på objektet så att UI togglas
    setEvents(updatedEditOnEvent);
    return updatedEditOnEvent;
  };

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

  // ------------Event handlers----------------
  //När man klickar på knappen visas edit-mode
  const handleEditCourseClick = (eventId: string) => {
    toggleEditUI(eventId);
  };

  const handleSaveChangesClick = (e: React.FormEvent, eventId: string) => {
    e.preventDefault();
    alert("nu ska saker sparas!");
    // Nu sakans funktion som trycker in det nya eventet i events från 
    setEvents(updatedEvents);
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
                  Course length
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
              return (
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
                    {!event.edit ? (
                      <p>{instructorData(event.instructors)}</p>
                    ) : (
                      <DropDownCheckboxes
                        event={event}
                        replaceEvent={replaceFormData}
                      />
                    )}
                  </td>

                  <td className="action-column">
                    {!event.edit ? (
                      <span
                        className="material-symbols-outlined edit-icon"
                        onClick={() => {
                          handleEditCourseClick(event.id);
                        }}
                      >
                        edit_document
                      </span>
                    ) : (
                      <div>
                        <button type="button">
                          <span
                            className="material-symbols-outlined"
                            onClick={(e) => {
                              handleSaveChangesClick(e, event.id);
                            }}
                          >
                            done
                          </span>
                        </button>
                        <button type="button">
                          <span
                            className="material-symbols-outlined"
                            onClick={() => {
                              handleUndoChangesClick(event.id);
                            }}
                          >
                            close
                          </span>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Events;
