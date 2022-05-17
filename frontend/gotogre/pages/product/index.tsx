import api from "@/config/api";
import Head from "next/head";
import {useRouter} from "next/router";
import { useState, useEffect } from "react";
import ProductTable from '@/components/table/ProductTable';
function Product() {
    const router = useRouter();
    const [product, setProduct] = useState([]);

    const productApi = async ()=>{
        api.get('Products')
        .then((res: { data: any; })=>{
           setProduct(res.data);
        })
        .catch(res=>{
            console.log("Error access to API")
        })
    }

    useEffect(  ()=>{
         productApi();
    },[])

    async function refresh() {
        console.log("Refresh");
          await productApi();
      } 
    return ( 
        <>
            <div style={{display:"flex", justifyContent:"center"}}>
        <Head>
          <title>Products</title>
        </Head>
        <div  style={{ width: '70%'}}>
        <h3 className="header" >Products</h3>
        <div className=" cursor-pointer primary-button flex justify-center items-center rounded-lg my-2 " style={{marginLeft: 'auto', marginRight:0}} onClick={()=> router.push("product/create")} >
            <p className="">Create</p>
            </div>


        <ProductTable rows={product} onRefresh={()=>refresh()}/>
        
            
        </div>
        </div>
        </>
     );
}

export default Product;