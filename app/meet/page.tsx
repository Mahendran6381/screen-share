"use client";
import react from 'react';
const axios = require('axios'); // Import axios
import { useUser } from '../../context/userContext' 

import {useEffect,useState} from 'react'
export default function Dashboard(){
        let {user, setUser} = useUser();
        const [userData,setUserData] = useState("")
    useEffect( () => {
        const userData = async () =>{
          try{
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/meet`, {
              withCredentials: true, // Include cookies with the request
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            });
        
            if (response) {
              const data = response.data;
              console.log(data)
              console.log(user,"before")
              setUser(data);
              console.log(user,"after")
            }
          }
          catch(err){
            console.log(err)
          }
        }
        userData()
    },[])
    useEffect(() => {
      console.log(user, "updated user");
    }, [user]);

    return(
        <>
        {!userData ? <>no user</>:<>{userData}</>}
        </>
    )
}