import { createBrowserRouter, Link } from "react-router-dom";
import { App } from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "test",
    element: (
      <div>
        Test page. Your URL should be /app/test. If you refresh, this page will
        be still there.
      </div>
    ),
  },
]);
