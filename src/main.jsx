import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router";
import Body from "./Component/Body.jsx";
import Work from "./Component/Work.jsx"; 
import WhyUs from "./Component/WhyUs.jsx";
import Client from "./Component/Client.jsx";
import Contact from "./Component/Contact.jsx";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/home",
        element:<Body />
      },
      {
        path: "/ourwork",
        element: <Work />,
      },
      {
        path: "/us",
        element: <WhyUs />,
      },
      {
        path: "/client",
        element: <Client />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
);
