import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../Firebase/Firebase.init';
export const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProvider = ({children}) => {
//     const [user, setUser]  = useState(null)
//     const createUser = (email, password) => {
// return createUserWithEmailAndPassword(auth, email, password)
//     }
//     const authInfo = {
//         user,
//         createUser
//     }
    return (
        <>
        </>
        // <AuthContext.Provider value={user}>
        //     {children}

        // </AuthContext.Provider>
    );
};

export default AuthProvider;