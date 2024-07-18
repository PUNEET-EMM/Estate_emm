
import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import { Layout, RequireAuth } from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './routes/homePage/homePage';
// import ListPage from './routes/listPage/listPage';
// import SinglePage from './routes/singlePage/singlePage';
// import ProfilePage from './routes/profilePage/profilePage';
// import Login from './routes/login/login';
// import Register from './routes/register/register';
// import ProfileUpdatePage from './routes/profileUpdatePage/profileUpdatePage';
// import NewPostPage from './routes/newPostPage/newPostPage';
// import NotFound from './routes/NotFound';
// import { Layout, RequireAuth } from './routes/layout/layout';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route path="list" element={<ListPage />} />
//           <Route path=":id" element={<SinglePage />} />
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />
//           <Route path="*" element={<NotFound />} />
//         </Route>
//         <Route path="/" element={<RequireAuth />}>
//           <Route path="profile" element={<ProfilePage />} />
//           <Route path="profile/update" element={<ProfileUpdatePage />} />
//           <Route path="add" element={<NewPostPage />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


