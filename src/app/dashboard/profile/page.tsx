

"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { User, Lock, Save, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, update } = useSession(); // 'update' se session foran refresh hoga
  
  // Form ki states
  const [name, setName] = useState(session?.user?.name || "");
  const [password, setPassword] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  // Update function jo API ko call karega
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);

    try {
      const res = await fetch("/api/user/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      });

      if (res.ok) {
        alert("Profile Updated!");
        // Isse header mein user ka naam bina refresh kiye change ho jayega
        update({ name }); 
        setPassword(""); // Password field khali kar dein
      } else {
        alert("Update failed!");
      }
    } catch (err) {
      alert("Network Error!");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-black flex items-center justify-center font-sans">
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-sm border border-gray-100">
        
        {/* Back Link */}
        <Link href="/dashboard" className="flex items-center gap-2 text-gray-400 mb-6 hover:text-blue-600 transition text-sm">
          <ArrowLeft size={16} /> Dashboard
        </Link>

        <h1 className="text-2xl font-black text-gray-800 mb-2">Edit Profile</h1>
        <p className="text-sm text-gray-500 mb-8">Update your name and security password.</p>

        <form onSubmit={handleUpdate} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 p-3 border rounded-xl outline-none focus:border-blue-500 bg-gray-50 transition-all"
                placeholder="Enter your name"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">New Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 p-3 border rounded-xl outline-none focus:border-blue-500 bg-gray-50 transition-all"
                placeholder="Leave blank to keep same"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isUpdating}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all flex justify-center items-center gap-2 active:scale-95"
          >
            {isUpdating ? <Loader2 className="animate-spin" /> : <Save size={20} />}
            {isUpdating ? "Saving..." : "UPDATE PROFILE"}
          </button>
        </form>
      </div>
    </div>
  );
}