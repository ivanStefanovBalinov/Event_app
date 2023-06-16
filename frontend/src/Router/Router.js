import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/HomePage/Home";
import EventsPage, {
  eventsDataLoader,
} from "../components/Pages/EventsPage/EventsPage";
import EventDetails from "../components/Pages/EventsPage/EventDetails";
import NewEventPage from "../components/Pages/EventsPage/NewEventPage";
import EditEvent from "../components/Pages/EventsPage/EditEvent";
import RootLayout from "./Root";
import ErrorPage from "../components/Pages/Error/ErrorPage";
import EventsRootLayout from "./EventsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsDataLoader,
          },
          { path: "/events/:eventId", element: <EventDetails /> },
          { path: "/events/new", element: <NewEventPage /> },
          { path: "events/:eventId/edit", element: <EditEvent /> },
        ],
      },
    ],
  },
]);

export default router;
