'use client';
import React from "react";
import { useRouter } from 'next/navigation';
import { useUser } from '../../context/userContext' 


export default function Login() {
  const router = useRouter();
  let {user, setUser} = useUser();
console.log(user)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
  
    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    console.log(process.env.NEXT_PUBLIC_API_URL);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials:'include'
      });

      if (res.ok) {
        console.log("Yeai!");
        router.push('/meet');       
      } else {
        console.log("Oops! Something is wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto my-auto auth-container inset-0">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" name="email" placeholder="example@email.com" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" placeholder="password" required />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}
