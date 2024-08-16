import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** Components */
import RootPage from "./components/rootPage";
import LogInPage from "./components/logInPage";
import RegisterPage from "./components/registerPage";
import ProfilePage from "./components/profilePage";
import ResetPage from "./components/resetPage";
import RecoveryPage from "./components/recoveryPage";
import PageNotFound from "./components/pageNotFound";

/** Routes */
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />
    },
    {
        path: "/login",
        element: <LogInPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/profile',
        element: <ProfilePage />,
    },
    {
        path: '/reset',
        element: <ResetPage />,
    },
    {
        path: '/recoveryPage',
        element: <RecoveryPage />,
    },
    {
        path: '*',
        element: <PageNotFound />,
    },
]);

export default function App() {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
}
