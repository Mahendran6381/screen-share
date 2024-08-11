'use client';
import React from "react";

export default function Login(){
    const handleSubmit = (e: React.ChangeEvent<EventTarget>)=>{
        const form: FormData = new FormData(e.target)
        e.preventDefault()
        console.log(form.get("email"));
            fetch('api/login',{
                method:'POST',
                body:JSON.stringify(form),
                headers:{
                    'content-type': 'application/json'
                }
            })
    }
    return (
        <>
        <div className="container mx-auto my-auto auth-container inset-0 " >
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="example@email.com"></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="password"></input>
                </div>
                <div>
                    <input type="submit" className=""/>
                </div>
            </form>
        </div>
        </>
    )
}

