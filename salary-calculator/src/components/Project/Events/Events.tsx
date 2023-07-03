import { useState } from "react";
import {
  Event,
  eventsVT22,
  Instructor,
  instructors2023,
} from "../../../assets/Classes";
import "./Events.css";
import DropDownCheckboxes from "../../DropDownCheckboxes/DropDownCheckboxes";

const Events = () => {
  const [events, setEvents] = useState<Event[]>(eventsVT22);
  // Bestämmer utseendet på tabellen
  const [displayEditMode, setDisplayEditMode] = useState<string[]>([]);

  // Hämtar om kursen har en giltig instruktör som har bet medlemsavgift
  const getInstructorNameById = (instructorId: string) => {
    // Hittar den instruktör som matchar idt kopplat på kursen
    const instructor = instructors2023.find(
      (instructor) => instructorId == instructor.id
    );
    return instructor ? instructor.fullName : "Instructor not member";
  };

  const instructorData = (instructors: string[]) => {
    if (instructors.length === 0) {
      return "No instructor found";
    }
    const instructorArray = instructors.map(getInstructorNameById);
    const instructorText = instructorArray.join();
    return instructorText;
  };

  // ------------Event handlers----------------

  // 1. När man klickar på knappen ska dropdown menyn visas istället för nuvarande instruktörer
  const handleEditCourseClick = (eventId: string) => {
    // alert(`Du vill redigera kursen! ${eventId}`);
    if (displayEditMode.includes(eventId)) {
      setDisplayEditMode(displayEditMode.filter((event) => event !== eventId));
    } else {
      setDisplayEditMode([...displayEditMode, eventId]);
    }
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
                  Lesson length
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
                    <p>{event.lessons}</p>
                  </td>
                  <td>
                    <p>{event.lessonLength} h</p>
                  </td>
                  <td>
                    <p>{event.lessons * event.lessonLength} h</p>
                  </td>
                  <td>
                    <p>{event.price} SEK</p>
                  </td>
                  <td className="flex-row-between">
                    {displayEditMode.includes(event.id) ? (
                      <>
                        <p>{instructorData(event.instructors)}</p>
                        <span
                          className="material-symbols-outlined"
                          onClick={() => {
                            handleEditCourseClick(event.id);
                          }}
                        >
                          edit_document
                        </span>
                      </>
                    ) : (
                      <>
                        <DropDownCheckboxes />
                        <span
                          className="material-symbols-outlined"
                          onClick={() => {
                            handleEditCourseClick(event.id);
                          }}
                        >
                          done
                        </span>
                      </>
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
