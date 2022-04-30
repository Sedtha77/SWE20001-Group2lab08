import Head from "next/head";
import {useRouter} from "next/router";
function CreateProduct() {
    const router = useRouter();
    return (  
        <>
            
        <div style={{display:"flex", justifyContent:"center"}}>
    <Head>
      <title>Create Product</title>
    </Head>
    <div  style={{ width: '70%'}}>
        
        <h3 className="header" >Create Product</h3>

        <div className=" w-full border-primary border-2 rounded-lg bg-white py-10" >
        <div className="flex flex-col justify-center items-center">
            <div className=" w-2/4 my-3">
                <h1 className=" font-bold mb-3">Title</h1>
                <input className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"text"}/>
            </div>

            <div className=" w-2/4 my-3">
                <h1 className=" font-bold mb-3">Description</h1>
                <input className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"text"}/>
            </div>

            <div className=" w-2/4 my-3">
                <h1 className=" font-bold mb-3">Category</h1>

                <select className="border-2 border-primary rounded-lg h-10 w-full px-3">
                    <option value="vegetable" >Vegetable</option>
                    <option value="fruit" >Fruit</option>
                    <option value="meat" >Meat</option>
                    <option value="dairy" >Dairy</option>
                </select>
            </div>

            <div className=" w-2/4 my-3">
                <h1 className=" font-bold mb-3">Images</h1>

                <input className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"file"}/>
            </div>


            <div className=" w-2/4 my-3">
                <h1 className=" font-bold mb-3">Price</h1>
                <input className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"number"} min="0"/>
            </div>

            <div className=" w-2/4 my-3">
                <h1 className=" font-bold mb-3">Quantity</h1>
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

export default CreateProduct;