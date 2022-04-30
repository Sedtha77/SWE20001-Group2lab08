import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBook, faUser} from '@fortawesome/free-solid-svg-icons'

const colors = [
  "red",
  "#2F9599",
  "pink",
  "orange",
  "green",
  "#00008b",
  "#F67280",
  "#34cfeb"
];


const Item = ({item, color} : {item:any, color:String}) => {
  return <div className=" shadow-lg" style={{display:"flex", justifyContent:"center",alignItems:"center"
  , margin:10, padding:20, width:450,height:100, backgroundColor:"white", borderRadius:10, borderLeft:`5px solid ${color}`}}>
       

       <div  style={{display:"flex"}}>
       <FontAwesomeIcon icon={item.icon} style={{width:30}}/>
       <h5 className="text-lg" style={{fontWeight:"bold", marginLeft:10, marginRight:10}} >{item.text}</h5>


         <h5  style={{fontWeight:"bolder", fontSize:13, color:"#2a67b1"}}>{item.count}</h5>
        
       </div>
  </div>
}

const Home: NextPage = () => {

  const [list, setList] = useState([
    {text:"Total sales (Daily)", icon:faBook, count: 24 },
    {text:"Total Users (Monthly)", icon:faUser, count: 34 },
    {text:"Total Employees", icon:faUser, count: 15 }
  ]);


  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <Head>
        <title>GoToGre</title>
       
      </Head>
      <div  style={{ width: '90%'}}>
      <h1 className="header">Dashboard</h1>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
      <div className="row" style={{ justifyContent:'center', padding:15}}>
        
        {list?.map((item:any, index:any)  =>
          <Item key={index}  item={item} color={colors[index]}/>
        )}
        
        
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home
