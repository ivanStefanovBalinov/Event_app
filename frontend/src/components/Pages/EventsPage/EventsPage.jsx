import React from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "1", title: "Event 1" },
  { id: "2", title: "Event 2" },
  { id: "3", title: "Event 3" },
  { id: "4", title: "Event 4" },
  { id: "5", title: "Event 5" },
  { id: "6", title: "Event 6" },
  { id: "7", title: "Event 7" },
];

const EventsPage = () => {
  return (
    <div>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map((events) => (
          <li key={events.id}>
            <Link to={`/events/${events.id}`}>{events.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
