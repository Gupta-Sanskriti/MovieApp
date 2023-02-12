import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./Components/Profile";
import Body from "./Components/Body";
import Movies from "./Components/Movies";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
import Episodes from "./Components/Episodes";
import Bookmarks from "./Components/Bookmarks";
import { Provider } from "react-redux";
import  store from "./store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Provider store={store}><App /> </Provider>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:id/",
        element: <MovieCard />,
        children: [
          {
            path: "episodes",
            element: <Episodes />,
          },
        ],
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <RouterProvider router={appRouter} />
 
);

// console.log(store.bookmark.bookval)
