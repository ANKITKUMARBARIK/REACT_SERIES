import React, { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{user, setUser, name: 'CONTEXT API'}}>
            {props.children}
        </UserContext.Provider>
    )
}