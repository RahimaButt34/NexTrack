

"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage() {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const result = await signIn("credentials", {
//       email, password, redirect: false,
//     });

//     if (result?.ok) {
//       router.push("/"); 
//     } else {
//       alert("Login failed! .");
//     }
//   };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const result = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (result?.ok) {
    // Role based redirection logic
    if (email === "admin@gmail.com") {
      router.push("/adminpanel");
    } else {
      router.push("/dashboard");
    }
  } else {
    alert("Invalid Credentials");
  }
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="p-8 border rounded shadow-md w-80">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <input type="email" placeholder="Email" className="border p-2 mb-2 w-full" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2 mb-4 w-full" onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-green-500 text-white p-2 w-full rounded">Login</button>
      </form>
    </div>
  );
}