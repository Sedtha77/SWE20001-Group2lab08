import Head from "next/head";
import {useRouter} from "next/router";
function CreateUser() {
    const router = useRouter();
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
                <input className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"text"}/>
            </div>

            <div className=" w-2/4 my-3">
                <h1 className=" font-bold mb-3">Date Of Birth</h1>
                <input className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"date"}/>
            </div>
            <div className=" w-2/4 my-3">
                <h1 className=" font-bold mb-3">Point</h1>
                <input className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"number"} min="0"/>
            </div>

            <div className=" cursor-pointer primary-button flex justify-center items-center rounded-lg "  >
            <p className="">Create</p>
            </div>
        </div>
        </div>
    
        
    </div>
    </div>
    </>

    );
}

export default CreateUser;