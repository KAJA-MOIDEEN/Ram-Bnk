import React from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** Components */
import logInPage from "./components/logInPage"
import registerPage from "./components/registerPage"
import profilePage from "./components/profile"
import pageNotFound from "./components/pageNotFound"

/** Roots */
const router = createBrowserRouter([
    {
        path: '/',
        element: <logInPage></logInPage>,
    },
    {
        path: '/register',
        element: <registerPage></registerPage>,
    },
    {
        path: '/profile',
        element: <profilePage></profilePage>,
    },
    {
        path: '*',
        element: <pageNotFound></pageNotFound>,
    }
])

export default function App() {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    )
}