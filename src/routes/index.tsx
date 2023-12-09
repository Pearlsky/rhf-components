import App from "@/app";
import { Feedback } from "@/components/feedback";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "feedback", element: <Feedback /> },
]);
