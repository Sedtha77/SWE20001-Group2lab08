import Head from "next/head";
import {useRouter} from "next/router";
import { useState } from "react";
import ErrorText from "@/components/ErrorText"
import IconLoading from "@/icons/IconLoading"
import api from '@/config/api';

function CreateUser() {
    const router = useRouter();

     const [user,setUser] = useState({
         'firstName':"",
         "lastName": "",
         "phone": "",
         "dob": "",
         "points": ""
     });
     
     const [error, setError] = useState("");
     const [loading,setLoading] = useState(false);
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
        else if(user.phone == "" ){
            setError("Please enter phone number with only digits");
            return false;
        }
        else if(!(/^[0-9]+$/.test(user.phone))){
            setError("Phone number should contains only number");
            return false;
        }
        else if(user.dob == ""){
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

          const res = await api.post("member", {
                "firstName": user.firstName,
                "lastName": user.lastName,
                "phoneNumber": user.phone,
                "dateOfBirth": user.dob,
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
      <title>Create User</title>
    </Head>
    <div  style={{ width: '70%'}}>
        
        <h3 className="header" >Create User</h3>

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
                <input name="phone" onChange={handleInputChange} value={user.phone} placeholder="04 1234 5678" className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"text"}/>
            </div>

            <div className=" w-2/4 my-3">
                <h1 className=" font-bold mb-3">Date Of Birth</h1>
                <input name="dob" onChange={handleInputChange} value={user.dob} className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"date"}/>
            </div>
            <div className=" w-2/4 my-3">
                <h1 className=" font-bold mb-3">Points</h1>
                <input name="points" onChange={handleInputChange} value={user.points}  className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"number"} min="0"/>
            </div>

            <div className=" w-2/4 my-3">
                
            <ErrorText message={error} />
            </div>
            

            <button
                onClick={onSubmit}
              disabled={loading}
              type="submit"
              className="cursor-pointer bg-primary primary-button flex justify-center items-center rounded-lg"
            >
              {loading ? <IconLoading /> : <span>Create</span>}
            </button>
        </div>
        </div>
    
        
    </div>
    </div>
    </>

    );
}

export default CreateUser;