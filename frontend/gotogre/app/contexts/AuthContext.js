import React, { useContext, useState, useEffect } from 'react'
import {auth} from "@/config/firebase"
const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [connection, setConnection] = useState(null);
    const [loading, setLoading]= useState(true);

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email,password);
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout(){
        return auth.signOut();
        
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email);
        
    }

    

    useEffect(() =>{

        const getUser = async ({firebaseUser})=>{
            
           var token = await firebaseUser.getIdToken().then((idToken) => {
                return idToken;
            });
           

        }
        const unsubscribe = auth.onAuthStateChanged(user => {
            
            console.log("StateChange")
            setCurrentUser(user);
            if(user){
                getUser({firebaseUser: user});
            }
            setLoading(false);
            
        })
        
        
        return unsubscribe;
    }, []);
    
    const value = {
        currentUser,
        connection,
        signup,
        login,
        logout,
        resetPassword
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
