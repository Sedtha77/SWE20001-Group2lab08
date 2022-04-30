import Head from "next/head";
import {useRouter} from "next/router";
import ProductTable from '../../app/components/table/ProductTable';
function Product() {
    const router = useRouter();
    const productData = [
        {product_ID: 10000, title:"Apple", unit_price: 4, stock: 100},
        {product_ID: 20000, title:"Orange", unit_price: 3, stock: 68},
        {product_ID: 30000, title:"Mango", unit_price: 7, stock: 567},
        {product_ID: 10000, title:"Banana", unit_price: 3, stock: 78}
    ]

    return ( 
        <>
            <div style={{display:"flex", justifyContent:"center"}}>
        <Head>
          <title>Products</title>
        </Head>
        <div  style={{ width: '70%'}}>
        <h3 className="header" >Proudcts</h3>
        <div className=" cursor-pointer primary-button flex justify-center items-center rounded-lg " style={{marginLeft: 'auto', marginRight:0}} onClick={()=> router.push("product/create")} >
            <p className="">Create</p>
            </div>
        <ProductTable rows={productData} onRefresh={undefined}/>
        
            
        </div>
        </div>
        </>
     );
}

export default Product;