'use client'
import react from 'react';
import 'dotenv';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react';
export default function Register(){
    const [isMessage, setIsMessage] = useState(false)
    const [message,setMessage] = useState("")
    const handleSubmit = async (e)=>{
        e.preventDefault()
        setIsMessage(false)
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const data = {
            name:name,
            email:email,
            password:password
        }
        try{
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL +"/auth/register",{
                method: 'POST',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json'
                },
            })
            if(res){
               setMessage("Form Submited")
               setIsMessage(true)
            }else{
                setMessage('Error')
                setIsMessage(true)
            }
                               
        } catch(err){
             setMessage('Error')
        }
    }

   return(
       <>
          <Box
            component='form'
            onSubmit={ (e)=> handleSubmit(e)}
          >
              <TextField
              label="Your Name"
              type='text'
              name='name'
              >
              </TextField>
              <TextField
              label="Your Email"
              type='email'
              name="email"
              >
              </TextField>
              <TextField
              label="Your Password"
              type='password'
              name="password"
              >
              </TextField>
<Button type='submit'>Submit</Button>
    {isMessage ? <p>{message}</p> : <></>}
          </Box>
       </>
   )    
}