import React from "react";
import { useLoaderData } from "react-router-dom";
import EventList from "./EventsList";
const EventsPage = () => {
  const eventsData = useLoaderData();

  // if (eventsData.isError) {
  //   return <p>{eventsData.message}</p>;
  // }

  return (
    <div>
      <h1>Events Page</h1>
      <EventList events={eventsData} />
    </div>
  );
};

export default EventsPage;

export const eventsDataLoader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events" };
    throw { message: "Could not fetch Events" };
  } else {
    const resData = await response.json();
    return resData.events;
  }
};
