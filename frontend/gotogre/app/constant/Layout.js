import React from 'react'
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar'
import appRoutes from '@/constant/appRoutes';

export default function Layout({children}) {
    const router = useRouter();
    //const {currentUser} = useAuth();

    // let unprotectedRoutes = [
    //     appRoutes.login,
    //     appRoutes.signup,
    //   ];

    // let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

    // if( !currentUser && pathIsProtected){
    //     router.push(appRoutes.login);
    //     return <></>;
    // }
    // else
    // return (
    //     <>
    //     {pathIsProtected ?<Navbar/> : "" } 
    //     <div className={pathIsProtected ? "px-10 pt-5": ""} style={{marginLeft: pathIsProtected ? 210 : 0, backgroundColor:"#F9F9F9", minHeight:"100vh"}}>
    //         {children}
    //     </div>  
    //     </>       
    // );
    
    return (
        <>
            <Navbar/>
            <div className={"px-10 pt-5"} style={{marginLeft:  210, backgroundColor:"#F9F9F9", minHeight:"100vh"}}>
                 {children}
            </div>  
        </>
    )
};
