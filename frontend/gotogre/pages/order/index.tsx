import api from "@/config/api";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import OrderTable from '@/components/table/OrderTable';
function Order() {
    
    const router = useRouter();
    const [userData,setUserData] = useState([]);

    //Testing data
    // const userData = [
    //     {id: 10000, firstName:"Keanthai", lastName:"kheng", phoneNumber: "04587798754"},
   
    // ]

    const userApi = async ()=>{
        api.get('sales')
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
          <title>Orders</title>
        </Head>
        <div  style={{ width: '70%'}}>
            
            <h3 className="header" >Orders</h3>
            <div className=" cursor-pointer primary-button flex justify-center items-center rounded-lg " style={{marginLeft: 'auto', marginRight:0}}
             onClick={()=> router.push("order/create")} >
            <p className="">Create</p>
            </div>
        
        <OrderTable rows={userData} onRefresh={()=> refresh()}/>
        
            
        </div>
        </div>
        </>
     );
}

export default Order;