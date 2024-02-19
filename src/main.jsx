import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import ErrorPage from "./Error";
import Root from "./Root";
import { EditContactAction, createontactAction, deleteContactAction } from "./actons/contactsActions";
import "./index.css";
import { getContactLoader, getContactsLoader } from "./loader/contactsLoader";
import EditContact from "./EditContact";
import Index from "./Index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createontactAction,
    children: [
      {
        index: true,
      element:<Index/>  },
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: getContactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact/>,
        loader: getContactLoader,
        action:EditContactAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: deleteContactAction,
        errorElement:(<div>there was a error in this contact</div>)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
