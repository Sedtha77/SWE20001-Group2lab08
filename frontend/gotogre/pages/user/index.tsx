import Head from "next/head";
import UserTable from '../../app/components/table/UserTable';
import {useRouter} from "next/router";
import api from '@/config/api';
import { useEffect, useState } from "react";
import { Refresh } from "@material-ui/icons";
function User() {


    const router = useRouter();
    const [userData,setUserData] = useState([]);

    //Testing data
    // const userData = [
    //     {id: 10000, firstName:"Keanthai", lastName:"kheng", phoneNumber: "04587798754"},
   
    // ]

    const userApi = async ()=>{
        api.get('Member')
        .then((res: { data: any; })=>{
           setUserData(res.data);
        })
        .catch(res=>{
            console.log("Error access to API")
        })
    }

    useEffect(  ()=>{
         userApi();
    },[])

    async function refresh() {
        console.log("Refresh");
          await userApi();
      } 
    return ( 
        <>
            
            <div style={{display:"flex", justifyContent:"center"}}>
        <Head>
          <title>Users</title>
        </Head>
        <div  style={{ width: '70%'}}>
            
            <h3 className="header" >Users</h3>
            <div className=" cursor-pointer primary-button flex justify-center items-center rounded-lg my-2 " style={{marginLeft: 'auto', marginRight:0}} onClick={()=> router.push("user/create")} >
            <p className="">Create</p>
            </div>
        
        <UserTable rows={userData} onRefresh={()=> refresh()}/>
        
            
        </div>
        </div>
        </>
     );
}

export default User;