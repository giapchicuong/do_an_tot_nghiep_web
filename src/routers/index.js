import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import AuthPage from "../pages/authPage";
import RegisterPage from "../pages/authPage/registerPage/RegisterPage";
import ErrorPage from "../components/ErrorPage";
import UsersPage from "../pages/usersPage";
import GroupsPage from "../pages/groupsPage";
import RolesPage from "../pages/rolesPage";
import ProtectRouter from "./ProtectRouter";
import RedirectIfAuth from "./RedirectIfAuth";
import RatingLevelsPage from "../pages/ratingLevelsPage";
import UserStatusLevelsPage from "../pages/userStatusLevelsPage";
import AnalystPage from "../pages/analystPage/analystPage";

const router = createBrowserRouter([
    {
        path: '/',
        element:
            <ProtectRouter>
                <></>
            </ProtectRouter>,
    },

    {
        path: '/admin',
        element:
            <ProtectRouter>
                <App />
            </ProtectRouter>,
        children: [
            {
                path: 'analyst',
                element: <AnalystPage />
            },
            {
                path: 'users',
                element: <UsersPage />
            },
            {
                path: 'user-status-levels',
                element: <UserStatusLevelsPage />
            },
            {
                path: 'groups',
                element: <GroupsPage />
            },
            {
                path: 'roles',
                element: <RolesPage />
            },
            {
                path: 'rating-levels',
                element: <RatingLevelsPage />
            },
        ]
    },

    {
        path: '/auth',
        element:
            <RedirectIfAuth>
                <AuthPage />,
            </RedirectIfAuth>
        ,
        children: [
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    },
])

export default router
