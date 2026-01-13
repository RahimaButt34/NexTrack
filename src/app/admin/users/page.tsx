

// // // "use client";
// // // import { useEffect, useState } from "react";
// // // import { ArrowLeft, Edit, Trash2, X, Save, Loader2 } from "lucide-react";
// // // import Link from "next/link";

// // // export default function UsersSectionPage() {
// // //   const [users, setUsers] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [editingUser, setEditingUser] = useState<any>(null);
// // //   const [isUpdating, setIsUpdating] = useState(false);

// // //   // Users fetch karne ka function
// // //   const fetchUsers = async () => {
// // //     setLoading(true);
// // //     const res = await fetch("/api/admin/users");
// // //     const data = await res.json();
// // //     setUsers(data);
// // //     setLoading(false);
// // //   };

// // //   useEffect(() => {
// // //     fetchUsers();
// // //   }, []);

// // //   // Delete User Logic
// // //   const handleDelete = async (id: string) => {
// // //     if (!confirm("Are you sure you want to delete this user?")) return;
    
// // //     const res = await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
// // //     if (res.ok) {
// // //       alert("User deleted!");
// // //       fetchUsers();
// // //     } else {
// // //       alert("Failed to delete user");
// // //     }
// // //   };

// // //   // Edit/Update User Logic
// // //   const handleUpdate = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     setIsUpdating(true);
    
// // //     const res = await fetch(`/api/admin/users/${editingUser.id}`, {
// // //       method: "PATCH",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify(editingUser),
// // //     });

// // //     if (res.ok) {
// // //       alert("User updated!");
// // //       setEditingUser(null);
// // //       fetchUsers();
// // //     } else {
// // //       alert("Update failed");
// // //     }
// // //     setIsUpdating(false);
// // //   };

// // //   return (
// // //     <div className="p-10 bg-slate-900 min-h-screen text-white">
// // //       <div className="flex items-center gap-4 mb-8">
// // //         <Link href="/admin" className="text-slate-400 hover:text-white transition">
// // //           <ArrowLeft size={24} />
// // //         </Link>
// // //         <h1 className="text-3xl font-bold text-blue-400">User Management</h1>
// // //       </div>

// // //       {loading ? (
// // //         <div className="flex justify-center mt-20"><Loader2 className="animate-spin text-blue-500" size={40} /></div>
// // //       ) : (
// // //         <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-xl">
// // //           <table className="w-full text-left">
// // //             <thead className="bg-slate-700/50 text-slate-300 text-sm uppercase tracking-wider">
// // //               <tr>
// // //                 <th className="p-4">Name</th>
// // //                 <th className="p-4">Email</th>
// // //                 <th className="p-4">Role</th>
// // //                 <th className="p-4 text-center">Actions</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody className="divide-y divide-slate-700">
// // //               {users.map((user: any) => (
// // //                 <tr key={user.id} className="hover:bg-slate-700/30 transition">
// // //                   <td className="p-4 font-medium">{user.name}</td>
// // //                   <td className="p-4 text-slate-400">{user.email}</td>
// // //                   <td className="p-4">
// // //                     <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
// // //                       {user.role}
// // //                     </span>
// // //                   </td>
// // //                   <td className="p-4 flex justify-center gap-3">
// // //                     <button 
// // //                       onClick={() => setEditingUser(user)}
// // //                       className="p-2 bg-yellow-500/10 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-white transition"
// // //                     >
// // //                       <Edit size={18} />
// // //                     </button>
// // //                     <button 
// // //                       onClick={() => handleDelete(user.id)}
// // //                       className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
// // //                     >
// // //                       <Trash2 size={18} />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       )}

// // //       {/* ⭐ Edit Modal */}
// // //       {editingUser && (
// // //         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
// // //           <div className="bg-slate-800 border border-slate-700 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
// // //             <div className="p-6 border-b border-slate-700 flex justify-between items-center bg-slate-800/50">
// // //               <h2 className="text-xl font-bold">Edit User Details</h2>
// // //               <button onClick={() => setEditingUser(null)} className="text-slate-400 hover:text-white">
// // //                 <X size={24} />
// // //               </button>
// // //             </div>
            
// // //             <form onSubmit={handleUpdate} className="p-6 space-y-4">
// // //               <div>
// // //                 <label className="text-xs font-bold text-slate-400 uppercase">Full Name</label>
// // //                 <input 
// // //                   type="text"
// // //                   className="w-full mt-1 bg-slate-900 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500"
// // //                   value={editingUser.name}
// // //                   onChange={(e) => setEditingUser({...editingUser, name: e.target.value})}
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <label className="text-xs font-bold text-slate-400 uppercase">Email</label>
// // //                 <input 
// // //                   type="email"
// // //                   className="w-full mt-1 bg-slate-900 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500"
// // //                   value={editingUser.email}
// // //                   onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <label className="text-xs font-bold text-slate-400 uppercase">New Password (Optional)</label>
// // //                 <input 
// // //                   type="password"
// // //                   placeholder="Leave blank to keep current"
// // //                   className="w-full mt-1 bg-slate-900 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500"
// // //                   onChange={(e) => setEditingUser({...editingUser, password: e.target.value})}
// // //                 />
// // //               </div>
              
// // //               <button 
// // //                 type="submit"
// // //                 disabled={isUpdating}
// // //                 className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2"
// // //               >
// // //                 {isUpdating ? <Loader2 className="animate-spin" /> : <Save size={20} />}
// // //                 SAVE CHANGES
// // //               </button>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }


// // "use client";
// // import { useEffect, useState } from "react";
// // import { ArrowLeft, Edit, Trash2, X, Save, Loader2 } from "lucide-react";
// // import Link from "next/link";

// // export default function UsersSectionPage() {
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [editingUser, setEditingUser] = useState<any>(null);
// //   const [isUpdating, setIsUpdating] = useState(false);

// //   // ⭐ Users fetch karne ka function - Updated Path
// //   const fetchUsers = async () => {
// //     setLoading(true);
// //     try {
// //       const res = await fetch("/api/admin/usersList"); // Updated to usersList
// //       const data = await res.json();
// //       setUsers(data);
// //     } catch (err) {
// //       console.error("Failed to fetch usersList");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUsers();
// //   }, []);

// //   // ⭐ Delete User Logic - Updated Path
// //   const handleDelete = async (id: string) => {
// //     if (!confirm("Are you sure you want to delete this user?")) return;
    
// //     const res = await fetch(`/api/admin/usersList/${id}`, { method: "DELETE" }); // Updated to usersList
// //     if (res.ok) {
// //       alert("User removed from usersList!");
// //       fetchUsers();
// //     } else {
// //       alert("Failed to delete user");
// //     }
// //   };

// //   // ⭐ Edit/Update User Logic - Updated Path
// //   const handleUpdate = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsUpdating(true);
    
// //     try {
// //       const res = await fetch(`/api/admin/usersList/${editingUser.id}`, { // Updated to usersList
// //         method: "PATCH",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(editingUser),
// //       });

// //       const result = await res.json();

// //       if (res.ok) {
// //         alert("usersList record updated!");
// //         setEditingUser(null);
// //         fetchUsers();
// //       } else {
// //         // Backend se aane wala error message (e.g. Email already exists) dikhayega
// //         alert(result.error || "Update failed");
// //       }
// //     } catch (err) {
// //       alert("Network error occurred");
// //     } finally {
// //       setIsUpdating(false);
// //     }
// //   };

// //   return (
// //     <div className="p-10 bg-slate-900 min-h-screen text-white font-sans">
// //       <div className="flex items-center gap-4 mb-8">
// //         <Link href="/admin" className="text-slate-400 hover:text-white transition-colors">
// //           <ArrowLeft size={24} />
// //         </Link>
// //         <h1 className="text-3xl font-bold text-blue-400">User Management (usersList)</h1>
// //       </div>

// //       {loading ? (
// //         <div className="flex justify-center mt-20">
// //           <Loader2 className="animate-spin text-blue-500" size={40} />
// //         </div>
// //       ) : (
// //         <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
// //           <table className="w-full text-left">
// //             <thead className="bg-slate-700/50 text-slate-300 text-sm uppercase tracking-wider">
// //               <tr>
// //                 <th className="p-4">Name</th>
// //                 <th className="p-4">Email</th>
// //                 <th className="p-4">Role</th>
// //                 <th className="p-4 text-center">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-slate-700">
// //               {users.map((user: any) => (
// //                 <tr key={user.id} className="hover:bg-slate-700/30 transition-all">
// //                   <td className="p-4 font-medium">{user.name || "N/A"}</td>
// //                   <td className="p-4 text-slate-400">{user.email}</td>
// //                   <td className="p-4">
// //                     <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
// //                       {user.role}
// //                     </span>
// //                   </td>
// //                   <td className="p-4 flex justify-center gap-3">
// //                     <button 
// //                       onClick={() => setEditingUser(user)}
// //                       className="p-2 bg-yellow-500/10 text-yellow-500 rounded-lg hover:bg-yellow-600 hover:text-white transition-all active:scale-90"
// //                       title="Edit User"
// //                     >
// //                       <Edit size={18} />
// //                     </button>
// //                     <button 
// //                       onClick={() => handleDelete(user.id)}
// //                       className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-600 hover:text-white transition-all active:scale-90"
// //                       title="Delete User"
// //                     >
// //                       <Trash2 size={18} />
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //           {users.length === 0 && (
// //             <div className="p-10 text-center text-slate-500">No users found in usersList.</div>
// //           )}
// //         </div>
// //       )}

// //       {/* ⭐ Edit Modal */}
// //       {editingUser && (
// //         <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
// //           <div className="bg-slate-800 border border-slate-700 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
// //             <div className="p-6 border-b border-slate-700 flex justify-between items-center bg-slate-800/50">
// //               <h2 className="text-xl font-bold">Edit Record</h2>
// //               <button onClick={() => setEditingUser(null)} className="text-slate-400 hover:text-white transition-colors">
// //                 <X size={24} />
// //               </button>
// //             </div>
            
// //             <form onSubmit={handleUpdate} className="p-6 space-y-4">
// //               <div className="space-y-1">
// //                 <label className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Full Name</label>
// //                 <input 
// //                   type="text"
// //                   required
// //                   className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 outline-none focus:border-blue-500 transition-all text-white"
// //                   value={editingUser.name}
// //                   onChange={(e) => setEditingUser({...editingUser, name: e.target.value})}
// //                 />
// //               </div>
// //               <div className="space-y-1">
// //                 <label className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Email Address</label>
// //                 <input 
// //                   type="email"
// //                   required
// //                   className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 outline-none focus:border-blue-500 transition-all text-white"
// //                   value={editingUser.email}
// //                   onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
// //                 />
// //               </div>
// //               <div className="space-y-1">
// //                 <label className="text-xs font-bold text-slate-400 uppercase tracking-tighter">New Password (Optional)</label>
// //                 <input 
// //                   type="password"
// //                   placeholder="Keep blank to stay same"
// //                   className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-600"
// //                   onChange={(e) => setEditingUser({...editingUser, password: e.target.value})}
// //                 />
// //               </div>
              
// //               <button 
// //                 type="submit"
// //                 disabled={isUpdating}
// //                 className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-900/20"
// //               >
// //                 {isUpdating ? <Loader2 className="animate-spin" /> : <Save size={20} />}
// //                 {isUpdating ? "UPDATING..." : "CONFIRM CHANGES"}
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// "use client";
// import { useEffect, useState } from "react";
// import { ArrowLeft, Edit, Trash2, X, Save, Loader2, User } from "lucide-react";
// import Link from "next/link";

// export default function UsersSectionPage() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingUser, setEditingUser] = useState<any>(null);
//   const [isUpdating, setIsUpdating] = useState(false);

//   // ⭐ Function: usersList fetch karne ke liye (GET Request)
//   const fetchUsers = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("/api/admin/usersList"); // Matching your folder name
//       const data = await res.json();
      
//       if (res.ok) {
//         setUsers(data);
//       } else {
//         console.error("Error fetching list:", data.error);
//         setUsers([]);
//       }
//     } catch (err) {
//       console.error("Network Error:", err);
//       setUsers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // ⭐ Function: Record Delete karne ke liye
//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this user?")) return;
    
//     try {
//       const res = await fetch(`/api/admin/usersList/${id}`, { method: "DELETE" });
//       if (res.ok) {
//         alert("User removed from usersList!");
//         fetchUsers(); // List refresh karein
//       } else {
//         alert("Failed to delete user");
//       }
//     } catch (err) {
//       alert("Error deleting user");
//     }
//   };

//   // ⭐ Function: Details Update karne ke liye (PATCH)
//   const handleUpdate = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsUpdating(true);
    
//     try {
//       const res = await fetch(`/api/admin/usersList/${editingUser.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(editingUser),
//       });

//       const result = await res.json();

//       if (res.ok) {
//         alert("Profile updated successfully!");
//         setEditingUser(null);
//         fetchUsers();
//       } else {
//         alert(result.error || "Update failed");
//       }
//     } catch (err) {
//       alert("Connection error");
//     } finally {
//       setIsUpdating(false);
//     }
//   };

//   return (
//     <div className="p-10 bg-slate-900 min-h-screen text-white font-sans">
//       <div className="flex items-center gap-4 mb-8">
//         <Link href="/admin" className="p-2 hover:bg-slate-800 rounded-full transition">
//           <ArrowLeft size={24} className="text-slate-400 hover:text-white" />
//         </Link>
//         <h1 className="text-3xl font-bold text-blue-400">Manage usersList</h1>
//       </div>

//       {loading ? (
//         <div className="flex flex-col items-center justify-center mt-20 gap-4">
//           <Loader2 className="animate-spin text-blue-500" size={50} />
//           <p className="text-slate-400 animate-pulse">Fetching records from usersList...</p>
//         </div>
//       ) : (
//         <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
//           <table className="w-full text-left">
//             <thead className="bg-slate-700/50 text-slate-300 text-sm uppercase tracking-wider">
//               <tr>
//                 <th className="p-5">User Info</th>
//                 <th className="p-5">Email Address</th>
//                 <th className="p-5">Role</th>
//                 <th className="p-5 text-center">Manage</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-700/50">
//               {users.length > 0 ? (
//                 users.map((user: any) => (
//                   <tr key={user.id} className="hover:bg-slate-700/30 transition-all group">
//                     <td className="p-5 font-semibold text-slate-200">{user.name || "Unnamed"}</td>
//                     <td className="p-5 text-slate-400 italic">{user.email}</td>
//                     <td className="p-5">
//                       <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
//                         {user.role}
//                       </span>
//                     </td>
//                     <td className="p-5 flex justify-center gap-3">
//                       <button 
//                         onClick={() => setEditingUser(user)}
//                         className="p-2.5 bg-yellow-500/10 text-yellow-500 rounded-xl hover:bg-yellow-500 hover:text-black transition-all"
//                       >
//                         <Edit size={18} />
//                       </button>
//                       <button 
//                         onClick={() => handleDelete(user.id)}
//                         className="p-2.5 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"
//                       >
//                         <Trash2 size={18} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={4} className="p-20 text-center text-slate-500 text-lg">
//                     No records found in usersList. Add some users first!
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* ⭐ Professional Edit Modal */}
//       {editingUser && (
//         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//           <div className="bg-slate-800 border border-slate-700 w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in duration-200">
//             <div className="p-6 border-b border-slate-700 flex justify-between items-center bg-slate-900/30">
//               <h2 className="text-xl font-bold flex items-center gap-2">
//                 <User size={20} className="text-blue-400" /> Update Record
//               </h2>
//               <button onClick={() => setEditingUser(null)} className="text-slate-500 hover:text-white transition">
//                 <X size={26} />
//               </button>
//             </div>
            
//             <form onSubmit={handleUpdate} className="p-8 space-y-5">
//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-slate-500 uppercase ml-1">Full Name</label>
//                 <input 
//                   type="text"
//                   required
//                   className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 outline-none focus:ring-2 ring-blue-500/50 transition-all"
//                   value={editingUser.name}
//                   onChange={(e) => setEditingUser({...editingUser, name: e.target.value})}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email</label>
//                 <input 
//                   type="email"
//                   required
//                   className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 outline-none focus:ring-2 ring-blue-500/50 transition-all"
//                   value={editingUser.email}
//                   onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-slate-500 uppercase ml-1">New Password</label>
//                 <input 
//                   type="password"
//                   placeholder="Leave empty to keep same"
//                   className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 outline-none focus:ring-2 ring-blue-500/50 transition-all placeholder:text-slate-600"
//                   onChange={(e) => setEditingUser({...editingUser, password: e.target.value})}
//                 />
//               </div>
              
//               <button 
//                 type="submit"
//                 disabled={isUpdating}
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-lg mt-4 flex justify-center items-center gap-2 transition-all shadow-xl shadow-blue-900/20 active:scale-95"
//               >
//                 {isUpdating ? <Loader2 className="animate-spin" /> : <Save size={22} />}
//                 {isUpdating ? "SAVING..." : "UPDATE NOW"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { Edit, Trash2, X, Save, Loader2, User } from "lucide-react";
import Link from "next/link";

export default function UsersSectionPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/usersList");
      const data = await res.json();
      if (res.ok) {
        setUsers(data);
      } else {
        setUsers([]);
      }
    } catch (err) {
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      const res = await fetch(`/api/admin/userList/${id}`, { method: "DELETE" });
      if (res.ok) {
        alert("User removed from usersList!");
        fetchUsers();
      }
    } catch (err) {
      alert("Error deleting user");
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      const res = await fetch(`/api/admin/userList/${editingUser.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingUser),


        
      });
      const result = await res.json();
      if (res.ok) {
        alert("Profile updated successfully!");
        setEditingUser(null);
        fetchUsers();
      } else {
        alert(result.error || "Update failed");
      }
    } catch (err) {
      alert("Connection error");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="p-10 bg-slate-900 min-h-screen text-white font-sans">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-blue-400">Manage usersList</h1>
        
        {/* ⭐ Back Button Redirecting to Admin Panel */}
        <Link href="/adminpanel">
          <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-6 py-2.5 rounded-xl font-bold border border-slate-700 transition-all active:scale-95 shadow-lg">
            ← Back to Admin Dashboard
          </button>
        </Link>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center mt-20 gap-4">
          <Loader2 className="animate-spin text-blue-500" size={50} />
          <p className="text-slate-400">Loading usersList records...</p>
        </div>
      ) : (
        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
          <table className="w-full text-left">
            <thead className="bg-slate-700/50 text-slate-300 text-sm uppercase tracking-wider">
              <tr>
                <th className="p-5">User Info</th>
                <th className="p-5">Email Address</th>
                <th className="p-5">Role</th>
                <th className="p-5 text-center">Manage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {users.length > 0 ? (
                users.map((user: any) => (
                  <tr key={user.id} className="hover:bg-slate-700/30 transition-all group">
                    <td className="p-5 font-semibold text-slate-200">{user.name || "Unnamed"}</td>
                    <td className="p-5 text-slate-400 italic">{user.email}</td>
                    <td className="p-5">
                      <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-1 rounded-full text-[10px] font-bold uppercase">
                        {user.role}
                      </span>
                    </td>
                    <td className="p-5 flex justify-center gap-3">
                      <button 
                        onClick={() => setEditingUser(user)}
                        className="p-2.5 bg-yellow-500/10 text-yellow-500 rounded-xl hover:bg-yellow-500 hover:text-black transition-all"
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        onClick={() => handleDelete(user.id)}
                        className="p-2.5 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-20 text-center text-slate-500 text-lg">
                    No records found in usersList.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Modal Logic Same Rehay Gi */}
      {editingUser && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-slate-700 w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-700 flex justify-between items-center bg-slate-900/30">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <User size={20} className="text-blue-400" /> Update Record
              </h2>
              <button onClick={() => setEditingUser(null)} className="text-slate-500 hover:text-white">
                <X size={26} />
              </button>
            </div>
            
            <form onSubmit={handleUpdate} className="p-8 space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                <input 
                  type="text"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 outline-none focus:ring-2 ring-blue-500/50"
                  value={editingUser.name}
                  onChange={(e) => setEditingUser({...editingUser, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Email</label>
                <input 
                  type="email"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 outline-none focus:ring-2 ring-blue-500/50"
                  value={editingUser.email}
                  onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">New Password</label>
                <input 
                  type="password"
                  placeholder="Keep blank to stay same"
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 outline-none focus:ring-2 ring-blue-500/50"
                  onChange={(e) => setEditingUser({...editingUser, password: e.target.value})}
                />
              </div>
              
              <button 
                type="submit"
                disabled={isUpdating}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold flex justify-center items-center gap-2"
              >
                {isUpdating ? <Loader2 className="animate-spin" /> : <Save size={22} />}
                {isUpdating ? "SAVING..." : "UPDATE NOW"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}