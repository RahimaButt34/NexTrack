
// // // // import prisma from "@/lib/db";
// // // // import { NextResponse } from "next/server";
// // // // import { getServerSession } from "next-auth";
// // // // import { authOptions } from "@/lib/auth";

// // // // export async function GET() {
// // // //   try {
// // // //     const session = await getServerSession(authOptions);

// // // //     // Security: Check karein ke user login hai aur ADMIN hai
// // // //     // Note: Aapke schema mein role: "ADMIN" hona chahiye
// // // //     if (!session || (session.user as any).role !== "ADMIN") {
// // // //        // return NextResponse.json({ error: "Forbidden" }, { status: 403 });
// // // //     }

// // // //     // Ek hi baar mein saara data fetch karna
// // // //     const [totalUsers, totalIssues, usersList] = await Promise.all([
// // // //       prisma.user.count(),
// // // //       prisma.issue.count(),
// // // //       prisma.user.findMany({
// // // //         select: { id: true, name: true, email: true, role: true },
// // // //         orderBy: { createdAt: "desc" },
// // // //         take: 5, // Sirf 5 naye users dikhane ke liye
// // // //       }),
// // // //     ]);

// // // //     return NextResponse.json({
// // // //       totalUsers,
// // // //       totalIssues,
// // // //       usersList,
// // // //     }, { status: 200 });

// // // //   } catch (error: any) {
// // // //     return NextResponse.json({ error: error.message }, { status: 500 });
// // // //   }
// // // // }


// // // "use client";
// // // import { useEffect, useState } from "react";

// // // export default function AdminPanelPage() {
// // //   const [stats, setStats] = useState({ totalUsers: 0, totalIssues: 0, usersList: [] });

// // //   useEffect(() => {
// // //     // API call jo humne step 1 mein banayi
// // //     fetch("/api/admin/stats")
// // //       .then((res) => res.json())
// // //       .then((data) => setStats(data));
// // //   }, []);

// // //   return (
// // //     <div className="p-10 bg-slate-900 min-h-screen text-white">
// // //       <h1 className="text-3xl font-bold mb-8">Admin Control Center</h1>
      
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
// // //         <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
// // //           <p className="text-slate-400">Total Users</p>
// // //           <p className="text-4xl font-bold">{stats.totalUsers}</p>
// // //         </div>
// // //         <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
// // //           <p className="text-slate-400">Total Issues</p>
// // //           <p className="text-4xl font-bold">{stats.totalIssues}</p>
// // //         </div>
// // //       </div>

// // //       <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
// // //         <h2 className="text-xl font-semibold mb-4">All Users</h2>
// // //         <table className="w-full text-left">
// // //           <thead>
// // //             <tr className="text-slate-400 border-b border-slate-700">
// // //               <th className="pb-2">Name</th>
// // //               <th className="pb-2">Email</th>
// // //               <th className="pb-2">Role</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {stats.usersList.map((user: any) => (
// // //               <tr key={user.id} className="border-b border-slate-700/50">
// // //                 <td className="py-3">{user.name || "N/A"}</td>
// // //                 <td className="py-3">{user.email}</td>
// // //                 <td className="py-3">
// // //                   <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-bold">
// // //                     {user.role}
// // //                   </span>
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // "use client";
// // import { useEffect, useState } from "react";

// // export default function AdminPanelPage() {
// //   const [stats, setStats] = useState({ totalUsers: 0, totalIssues: 0, usersList: [] });
// //   // Yeh state control karegi ke kitne users dikhane hain
// //   const [visibleUsers, setVisibleUsers] = useState(5); 

// //   useEffect(() => {
// //     fetch("/api/admin/stats")
// //       .then((res) => res.json())
// //       .then((data) => setStats(data));
// //   }, []);

// //   // "Load More" function
// //   const showMoreUsers = () => {
// //     setVisibleUsers((prevValue) => prevValue + 5); // Har click par 5 users aur dikhayega
// //   };

// //   return (
// //     <div className="p-10 bg-slate-900 min-h-screen text-white">
// //       <h1 className="text-3xl font-bold mb-8 text-blue-400">Admin Control Center</h1>
      
// //       {/* Stats Cards Section */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
// //         <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
// //           <p className="text-slate-400 font-semibold uppercase text-xs">Total Users</p>
// //           <p className="text-5xl font-bold text-blue-500 mt-2">{stats.totalUsers}</p>
// //         </div>
// //         <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
// //           <p className="text-slate-400 font-semibold uppercase text-xs">Total Issues</p>
// //           <p className="text-5xl font-bold text-purple-500 mt-2">{stats.totalIssues}</p>
// //         </div>
// //       </div>

// //       {/* User Table Section */}
// //       <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl">
// //         <h2 className="text-xl font-semibold mb-6 border-b border-slate-700 pb-2">User Registry</h2>
// //         <div className="overflow-x-auto">
// //           <table className="w-full text-left">
// //             <thead>
// //               <tr className="text-slate-400 border-b border-slate-700 text-sm">
// //                 <th className="pb-3 px-2">Name</th>
// //                 <th className="pb-3 px-2">Email</th>
// //                 <th className="pb-3 px-2">Role</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {/* .slice() use karke hum list ko control kar rahe hain */}
// //               {stats.usersList.slice(0, visibleUsers).map((user: any) => (
// //                 <tr key={user.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition">
// //                   <td className="py-4 px-2 font-medium">{user.name || "N/A"}</td>
// //                   <td className="py-4 px-2 text-slate-300">{user.email}</td>
// //                   <td className="py-4 px-2">
// //                     <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
// //                       {user.role}
// //                     </span>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Load More Button */}
// //         {visibleUsers < stats.usersList.length && (
// //           <div className="mt-8 text-center">
// //             <button 
// //               onClick={showMoreUsers}
// //               className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg font-semibold transition-all shadow-md active:scale-95"
// //             >
// //               Load More Users
// //             </button>
// //             <p className="text-xs text-slate-500 mt-2">
// //               Showing {visibleUsers} of {stats.usersList.length} users
// //             </p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }


// // "use client";
// // import { useEffect, useState } from "react";
// // import Link from "next/link"; // Link import karein
// // import { ExternalLink } from "lucide-react"; // Icon ke liye

// // export default function AdminPanelPage() {
// //   const [stats, setStats] = useState({ totalUsers: 0, totalIssues: 0, usersList: [] });
// //   const [visibleUsers, setVisibleUsers] = useState(5);

// //   useEffect(() => {
// //     fetch("/api/admin/stats")
// //       .then((res) => res.json())
// //       .then((data) => setStats(data));
// //   }, []);

// //   const showMoreUsers = () => {
// //     setVisibleUsers((prevValue) => prevValue + 5);
// //   };

// //   return (
// //     <div className="p-10 bg-slate-900 min-h-screen text-white">
// //       <h1 className="text-3xl font-bold mb-8 text-blue-400">Admin Control Center</h1>
      
// //       {/* Stats Cards Section */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
// //         <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
// //           <p className="text-slate-400 font-semibold uppercase text-xs">Total Users</p>
// //           <p className="text-5xl font-bold text-blue-500 mt-2">{stats.totalUsers}</p>
// //         </div>

// //         {/* CLICKABLE TOTAL ISSUES CARD */}
// //         <Link href="/admin/issues" className="block group">
// //           <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg group-hover:border-purple-500 transition-all cursor-pointer relative">
// //             <div className="flex justify-between items-center">
// //               <p className="text-slate-400 font-semibold uppercase text-xs">Total Issues</p>
// //               <ExternalLink size={16} className="text-slate-500 group-hover:text-purple-400 transition-colors" />
// //             </div>
// //             <p className="text-5xl font-bold text-purple-500 mt-2">{stats.totalIssues}</p>
// //             <p className="text-[10px] text-slate-500 mt-4 group-hover:text-slate-300 transition-colors">Click to view all reported issues →</p>
// //           </div>
// //         </Link>
// //       </div>

// //       {/* User Table Section - Remaining Same */}
// //       <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl">
// //         <h2 className="text-xl font-semibold mb-6 border-b border-slate-700 pb-2">User Registry</h2>
// //         <div className="overflow-x-auto">
// //           <table className="w-full text-left">
// //             <thead>
// //               <tr className="text-slate-400 border-b border-slate-700 text-sm">
// //                 <th className="pb-3 px-2">Name</th>
// //                 <th className="pb-3 px-2">Email</th>
// //                 <th className="pb-3 px-2">Role</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {stats.usersList.slice(0, visibleUsers).map((user: any) => (
// //                 <tr key={user.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition">
// //                   <td className="py-4 px-2 font-medium">{user.name || "N/A"}</td>
// //                   <td className="py-4 px-2 text-slate-300">{user.email}</td>
// //                   <td className="py-4 px-2">
// //                     <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
// //                       {user.role}
// //                     </span>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>

// //         {visibleUsers < stats.usersList.length && (
// //           <div className="mt-8 text-center">
// //             <button 
// //               onClick={showMoreUsers}
// //               className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg font-semibold transition-all shadow-md active:scale-95"
// //             >
// //               Load More Users
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }


// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link"; 
// import { ExternalLink, UserPlus, Users } from "lucide-react"; // Naye icons

// export default function AdminPanelPage() {
//   const [stats, setStats] = useState({ totalUsers: 0, totalIssues: 0 });

//   useEffect(() => {
//     fetch("/api/admin/stats")
//       .then((res) => res.json())
//       .then((data) => setStats(data));
//   }, []);

//   return (
//     <div className="p-10 bg-slate-900 min-h-screen text-white">
//       {/* Header Section with Add User Button */}
//       <div className="flex justify-between items-center mb-10">
//         <h1 className="text-3xl font-bold text-blue-400">Admin Control Center</h1>
        
//         {/* ⭐ Naya Add User Button jo database mein user add karne ke kaam ayega */}
//         <Link href="/admin/users/new">
//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-900/20">
//             <UserPlus size={18} />
//             ADD RECORD
//           </button>
//         </Link>
//       </div>
      
//       {/* Stats Cards Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
//         {/* ⭐ CLICKABLE TOTAL USERS CARD (Pehle ye sirf text tha, ab navigation hai) */}
//         <Link href="/admin/users" className="block group">
//           <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg group-hover:border-blue-500 transition-all cursor-pointer relative overflow-hidden">
//             <div className="flex justify-between items-center relative z-10">
//               <div className="flex items-center gap-3">
//                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
//                     <Users size={20} />
//                  </div>
//                  <p className="text-slate-400 font-semibold uppercase text-xs tracking-widest">Total Users</p>
//               </div>
//               <ExternalLink size={16} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
//             </div>
//             <p className="text-6xl font-black text-blue-500 mt-4 relative z-10">{stats.totalUsers}</p>
//             <p className="text-[11px] text-slate-500 mt-6 group-hover:text-slate-300 transition-colors font-medium italic">
//                Click to manage all registered users →
//             </p>
//             {/* Background design element */}
//             <div className="absolute -right-4 -bottom-4 text-slate-700/10 rotate-12 group-hover:text-blue-500/5 transition-colors">
//                <Users size={120} />
//             </div>
//           </div>
//         </Link>

//         {/* CLICKABLE TOTAL ISSUES CARD */}
//         <Link href="/admin/issues" className="block group">
//           <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg group-hover:border-purple-500 transition-all cursor-pointer relative overflow-hidden">
//             <div className="flex justify-between items-center relative z-10">
//                <div className="flex items-center gap-3">
//                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
//                     <ExternalLink size={20} />
//                  </div>
//                  <p className="text-slate-400 font-semibold uppercase text-xs tracking-widest">Total Issues</p>
//               </div>
//               <ExternalLink size={16} className="text-slate-500 group-hover:text-purple-400 transition-colors" />
//             </div>
//             <p className="text-6xl font-black text-purple-500 mt-4 relative z-10">{stats.totalIssues}</p>
//             <p className="text-[11px] text-slate-500 mt-6 group-hover:text-slate-300 transition-colors font-medium italic">
//                Click to view all reported issues →
//             </p>
//             {/* Background design element */}
//             <div className="absolute -right-4 -bottom-4 text-slate-700/10 rotate-12 group-hover:text-purple-500/5 transition-colors">
//                <ExternalLink size={120} />
//             </div>
//           </div>
//         </Link>
//       </div>

//       {/* Note: User Registry wala section aapki requirement ke mutabiq remove kar diya gaya hai */}
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ExternalLink, UserPlus, Users, X } from "lucide-react";

export default function AdminPanelPage() {
  const [stats, setStats] = useState({ totalUsers: 0, totalIssues: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "USER" });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = () => {
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then((data) => setStats({ totalUsers: data.totalUsers, totalIssues: data.totalIssues }));
  };

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("User Added Successfully!");
      setIsModalOpen(false);
      setFormData({ name: "", email: "", password: "", role: "USER" });
      fetchStats(); // Count update karne ke liye
    } else {
      alert("Error adding user");
    }
  };

  return (
    <div className="p-10 bg-slate-900 min-h-screen text-white font-sans">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-blue-400">Admin Control Center</h1>
        
        {/* ⭐ Neon Database jesa Add Record Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95 shadow-lg"
        >
          <UserPlus size={20} />
          + Add record
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Clickable Total Users Card */}
        <Link href="/admin/users" className="block group">
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all cursor-pointer relative overflow-hidden">
            <div className="flex justify-between items-center relative z-10">
              <p className="text-slate-400 font-semibold uppercase text-xs tracking-widest">Total Users</p>
              <ExternalLink size={16} className="text-slate-500 group-hover:text-blue-400" />
            </div>
            <p className="text-6xl font-black text-blue-500 mt-4 relative z-10">{stats.totalUsers}</p>
            <p className="text-[11px] text-slate-500 mt-6 group-hover:text-slate-200">View all users in detail →</p>
          </div>
        </Link>

        {/* Total Issues Card */}
        <Link href="/admin/issues" className="block group">
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all cursor-pointer relative overflow-hidden">
            <div className="flex justify-between items-center relative z-10">
              <p className="text-slate-400 font-semibold uppercase text-xs tracking-widest">Total Issues</p>
              <ExternalLink size={16} className="text-slate-500 group-hover:text-purple-400" />
            </div>
            <p className="text-6xl font-black text-purple-500 mt-4 relative z-10">{stats.totalIssues}</p>
            <p className="text-[11px] text-slate-500 mt-6 group-hover:text-slate-200">Review reported issues →</p>
          </div>
        </Link>
      </div>

      {/* ⭐ ADD RECORD MODAL (Popup Form) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-slate-700 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-slate-700 flex justify-between items-center bg-slate-800/50">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Users className="text-blue-400" size={20} /> Add New User
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleAddUser} className="p-6 space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Full Name</label>
                <input 
                  required
                  type="text"
                  placeholder="e.g. Fatima"
                  className="w-full mt-1 bg-slate-900 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Email Address</label>
                <input 
                  required
                  type="email"
                  placeholder="user@example.com"
                  className="w-full mt-1 bg-slate-900 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">Password</label>
                <input 
                  required
                  type="password"
                  placeholder="••••••••"
                  className="w-full mt-1 bg-slate-900 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500 transition-all"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold mt-4 transition-all shadow-lg"
              >
                INSERT RECORD
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}