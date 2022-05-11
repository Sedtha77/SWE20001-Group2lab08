import Head from "next/head";
import {useRouter} from "next/router";
import { useState } from "react";
import ErrorText from "@/components/ErrorText"
import IconLoading from "@/icons/IconLoading"
import api from '@/config/api';
import { useEffect } from "react";
import moment from "moment";

function userDetail() {
    const router = useRouter();
    const {id} = router.query;

    const [user,setUser] = useState({
        'firstName':"",
        "lastName": "",
        "phoneNumber": "",
        "dateOfBirth": "",
        "points": 0
    });
    
    const [error, setError] = useState("");
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const getUser = async ()=>{
            api.get(`Member/` + id)
            .then((res: { data: any; })=>{
                var newDate = new Date(res.data.dateOfBirth);
                var dateString = moment(newDate).format("YYYY-MM-DD")
               setUser({...res.data, "dateOfBirth":dateString});
            })
            .catch(res=>{
                console.log("Error access to API")
            })
        }

        getUser();
       
    },[id]);


    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
       const { name, value } = e.target;

       setUser({ ...user, [name]: value });
       
   }

   const validate = ()=>{
       
       if(user.firstName == "" || /^[0-9]+$/.test(user.firstName) ){
           setError("Please enter first name with only characters");
           return false;
       }
       else  if(user.lastName == "" || /^[0-9]+$/.test(user.lastName) ){
           setError("Please enter last name with only characters");
           return false;
       }
       else if(user.phoneNumber == "" ){
           setError("Please enter phone number with only digits");
           return false;
       }
       else if(!(/^[0-9]+$/.test(user.phoneNumber))){
           setError("Phone number should contains only number");
           return false;
       }
       else if(user.dateOfBirth == ""){
           setError("Please enter Date of Birth");
           return false;
       }
       else{
           setError("");
           return true;
       };
   }

   const onSubmit = async () =>{

       if(validate()){
           setLoading(true);

         const res = await api.put(`member/${id}`, {
                "id": id,
               "firstName": user.firstName,
               "lastName": user.lastName,
               "phoneNumber": user.phoneNumber,
               "dateOfBirtch": user.dateOfBirth,
               "points": user.points
           });

           if(res) router.push("/user")
           else setError("Unable to create new user at the moment, please try again later.");
       }
   }

   return (  
       <>
           
       <div style={{display:"flex", justifyContent:"center"}}>
   <Head>
     <title>User {id} </title>
   </Head>
   <div  style={{ width: '70%'}}>
       
       <h3 className="header" >User: {id}</h3>

       <div className=" w-full border-primary border-2 rounded-lg bg-white py-10" >
       <div className="flex flex-col justify-center items-center">
           <div className=" w-2/4 my-3">
               <h1 className=" font-bold mb-3">First Name</h1>
               <input name="firstName" onChange={handleInputChange} value={user.firstName} placeholder="First Name" className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"text"}/>
           </div>

           <div className=" w-2/4 my-3">
               <h1 className=" font-bold mb-3">Last Name</h1>
               <input name="lastName" onChange={handleInputChange} value={user.lastName} placeholder="Last Name" className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"text"}/>
           </div>

           <div className=" w-2/4 my-3">
               <h1 className=" font-bold mb-3">Phone Number</h1>
               <input name="phoneNumber" onChange={handleInputChange} value={user.phoneNumber} placeholder="04 1234 5678" className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"text"}/>
           </div>

           <div className=" w-2/4 my-3">
               <h1 className=" font-bold mb-3">Date Of Birth</h1>
               <input name="dateOfBirth" onChange={handleInputChange} value={user.dateOfBirth} className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"date"}/>
           </div>
           <div className=" w-2/4 my-3">
               <h1 className=" font-bold mb-3">Points</h1>
               <input name="points" onChange={handleInputChange} value={user.points}  className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"number"} min="0"/>
           </div>

           <div className=" w-2/4 my-3">
               
           <ErrorText message={error} />
           </div>
           

           <button
            //    onClick={onSubmit}
             disabled={loading}
             type="submit"
             className="cursor-pointer primary-button flex justify-center items-center rounded-lg"
           >
             {loading ? <IconLoading /> : <span>Edit</span>}
           </button>
       </div>
       </div>
   
       
   </div>
   </div>
   </>
   );
}

export default userDetail;