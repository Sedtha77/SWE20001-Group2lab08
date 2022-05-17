import Head from "next/head";
import { useRouter } from "next/router";
import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from "react";
import ErrorText from "@/components/ErrorText"
import IconLoading from "@/icons/IconLoading"
import api from '@/config/api';
import IconPlus from "@/icons/IconPlus";

function CreateOrder() {

    const router = useRouter();

    const [items, setItems] = useState([{ id: "", name: "", price: 0, quantity: 1 }]);
    const [user, setUser] = useState<string>();
    const [userList, setUserList] = useState<any>([]);
    const [productList, setProductList] = useState<any>([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const listApi = async () => {
        api.get('Member')
            .then((res: { data: any; }) => {
                setUserList(res.data);
            })
            .catch(res => {
                console.log("Error access to API")
            })

        api.get('Products')
            .then((res: { data: any; }) => {
                setProductList(res.data);
            })
            .catch(res => {
                console.log("Error access to API")
            })
    }

    useEffect(() => {
        listApi();
    }, [])


    const handleProduct = (index: number, value:string)=>{
        
        const selectProduct = productList.find((e: { id: string; }) => e.id ==value);
        let newArr = [...items];
        newArr[index].id = selectProduct.id;
        newArr[index].name = selectProduct.name;
        newArr[index].price = selectProduct.globalPrice;

        setItems(newArr);
    }
    const handleQuantity = (index: number, increase: Boolean) => {
        let newArr = [...items];
        let newQuan = increase ? items[index].quantity + 1 : items[index].quantity != 1 ? items[index].quantity - 1 : items[index].quantity;
        newArr[index] = { ...items[index], quantity: newQuan };
        setItems(newArr);

    }

    const calPrice = ()=>{
        let total = 0;

        items.map((item)=>{
            if(item.price !=0 ) total = total + (item.price * item.quantity);
        })

        setTotalPrice(total);
    }
    const handleDelete = (index: number) => {
        if (items.length == 1) alert("Order must need at least one item")
        else {
            let newArr = [...items];
            newArr.splice(index, 1);
            setItems(newArr);
        }

    }

    useEffect(()=>{
        calPrice();
    },[items])


    const validate = () => {

        return true;
    }


    const onSubmit = async () => {

        if (validate()) {
            setLoading(true);

            const res = await api.post("member", {
                // "firstName": user.firstName,
                // "lastName": user.lastName,
                // "phoneNumber": user.phone,
                // "dateOfBirth": user.dob,
                // "points": user.points
            });

            if (res) router.push("/user")
            else setError("Unable to create new user at the moment, please try again later.");
        }
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Head>
                    <title>Create Order</title>
                </Head>
                <div style={{ width: '70%' }}>

                    <h3 className="header" >Create Order</h3>

                    <div className=" w-full border-primary border-2 rounded-lg bg-white py-10" >
                        <div className="flex flex-col justify-center items-center">

                            <div className=" w-3/4 my-3 flex flex-row gap-2" >
                                <p className=" font-bold">Products</p>
                                <div className=" cursor-pointer" onClick={() => { setItems([...items, { id: "", name: "", price: 0, quantity: 1 }]) }}>

                                    <svg id="collapse-plus" xmlns="http://www.w3.org/2000/svg" width="24.66" height="23.768" viewBox="0 0 34.66 33.768">
                                        <path id="Path_109" data-name="Path 109" d="M6.408,0H28.252A6.423,6.423,0,0,1,34.66,6.408V27.36a6.4,6.4,0,0,1-1.881,4.527l-.09.082a6.384,6.384,0,0,1-4.436,1.8H6.408a6.4,6.4,0,0,1-4.527-1.881L1.8,31.8A6.392,6.392,0,0,1,0,27.36V6.405A6.418,6.418,0,0,1,6.408,0Zm9.237,10.813a1.684,1.684,0,0,1,3.368,0V15.2H23.4a1.684,1.684,0,1,1,0,3.368H19.012v4.386a1.684,1.684,0,0,1-3.368,0V18.567H11.256a1.684,1.684,0,0,1,0-3.368h4.386V10.813Zm12.6-7.925H6.408a3.534,3.534,0,0,0-3.52,3.52V27.36a3.514,3.514,0,0,0,.967,2.423l.068.062A3.51,3.51,0,0,0,6.408,30.88H28.252a3.509,3.509,0,0,0,2.423-.97l.059-.065a3.51,3.51,0,0,0,1.035-2.485V6.405a3.529,3.529,0,0,0-3.52-3.517Z" transform="translate(0 0)" fill="#2a67b1" />
                                    </svg>
                                </div>

                            </div>



                            {
                                items.map((item, index) => {
                                    return <div className=" w-3/4 my-3">
                                        <div className="flex flex-row justify-between items-center gap-2">
                                            <div>
                                                <h1 className=" font-bold mb-3">Product Name</h1>
                                                <select className="border-2 border-primary rounded-lg h-10 px-3" style={{ width: 200 }}
                                                    name="productType" placeholder="Choose Product" value={items[index].id} onChange={(e) => { handleProduct(index, e.target.value)  }}>
                                                        <option hidden selected >Choose product</option>
                                                    {
                                                        
                                                        productList.map((u: { id: string, name: string}, pIndex:number) => {
                                                            return <option key={pIndex} value={u.id} >{u.name}</option>
                                                        })
                                                    }
                                                   
                                                </select>
                                            </div>

                                            <div>
                                                <h1 className=" font-bold mb-3"> Price</h1>
                                                <input name="Price" value={items[index].price} placeholder="Price" className=" border-2 border-primary rounded-lg h-10 px-3" style={{ width: 100 }} type={"text"} disabled />
                                            </div>

                                            <div>
                                                <h1 className=" font-bold mb-3"> Quantity</h1>
                                                <div className="flex flex-row">
                                                    <button className=" flex justify-center items-center bg-primary cursor-pointer rounded-l-lg" style={{ width: 45, height: 30 }} onClick={() => handleQuantity(index, false)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.465" height="1" viewBox="0 0 22.465 1">
                                                            <line id="Line_7" data-name="Line 7" x2="22.465" transform="translate(0 0.5)" fill="none" stroke="#fff" stroke-width="1" />
                                                        </svg>

                                                    </button>
                                                    <div className=" flex justify-center items-center bg-white border-2 border-primary" style={{ width: 40, height: 30 }}>
                                                        <p>{item.quantity}</p>

                                                    </div>

                                                    <button className=" flex justify-center items-center bg-primary cursor-pointer rounded-r-lg" style={{ width: 45, height: 30 }} onClick={() => handleQuantity(index, true)}>
                                                        <svg id="Group_27" data-name="Group 27" xmlns="http://www.w3.org/2000/svg" width="22.465" height="22.465" viewBox="0 0 22.465 22.465">
                                                            <line id="Line_8" data-name="Line 8" x2="22.465" transform="translate(0 11.233)" fill="none" stroke="#fff" stroke-width="1" />
                                                            <line id="Line_9" data-name="Line 9" y2="22.465" transform="translate(11.233)" fill="none" stroke="#fff" stroke-width="1" />
                                                        </svg>


                                                    </button>

                                                </div>

                                            </div>
                                            <div>
                                                <h1 className=" font-bold mb-3">Action</h1>
                                                <button className=" bg-red-600 text-white rounded-lg" style={{ height: 30, width: 70 }} onClick={() => handleDelete(index)}>Delete</button>
                                            </div>

                                        </div>

                                    </div>

                                })
                            }

                            <div className=" w-3/4 my-3">
                                <h1 className=" font-bold mb-3">Total Price</h1>
                                <input name="globalPrice" value={totalPrice} className=" border-2 border-primary rounded-lg h-10 w-full px-3" type={"number"} min="0" disabled />
                            </div>

                            <div className=" w-3/4 my-3">
                                <h1 className=" font-bold mb-3" >User</h1>

                                <select className="border-2 border-primary rounded-lg h-10 w-full px-3"
                                    name="productType" value={user} onChange={(e) => setUser(e.target.value)}>
                                        <option hidden selected >Choose User</option>
                                    {
                                        userList.map((u: { id: string, firstName: string, lastName: string }) => {
                                            return <option value={u.id} >{u.firstName + " " + u.lastName}</option>
                                        })
                                    }


                                </select>
                            </div>


                            <div className=" w-2/4 my-3">

                                <ErrorText message={error} />
                            </div>


                            <button
                                onClick={onSubmit}
                                disabled={loading}
                                type="submit"
                                className="cursor-pointer primary-button flex justify-center items-center rounded-lg"
                            >
                                {loading ? <IconLoading /> : <span>Create Order</span>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateOrder;