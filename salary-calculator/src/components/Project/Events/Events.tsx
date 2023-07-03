import { eventsVT22, instructors2023 } from "../../../assets/Classes";
import "./Events.css";

const Events = () => {
  const getInstructorName = (instructorId: string) => {
    // Hittar den instruktör som matchar idt kopplat på kursen
    const instructor = instructors2023.find(
      (instructor) => instructorId == instructor.id
    );
    if (instructor) {
      const instructorName = instructor?.fName + " " + instructor?.lName;
      return instructorName;
    } else return "Instructor not member";
  };

  const checkForInstructors = (instructors: string[]) => {
    let instructorArray: string[];
    let instructorText: string;
    if (instructors.length === 0) {
      return "No instructor found";
    } else if (instructors.length > 1) {
      const instructorArray = instructors.map((instructor) => {
        return getInstructorName(instructor);
      });
      return (instructorText = instructorArray.join(", "));
    } else {
      instructorArray = instructors.map((instructor) => {
        return getInstructorName(instructor);
      });
      return (instructorText = instructorArray.join(","));
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
                  Course lenght
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
            {eventsVT22.map((event) => {
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
                    <p>{event.price}</p>
                  </td>
                  <td>
                    <p>{checkForInstructors(event.instructors)}</p>
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
