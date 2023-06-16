import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/Layout//Navigation/EventsNavigation";

const EventsRootLayout = () => {
  return (
    <>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default EventsRootLayout;
