import api from "@/config/api";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import OrderTable from '@/components/table/OrderTable';
import { CSVLink } from "react-csv";
import { Data } from "react-csv/components/CommonPropTypes";
function Order() {

    const router = useRouter();
    const [userData, setUserData] = useState([]);

    //Testing data
    // const userData = [
    //     {id: 10000, firstName:"Keanthai", lastName:"kheng", phoneNumber: "04587798754"},

    // ]

    const headers = [
        {label: "Order ID", key: "id"},
        {label: "Date Time", key: "timeStamp"},
        {label: "Total Price", key: "totalPrice"},
        {label: "Customer ID", key: "customerID"}
    ]

    const data: string | Data = [
        {id: 100, timeStamp: "2022-05-17T16:22:03.139Z", totalPrice: 20, customerID: 4},
        {id: 100, timeStamp: "2022-05-17T16:22:03.139Z", totalPrice: 20, customerID: 4},
        {id: 100, timeStamp: "2022-05-17T16:22:03.139Z", totalPrice: 20, customerID: 4},
        {id: 100, timeStamp: "2022-05-17T16:22:03.139Z", totalPrice: 20, customerID: 4}
    ];


    const userApi = async () => {
        api.get('sales')
            .then((res: { data: any; }) => {
                setUserData(res.data);
            })
            .catch(res => {
                console.log("Error access to API")
            })
    }

    useEffect(() => {
        userApi();
    }, [])

    async function refresh() {
        console.log("Refresh");
        await userApi();
    }
    return (
        <>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <Head>
                    <title>Orders</title>
                </Head>
                <div style={{ width: '70%' }}>

                    <h3 className="header" >Orders</h3>

                    <div className="flex flex-row justify-between gap-2">
                        <div className=" cursor-pointer primary-button flex justify-center items-center rounded-lg my-2 "
                            >
                                <CSVLink data={data} headers={headers} filename={"orders.csv"}>
                                <p className="">Export to CSV</p>
                                </CSVLink>
                           
                        </div>

                        <div className=" cursor-pointer primary-button flex justify-center items-center rounded-lg my-2 "
                            onClick={() => router.push("order/create")} >
                            <p className="">Create</p>
                        </div>
                    </div>

                    <OrderTable rows={userData} onRefresh={() => refresh()} />


                </div>
            </div>
        </>
    );
}

export default Order;