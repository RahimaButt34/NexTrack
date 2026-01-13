

// // // // "use client";
// // // // import { useState } from "react";
// // // // import { Plus, Search, UserCircle, X } from "lucide-react";

// // // // export default function UserDashboard() {
// // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // //   const [searchQuery, setSearchQuery] = useState("");

// // // //   const stats = [
// // // //     { title: "Total Issues", value: "12", color: "border-blue-600" },
// // // //     { title: "In Progress", value: "4", color: "border-yellow-500" },
// // // //     { title: "Completed", value: "8", color: "border-green-500" }
// // // //   ];

// // // //   return (
// // // //     <div className="p-6 bg-gray-50 min-h-screen relative">
// // // //       {/* Top Header Section */}
// // // //       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
// // // //         <div>
// // // //           <h1 className="text-3xl font-bold text-gray-800">User Dashboard</h1>
// // // //           <p className="text-gray-500 text-sm">Track and report your issues</p>
// // // //         </div>

// // // //         <div className="flex items-center gap-4 w-full md:w-auto">
// // // //           {/* Search Bar */}
// // // //           <div className="relative flex-1 md:w-64">
// // // //             <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
// // // //             <input 
// // // //               type="text" 
// // // //               placeholder="Search issues..." 
// // // //               className="pl-10 pr-4 py-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none"
// // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // //             />
// // // //           </div>
          
// // // //           {/* Create Issue Button */}
// // // //           <button 
// // // //             onClick={() => setIsModalOpen(true)}
// // // //             className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition shadow-md"
// // // //           >
// // // //             <Plus className="w-5 h-5" /> <span>Create Issue</span>
// // // //           </button>

// // // //           {/* Profile Icon */}
// // // //           <button className="text-gray-600 hover:text-blue-600 transition">
// // // //             <UserCircle className="w-10 h-10" />
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {/* Stats Cards */}
// // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // // //         {stats.map((stat, i) => (
// // // //           <div key={i} className={`bg-white p-6 rounded-xl shadow-sm border-l-4 ${stat.color}`}>
// // // //             <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{stat.title}</p>
// // // //             <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       {/* Reported Issues Section */}
// // // //       <div className="bg-white rounded-xl shadow-sm border p-6">
// // // //         <h2 className="text-xl font-semibold mb-6">Recent Reported Issues</h2>
// // // //         <div className="space-y-4">
// // // //           {[1, 2, 3].map((t) => (
// // // //             <div key={t} className="p-4 rounded-lg border hover:border-blue-300 transition-colors flex justify-between items-center group">
// // // //               <div>
// // // //                 <p className="font-semibold text-gray-800 group-hover:text-blue-600">Database Connection Issue - Server A</p>
// // // //                 <p className="text-sm text-gray-500 mt-1">Reported on: 10th Jan 2026</p>
// // // //               </div>
// // // //               <div className="flex items-center gap-3">
// // // //                 <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
// // // //                   In Progress
// // // //                 </span>
// // // //                 <button className="text-gray-400 hover:text-blue-500 text-sm font-medium">View Detail</button>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* --- REPORT ISSUE MODAL --- */}
// // // //       {isModalOpen && (
// // // //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
// // // //           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
// // // //             <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
// // // //               <h3 className="text-lg font-bold">Report New Issue</h3>
// // // //               <button onClick={() => setIsModalOpen(false)}><X className="w-6 h-6" /></button>
// // // //             </div>
            
// // // //             <form className="p-6 space-y-4">
// // // //               <div>
// // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Issue Title</label>
// // // //                 <input type="text" placeholder="e.g. Login page not working" className="w-full border p-2 rounded-lg outline-none focus:border-blue-500" />
// // // //               </div>
              
// // // //               <div>
// // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Issue Details</label>
// // // //                 <textarea 
// // // //                   rows={4} 
// // // //                   placeholder="Describe the issue in detail..." 
// // // //                   className="w-full border p-2 rounded-lg outline-none focus:border-blue-500 resize-none"
// // // //                 ></textarea>
// // // //               </div>

// // // //               <div className="flex gap-3 mt-6">
// // // //                 <button 
// // // //                   type="button" 
// // // //                   onClick={() => setIsModalOpen(false)}
// // // //                   className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50 transition font-medium"
// // // //                 >
// // // //                   Cancel
// // // //                 </button>
// // // //                 <button 
// // // //                   type="submit" 
// // // //                   className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
// // // //                 >
// // // //                   Submit Issue
// // // //                 </button>
// // // //               </div>
// // // //             </form>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }



// // // "use client";
// // // import { useState, useEffect } from "react";
// // // import { Plus, Search, UserCircle, X } from "lucide-react";

// // // export default function UserDashboard() {
// // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // //   const [issues, setIssues] = useState([]); // Database se aane wale issues
// // //   const [loading, setLoading] = useState(true);
  
// // //   // Form States
// // //   const [title, setTitle] = useState("");
// // //   const [description, setDescription] = useState("");

// // //   // --- 1. Database se data fetch karne ka function ---
// // //   const fetchIssues = async () => {
// // //     try {
// // //       const res = await fetch("/api/issues");
// // //       const data = await res.json();
// // //       setIssues(data);
// // //     } catch (error) {
// // //       console.error("Fetch error:", error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => { fetchIssues(); }, []);

// // //   // --- 2. Form submit karke DB mein save karne ka function ---
// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     const res = await fetch("/api/issues", {
// // //       method: "POST",
// // //       body: JSON.stringify({ title, description }),
// // //     });

// // //     if (res.ok) {
// // //       setIsModalOpen(false);
// // //       setTitle("");
// // //       setDescription("");
// // //       fetchIssues(); // List refresh karein
// // //     }
// // //   };

// // //   // --- 3. Counters calculation ---
// // //   const total = issues.length;
// // //   const inProgress = issues.filter((i: any) => i.status === "IN_PROGRESS").length;
// // //   const completed = issues.filter((i: any) => i.status === "COMPLETED").length;

// // //   return (
// // //     <div className="p-6 bg-gray-50 min-h-screen relative">
// // //       {/* HEADER SECTION */}
// // //       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
// // //         <div>
// // //           <h1 className="text-3xl font-bold text-gray-800">User Dashboard</h1>
// // //           <p className="text-gray-500 text-sm">Real-time database tracking</p>
// // //         </div>

// // //         <div className="flex items-center gap-4 w-full md:w-auto">
// // //           <button 
// // //             onClick={() => setIsModalOpen(true)}
// // //             className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-md transition"
// // //           >
// // //             <Plus className="w-5 h-5" /> <span>Create Issue</span>
// // //           </button>
// // //           <UserCircle className="w-10 h-10 text-gray-400 cursor-pointer hover:text-blue-600" />
// // //         </div>
// // //       </div>

// // //       {/* DYNAMIC COUNTERS (Stats Cards) */}
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // //         {[
// // //           { t: "Total Issues", v: total, c: "border-blue-600" },
// // //           { t: "In Progress", v: inProgress, c: "border-yellow-500" },
// // //           { t: "Completed", v: completed, c: "border-green-500" }
// // //         ].map((stat, i) => (
// // //           <div key={i} className={`bg-white p-6 rounded-xl shadow-sm border-l-4 ${stat.c}`}>
// // //             <p className="text-gray-500 text-xs font-semibold uppercase">{stat.t}</p>
// // //             <p className="text-3xl font-bold">{stat.v}</p>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* ISSUES LIST FROM DATABASE */}
// // //       <div className="bg-white rounded-xl shadow-sm border p-6">
// // //         <h2 className="text-xl font-semibold mb-6">Recent Reported Issues</h2>
// // //         <div className="space-y-4">
// // //           {loading ? <p>Loading issues...</p> : issues.map((issue: any) => (
// // //             <div key={issue.id} className="p-4 rounded-lg border flex justify-between items-center hover:bg-gray-50 transition">
// // //               <div>
// // //                 <p className="font-semibold text-gray-800">{issue.title}</p>
// // //                 <p className="text-xs text-gray-400">
// // //                    ID: {issue.id} | Date: {new Date(issue.createdAt).toLocaleDateString()}
// // //                 </p>
// // //               </div>
// // //               <span className={`px-3 py-1 text-xs font-bold rounded-full ${
// // //                 issue.status === "OPEN" ? "bg-red-100 text-red-600" : 
// // //                 issue.status === "COMPLETED" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
// // //               }`}>
// // //                 {issue.status}
// // //               </span>
// // //             </div>
// // //           ))}
// // //           {!loading && issues.length === 0 && <p className="text-gray-400">No issues found.</p>}
// // //         </div>
// // //       </div>

// // //       {/* REPORT ISSUE MODAL */}
// // //       {isModalOpen && (
// // //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
// // //           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
// // //             <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
// // //               <h3 className="text-lg font-bold">Report New Issue</h3>
// // //               <button onClick={() => setIsModalOpen(false)}><X /></button>
// // //             </div>
            
// // //             <form onSubmit={handleSubmit} className="p-6 space-y-4">
// // //               <input 
// // //                 required
// // //                 value={title}
// // //                 onChange={(e) => setTitle(e.target.value)}
// // //                 placeholder="Issue Title" 
// // //                 className="w-full border p-2 rounded-lg outline-none focus:ring-1 focus:ring-blue-500" 
// // //               />
// // //               <textarea 
// // //                 required
// // //                 value={description}
// // //                 onChange={(e) => setDescription(e.target.value)}
// // //                 placeholder="Describe the issue..." 
// // //                 className="w-full border p-2 rounded-lg outline-none focus:ring-1 focus:ring-blue-500 h-32"
// // //               ></textarea>
// // //               <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700">
// // //                 Submit to Database
// // //               </button>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }


// // "use client";
// // import { useState, useEffect } from "react";
// // import { Plus, Search, UserCircle, X, Loader2 } from "lucide-react";

// // export default function UserDashboard() {
// //   // --- States ---
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [issues, setIssues] = useState([]); // Database issues store karne ke liye
// //   const [loading, setLoading] = useState(true);
// //   const [searchQuery, setSearchQuery] = useState("");
  
// //   // --- Form States ---
// //   const [title, setTitle] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [submitting, setSubmitting] = useState(false);

// //   // --- 1. Database se Issues Fetch karna ---
// //   const fetchIssues = async () => {
// //     try {
// //       const res = await fetch("/api/issues");
// //       const data = await res.json();
// //       if (Array.isArray(data)) {
// //         setIssues(data);
// //       }
// //     } catch (error) {
// //       console.error("Fetch error:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchIssues();
// //   }, []);

// //   // --- 2. Naya Issue Submit karna ---
// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setSubmitting(true);

// //     try {
// //       const res = await fetch("/api/issues", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ title, description }),
// //       });

// //       if (res.ok) {
// //         setIsModalOpen(false);
// //         setTitle("");
// //         setDescription("");
// //         fetchIssues(); // List refresh karein taake naya data database se aa jaye
// //       } else {
// //         alert("Failed to save issue in database.");
// //       }
// //     } catch (error) {
// //       alert("Network error!");
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   // --- 3. Counters Calculation (Dynamic) ---
// //   const filteredIssues = issues.filter((issue: any) => 
// //     issue.title.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   const stats = [
// //     { title: "Total Issues", value: issues.length, color: "border-blue-600" },
// //     { title: "In Progress", value: issues.filter((i: any) => i.status === "IN_PROGRESS").length, color: "border-yellow-500" },
// //     { title: "Completed", value: issues.filter((i: any) => i.status === "COMPLETED").length, color: "border-green-500" }
// //   ];
  

// //   return (
    
// //     <div className="p-6 bg-gray-50 min-h-screen relative font-sans">
// //       {/* Header Section */}
// //       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
// //         <div>
// //           <h1 className="text-3xl font-bold text-gray-800">User Dashboard</h1>
// //           <p className="text-gray-500 text-sm">Welcome back! Manage your reported issues here.</p>
// //         </div>

// //         <div className="flex items-center gap-4 w-full md:w-auto">
// //           {/* Search */}
// //           <div className="relative flex-1 md:w-64">
// //             <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
// //             <input 
// //               type="text" 
// //               placeholder="Search issues..." 
// //               className="pl-10 pr-4 py-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none transition-all"
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //             />
// //           </div>
          
// //           <button 
// //             onClick={() => setIsModalOpen(true)}
// //             className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition shadow-md whitespace-nowrap"
// //           >
// //             <Plus className="w-5 h-5" /> <span>Create Issue</span>
// //           </button>

// //           <UserCircle className="w-10 h-10 text-gray-400 hover:text-blue-600 cursor-pointer transition" />
// //         </div>
// //       </div>

// //       {/* Stats Cards */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// //         {stats.map((stat, i) => (
// //           <div key={i} className={`bg-white p-6 rounded-xl shadow-sm border-l-4 ${stat.color}`}>
// //             <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{stat.title}</p>
// //             <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Issues Table/List Section */}
// //       <div className="bg-white rounded-xl shadow-sm border p-6">
// //         <h2 className="text-xl font-semibold mb-6">Recent Reported Issues</h2>
        
// //         {loading ? (
// //           <div className="flex justify-center py-10"><Loader2 className="animate-spin text-blue-600" /></div>
// //         ) : (
// //           <div className="space-y-4">
// //             {filteredIssues.length > 0 ? filteredIssues.map((issue: any) => (
// //               <div key={issue.id} className="p-4 rounded-lg border hover:border-blue-300 transition-colors flex justify-between items-center group">
// //                 <div>
// //                   <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{issue.title}</p>
// //                   <p className="text-xs text-gray-400 mt-1">
// //                     Date: {new Date(issue.createdAt).toLocaleDateString()} | ID: {issue.id.slice(-6)}
// //                   </p>
// //                 </div>
// //                 <div className="flex items-center gap-3">
// //                   <span className={`px-3 py-1 text-xs font-bold rounded-full ${
// //                     issue.status === "OPEN" ? "bg-red-100 text-red-600" : 
// //                     issue.status === "COMPLETED" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-700"
// //                   }`}>
// //                     {issue.status}
// //                   </span>
// //                 </div>
// //               </div>
// //             )) : (
// //               <p className="text-center text-gray-500 py-10">No issues found in database.</p>
// //             )}
// //           </div>
// //         )}
// //       </div>

// //       {/* --- REPORT ISSUE MODAL --- */}
// //       {isModalOpen && (
// //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
// //           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
// //             <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
// //               <h3 className="text-lg font-bold">Report New Issue</h3>
// //               <button onClick={() => setIsModalOpen(false)}><X className="w-6 h-6" /></button>
// //             </div>
            
// //             <form onSubmit={handleSubmit} className="p-6 space-y-4">
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Issue Title</label>
// //                 <input 
// //                   required
// //                   value={title}
// //                   onChange={(e) => setTitle(e.target.value)}
// //                   type="text" 
// //                   placeholder="e.g. Login page error" 
// //                   className="w-full border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
// //                 />
// //               </div>
              
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Issue Details</label>
// //                 <textarea 
// //                   required
// //                   value={description}
// //                   onChange={(e) => setDescription(e.target.value)}
// //                   rows={4} 
// //                   placeholder="Describe the issue in detail..." 
// //                   className="w-full border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
// //                 ></textarea>
// //               </div>

// //               <div className="flex gap-3 mt-6">
// //                 <button 
// //                   type="button" 
// //                   onClick={() => setIsModalOpen(false)}
// //                   className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50 transition font-medium text-gray-600"
// //                 >
// //                   Cancel
// //                 </button>
// //                 <button 
// //                   disabled={submitting}
// //                   type="submit" 
// //                   className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex justify-center items-center gap-2 shadow-lg active:scale-95"
// //                 >
// //                   {submitting ? <Loader2 className="animate-spin w-4 h-4" /> : "Submit Issue"}
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// "use client";
// import { useState, useEffect } from "react";
// import { Plus, Search, UserCircle, X, Loader2, AlertCircle } from "lucide-react";

// export default function UserDashboard() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [issues, setIssues] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
  
//   // Form States
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // 1. Fetch Issues from DB
//   const fetchIssues = async () => {
//     try {
//       const res = await fetch("/api/issues");
//       const data = await res.json();
//       if (Array.isArray(data)) setIssues(data);
//     } catch (err) {
//       console.error("Fetch error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { fetchIssues(); }, []);

//   // 2. Submit Issue to DB
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const res = await fetch("/api/issues", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title, description }),
//       });

//       if (res.ok) {
//         alert("Issue Stored in Database!"); 
//         setIsModalOpen(false);
//         setTitle("");
//         setDescription("");
//         fetchIssues(); // Refresh list
//       } 
//       else {
//         alert("Failed to store data in DB");
//       }
//     } catch (err) {
//       alert("Network Error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // 3. Dynamic Stats
//   const stats = [
//     { title: "Total Issues", value: issues.length, color: "border-blue-600" },
//     { title: "In Progress", value: issues.filter((i: any) => i.status === "IN_PROGRESS").length, color: "border-yellow-500" },
//     { title: "Completed", value: issues.filter((i: any) => i.status === "COMPLETED").length, color: "border-green-500" }
//   ];

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">User Dashboard</h1>
//         <div className="flex items-center gap-4">
//           <button 
//             onClick={() => setIsModalOpen(true)}
//             className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             <Plus className="w-5 h-5" /> Create Issue
//           </button>
//           <UserCircle className="w-10 h-10 text-gray-400" />
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         {stats.map((stat, i) => (
//           <div key={i} className={`bg-white p-6 rounded-xl shadow-sm border-l-4 ${stat.color}`}>
//             <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
//             <p className="text-3xl font-bold">{stat.value}</p>
//           </div>
//         ))}
//       </div>

//       {/* Issues List */}
//       <div className="bg-white rounded-xl shadow-sm border p-6">
//         <h2 className="text-xl font-semibold mb-4">Recent Issues</h2>
//         {loading ? <Loader2 className="animate-spin mx-auto" /> : (
//           <div className="space-y-3">
//             {issues.length > 0 ? issues.map((issue: any) => (
//               <div key={issue.id} className="p-4 border rounded-lg flex justify-between items-center">
//                 <div>
//                   <p className="font-bold text-gray-800">{issue.title}</p>
//                   <p className="text-xs text-gray-400">{new Date(issue.createdAt).toLocaleString()}</p>
//                 </div>
//                 <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-bold">
//                   {issue.status}
//                 </span>
//               </div>
//             )) : <p className="text-gray-400 text-center">No issues found in database.</p>}
//           </div>
//         )}
//       </div>

//       {/* --- MODAL --- */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
//             <div className="bg-blue-600 p-4 text-white flex justify-between rounded-t-xl">
//               <h2 className="font-bold">Report Issue</h2>
//               <X className="cursor-pointer" onClick={() => setIsModalOpen(false)} />
//             </div>
//             <form onSubmit={handleSubmit} className="p-6 space-y-4">
//               <input 
//                 required 
//                 placeholder="Issue Title" 
//                 className="w-full border p-2 rounded text-black" 
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//               <textarea 
//                 required 
//                 placeholder="Details..." 
//                 className="w-full border p-2 rounded h-32 text-black" 
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//               <button 
//                 disabled={isSubmitting}
//                 type="submit" 
//                 className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 flex justify-center"
//               >
//                 {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit to DB"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";
// import { Plus, Search, UserCircle, X, Loader2 } from "lucide-react";
// import { useSession } from "next-auth/react";

// export default function UserDashboard() {
//   const { data: session } = useSession(); // Login user ki details lene ke liye
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [issues, setIssues] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Form States
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // 1. Fetch Issues from Database
//   const fetchIssues = async () => {
//     try {
//       const res = await fetch("/api/issues");
//       const data = await res.json();
//       if (Array.isArray(data)) {
//         setIssues(data);
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchIssues();
//   }, []);

//   // 2. Submit Issue to Neon DB
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const res = await fetch("/api/issues", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//           title, 
//           description 
//           // userId backend session se khud utha lega
//         }),
//       });

//       if (res.ok) {
//         alert("Success! Issue saved in Neon Database.");
//         setIsModalOpen(false);
//         setTitle("");
//         setDescription("");
//         fetchIssues(); // List ko foran refresh karein
//       } else {
//         const errorData = await res.json();
//         alert("Error: " + errorData.error);
//       }
//     } catch (err) {
//       alert("Network Error! Check your connection.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // 3. Dynamic Stats Calculation
//   const stats = [
//     { title: "Total Issues", value: issues.length, color: "border-blue-600" },
//     { title: "In Progress", value: issues.filter((i: any) => i.status === "IN_PROGRESS").length, color: "border-yellow-500" },
//     { title: "Completed", value: issues.filter((i: any) => i.status === "COMPLETED").length, color: "border-green-500" }
//   ];

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen font-sans">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-800">User Dashboard</h1>
//           <p className="text-sm text-gray-500">Track and manage your reported issues.</p>
//         </div>
//         <div className="flex items-center gap-4">
//           <button 
//             onClick={() => setIsModalOpen(true)}
//             className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-lg active:scale-95"
//           >
//             <Plus className="w-5 h-5" /> Create Issue
//           </button>
//           <div className="flex items-center gap-2 border-l pl-4">
//             <span className="text-sm font-medium text-gray-700 hidden md:block">
//               {session?.user?.name || "User"}
//             </span>
//             <UserCircle className="w-10 h-10 text-gray-400 hover:text-blue-600 cursor-pointer transition" />
//           </div>
//         </div>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         {stats.map((stat, i) => (
//           <div key={i} className={`bg-white p-6 rounded-2xl shadow-sm border-l-8 ${stat.color} transition-transform hover:scale-[1.02]`}>
//             <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">{stat.title}</p>
//             <p className="text-4xl font-black text-gray-800 mt-1">{stat.value}</p>
//           </div>
//         ))}
//       </div>

//       {/* Issues List Table */}
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//         <div className="p-6 border-b border-gray-50 flex justify-between items-center">
//           <h2 className="text-xl font-bold text-gray-800">Recent Reported Issues</h2>
//           <button onClick={fetchIssues} className="text-blue-600 text-sm font-semibold hover:underline">Refresh</button>
//         </div>
        
//         <div className="p-6">
//           {loading ? (
//             <div className="flex justify-center py-10"><Loader2 className="animate-spin text-blue-600 w-10 h-10" /></div>
//           ) : (
//             <div className="space-y-4">
//               {issues.length > 0 ? issues.map((issue: any) => (
//                 <div key={issue.id} className="p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all flex justify-between items-center group">
//                   <div className="flex flex-col">
//                     <span className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors">{issue.title}</span>
//                     <span className="text-xs text-gray-400 mt-1">
//                       ID: {issue.id.slice(-6).toUpperCase()} • {new Date(issue.createdAt).toLocaleDateString()}
//                     </span>
//                   </div>
//                   <span className={`px-4 py-1.5 text-xs font-black rounded-full shadow-sm ${
//                     issue.status === "OPEN" ? "bg-red-100 text-red-600" : 
//                     issue.status === "COMPLETED" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-700"
//                   }`}>
//                     {issue.status}
//                   </span>
//                 </div>
//               )) : (
//                 <div className="text-center py-16">
//                   <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <Search className="text-gray-400" />
//                   </div>
//                   <p className="text-gray-500 font-medium">No issues found in Neon Database.</p>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Report Issue Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
//           <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100">
//             <div className="bg-blue-600 p-6 flex justify-between items-center text-white">
//               <div>
//                 <h3 className="text-xl font-bold">Report New Issue</h3>
//                 <p className="text-blue-100 text-xs">Tell us what's wrong</p>
//               </div>
//               <button 
//                 onClick={() => setIsModalOpen(false)}
//                 className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>
            
//             <form onSubmit={handleSubmit} className="p-8 space-y-5">
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Issue Title</label>
//                 <input 
//                   required
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   type="text" 
//                   placeholder="e.g., Login button not working" 
//                   className="w-full border-2 border-gray-100 p-3 rounded-xl outline-none focus:border-blue-500 transition-all text-black" 
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Details</label>
//                 <textarea 
//                   required
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   rows={4} 
//                   placeholder="Explain the problem in detail..." 
//                   className="w-full border-2 border-gray-100 p-3 rounded-xl outline-none focus:border-blue-500 transition-all resize-none text-black"
//                 ></textarea>
//               </div>

//               <div className="flex gap-4 pt-4">
//                 <button 
//                   type="button" 
//                   onClick={() => setIsModalOpen(false)}
//                   className="flex-1 px-4 py-3 border-2 border-gray-100 rounded-xl hover:bg-gray-50 transition font-bold text-gray-600"
//                 >
//                   Cancel
//                 </button>
//                 <button 
//                   disabled={isSubmitting}
//                   type="submit" 
//                   className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-bold flex justify-center items-center gap-2 shadow-lg shadow-blue-200 disabled:opacity-50"
//                 >
//                   {isSubmitting ? <Loader2 className="animate-spin w-5 h-5" /> : "Submit to DB"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { Plus, Search, UserCircle, X, Loader2, ExternalLink } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
export default function UserDashboard() {
  const { data: session } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Form States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Fetch Issues: Database se data mangwane ka function
  
  const fetchIssues = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/issues");
      const data = await res.json();
      if (Array.isArray(data)) {
        setIssues(data); // Database se aye hue array ko state mein save karna
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  // 2. Submit Issue: Form ka data Neon DB mein save karne ka function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/issues", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        alert("Success! Issue saved in Neon Database.");
        setIsModalOpen(false);
        setTitle("");
        setDescription("");
        // Sabse important: Naya data save hone ke baad list ko dobara fetch karna
        fetchIssues(); 
      } else {
        const errorData = await res.json();
        alert("Error: " + errorData.error);
      }
    } catch (err) {
      alert("Network Error!");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 3. Live Stats Calculation: Ye database se aye hue 'issues' ki base par numbers update karega
  const stats = [
    { title: "Total Issues", value: issues.length, color: "border-blue-600" },
    { title: "In Progress", value: issues.filter((i: any) => i.status === "IN_PROGRESS").length, color: "border-yellow-500" },
    { title: "Completed", value: issues.filter((i: any) => i.status === "COMPLETED").length, color: "border-green-500" }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans text-black">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">User Dashboard</h1>
          <p className="text-sm text-gray-500">Track and manage your reported issues.</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg active:scale-95 transition-all"
          >
            <Plus className="w-5 h-5" /> Create Issue
          </button>
          <div className="flex items-center gap-2 border-l pl-4">
            <span className="text-sm font-medium text-gray-700 hidden md:block">
              {session?.user?.name || "User"}
            </span>
            {/* <UserCircle className="w-10 h-10 text-gray-400" /> */}
            <Link href="/dashboard/profile">
  <UserCircle className="w-10 h-10 text-gray-400 cursor-pointer" />
</Link>
          </div>
        </div>
      </div>

      {/* Stats Cards: Ye cards ab live update honge */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className={`bg-white p-6 rounded-2xl shadow-sm border-l-8 ${stat.color} hover:scale-[1.02] transition-transform`}>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">{stat.title}</p>
            <p className="text-4xl font-black text-gray-800 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Issues List Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Recent Reported Issues</h2>
          <button onClick={fetchIssues} className="text-blue-600 text-sm font-semibold hover:underline">Refresh List</button>
        </div>
        
        <div className="p-6">
          {loading ? (
            <div className="flex justify-center py-10"><Loader2 className="animate-spin text-blue-600 w-10 h-10" /></div>
          ) : (
            <div className="space-y-4">
              {issues.length > 0 ? issues.map((issue: any) => (
                <div key={issue.id} className="p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all flex justify-between items-center group">
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors">{issue.title}</span>
                    <span className="text-xs text-gray-400 mt-1">
                      ID: {issue.id.slice(-6).toUpperCase()} • {new Date(issue.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {/* Status Badge */}
                    <span className={`px-4 py-1.5 text-[10px] font-black rounded-full shadow-sm ${
                      issue.status === "OPEN" ? "bg-red-100 text-red-600" : 
                      issue.status === "COMPLETED" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {issue.status}
                    </span>
                    
                    {/* View Detail Button: Redirect ya Modal ke liye */}
                    {/* <button className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded-lg transition">
                      Details <ExternalLink className="w-4 h-4" />
                    </button> */}
                    <Link href={`/admin/issues/manageIssue/${issue.id}`}>
  <button className="flex items-center gap-1 text-blue-600 font-semibold hover:underline">
     DETAIL <ExternalLink size={14}/>
  </button>
</Link>
                  </div>
                </div>
              )) : (
                <div className="text-center py-16">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="text-gray-400" />
                  </div>
                  <p className="text-gray-500 font-medium">No issues found in Neon Database.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal remains same as your original code for Create Issue */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="bg-blue-600 p-6 flex justify-between items-center text-white">
              <h3 className="text-xl font-bold">Report New Issue</h3>
              <button onClick={() => setIsModalOpen(false)}><X /></button>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <input 
                required 
                value={title} 
                onChange={(e)=>setTitle(e.target.value)} 
                placeholder="Issue Title" 
                className="w-full border-2 p-3 rounded-xl outline-none focus:border-blue-500 text-black" 
              />
              <textarea 
                required 
                value={description} 
                onChange={(e)=>setDescription(e.target.value)} 
                placeholder="Details..." 
                className="w-full border-2 p-3 rounded-xl outline-none focus:border-blue-500 text-black"
              />
              <div className="flex gap-4">
                <button type="button" onClick={()=>setIsModalOpen(false)} className="flex-1 p-3 border-2 rounded-xl font-bold">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="flex-1 p-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg">
                  {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit to DB"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}