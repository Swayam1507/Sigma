import type { RouteObject } from "react-router-dom";
import GuestGuard from "Guards/GuestGuard";
import LoginPage from "pages/loginPage";
import React from 'react'

export let loginRoutes: RouteObject[] = [
    {
      path: "/",
      element: <GuestGuard />,
      children: [
        // { index: true, element: <Home /> },
        // {
        //   path: "/courses",
        //   element: <Courses />,
        //   children: [
        //     { index: true, element: <CoursesIndex /> },
        //     { path: "/courses/:id", element: <Course /> },
        //   ],
        // },
        // { path: "*", element: <NoMatch /> },
        { path: '/login', element: <LoginPage />}
      ],
    },
  ];

  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  // let element = useRoutes(routes);
