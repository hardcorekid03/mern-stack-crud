import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext ();

export const authReducer = ( state, action) => {

    switch (action.type) {
        case 'LOGIN':
            return {user: action.payload}
        case 'LOGOUT':
            return {user: null}
        default:
            return state
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    useEffect (() => {
        const user = JSON.parse (localStorage.getItem ('user'))

        if(user) {
            dispatch({ type: 'LOGIN', payload: user }) // check https://www.youtube.com/watch?v=Y8pD1gBL_MY&list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT&index=13
        }

    } ,[])

    console.log('AuthContext state:', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}