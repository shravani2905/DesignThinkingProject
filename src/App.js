import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main";
import Home from "./Home";
import StudentLogin from "./StudentLogin";
import Navbar from "./Navbar";
import AboutUs from "./Aboutus";
import LiveChat from "./LiveChat";
import EventCalender from "./EventCalender";
import Community from "./Community";
import Language from "./Language";
import Photo from "./Photo";
import Resource from "./Resource";
import Design from "./Design";
import Feedback from "./Feedback";
import Lost from "./Lost";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Main />,
    },
    {
      path: "studentlogin",
      element: <StudentLogin />,
    },
    {
      path: "navbar",
      element: <Navbar />,
      children: [
        {
          // Removed the path property
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "aboutus",
          element: <AboutUs />,
        },
        {
          path: "chat",
          element: <LiveChat />,
        },
        {
          path: "eventcalendar",
          element: <EventCalender />,
        },
        {
          path: "community",
          element: <Community />,
        },
        {
          path: "language",
          element: <Language />,
        },
        {
          path: "photo",
          element: <Photo />,
        },
        {
          path: "resource",
          element: <Resource />,
        },
        {
          path: "design",
          element: <Design />,
        },
        {
          path: "feedback",
          element: <Feedback />,
        },
        {
          path: "lost",
          element: <Lost />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
