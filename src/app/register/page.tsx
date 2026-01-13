"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }
    });

    if (res.ok) {
      router.push("/login");
    } else {
      alert("Registration failed! Email shayad pehle se exist karta hai.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSignup} className="p-8 bg-white shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        <input 
          className="border p-2 mb-3 w-full rounded" 
          placeholder="Name" 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
        />
        <input 
          className="border p-2 mb-3 w-full rounded" 
          type="email" placeholder="Email" required
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
        />
        <input 
          className="border p-2 mb-6 w-full rounded" 
          type="password" placeholder="Password" required
          onChange={(e) => setFormData({...formData, password: e.target.value})} 
        />
        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </div>
  );
}