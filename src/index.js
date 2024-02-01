import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieListing from "./pages/MovieListing";
import MoviesSummary from "./pages/MovieSummary";
import BookTicket from "./pages/BookTicket";

const router = createBrowserRouter([
  {
    path: "",
    element: <MovieListing />,
  },
  {
    path: "/moviessummary/:movieName",
    element: <MoviesSummary />,
  },
  {
    path: "/book-ticket/:movieName",
    element: <BookTicket />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
