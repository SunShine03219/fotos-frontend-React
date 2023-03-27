import { BrowserRouter } from "react-router-dom"
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes"
import { AuthRoutes } from "./auth.routes"

import { UserProvider } from "../context/usersContext";

export function Routes(){

    const { isAuthenticated } = useAuth();

    return (
        <BrowserRouter>
            {isAuthenticated ?
                <UserProvider>
                    <AppRoutes/>
                </UserProvider>
                :
                <AuthRoutes/>}
        </BrowserRouter>
    )
}