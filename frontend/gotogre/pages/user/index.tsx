import Head from "next/head";
import UserTable from '../../app/components/table/UserTable';
import {useRouter} from "next/router";
import api from '../../app/config/api';
import { useEffect, useState } from "react";
function User() {


    const router = useRouter();
    const [userData,setUserData] = useState([]);

    //Testing data
    // const userData = [
    //     {id: 10000, firstName:"Keanthai", lastName:"kheng", phoneNumber: "04587798754"},
   
    // ]

    useEffect(()=>{
        api.get('Member')
        .then((res: { data: any; })=>{
            console.log("Work")
            console.log(res.data)
           setUserData(res.data);
        })
        .catch(res=>{
            console.log("Error access to API")
        })
    },[])
    return ( 
        <>
            
            <div style={{display:"flex", justifyContent:"center"}}>
        <Head>
          <title>Users</title>
        </Head>
        <div  style={{ width: '70%'}}>
            
            <h3 className="header" >Users</h3>
            <div className=" cursor-pointer primary-button flex justify-center items-center rounded-lg " style={{marginLeft: 'auto', marginRight:0}} onClick={()=> router.push("user/create")} >
            <p className="">Create</p>
            </div>
        
        <UserTable rows={userData} onRefresh={undefined}/>
        
            
        </div>
        </div>
        </>
     );
}

export default User;