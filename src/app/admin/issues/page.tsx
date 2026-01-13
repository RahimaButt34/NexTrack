
"use client";
import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink, RefreshCw, Loader2 } from "lucide-react";
import Link from "next/link";

interface Issue {
  id: string;
  title: string;
  status: string;
  createdAt: string;
  userId: string;
  user: {
    name: string;
    email: string;
  };
}

export default function AdminIssuesList() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  // 1. Fetch all issues for Admin
  const fetchIssues = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/issues"); // Ensure this API exists
      const data = await res.json();
      setIssues(data);
    } catch (error) {
      console.error("Error fetching issues:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  // 2. Status Change Function
  const updateStatus = async (issueId: string, newStatus: string) => {
    setUpdatingId(issueId);
    try {
      const res = await fetch(`/api/admin/issues/${issueId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        // Local state update karein taake refresh na karna pare
        setIssues((prev) =>
          prev.map((iss) => (iss.id === issueId ? { ...iss, status: newStatus } : iss))
        );
      }
    } catch (error) {
      alert("Failed to update status");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="p-6 md:p-10 bg-slate-900 min-h-screen text-white">
      {/* Top Navigation */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/adminpanel" className="p-2 hover:bg-slate-800 rounded-full transition text-slate-400 hover:text-white">
          <ArrowLeft size={24} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-purple-400">Issue Management</h1>
          <p className="text-slate-400 text-sm">Monitor and resolve user reported problems</p>
        </div>
      </div>

      {/* Issues Table */}
      <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
        {loading ? (
          <div className="flex flex-col items-center py-20">
            <Loader2 className="animate-spin text-purple-500 mb-4" size={40} />
            <p className="text-slate-400">Loading issues database...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-700/50 text-slate-300 text-xs uppercase tracking-widest font-bold">
                  <th className="py-4 px-6">Issue Details</th>
                  <th className="py-4 px-6">Reported By</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {issues.map((issue) => (
                  <tr key={issue.id} className="hover:bg-slate-700/30 transition">
                    <td className="py-5 px-6">
                      <p className="font-semibold text-slate-100">{issue.title}</p>
                      <p className="text-[10px] text-slate-500 mt-1 uppercase font-mono tracking-tighter">
                        ID: {issue.id}
                      </p>
                    </td>
                    <td className="py-5 px-6">
                      <p className="text-sm font-medium text-blue-400">{issue.user?.name || "Unknown"}</p>
                      <p className="text-xs text-slate-500">{issue.user?.email}</p>
                    </td>
                    <td className="py-5 px-6">
                      <select
                        disabled={updatingId === issue.id}
                        value={issue.status}
                        onChange={(e) => updateStatus(issue.id, e.target.value)}
                        className={`text-xs font-bold py-1 px-3 rounded-full border-0 outline-none cursor-pointer ${
                          issue.status === "OPEN" ? "bg-red-500/10 text-red-500" :
                          issue.status === "IN_PROGRESS" ? "bg-yellow-500/10 text-yellow-500" :
                          "bg-green-500/10 text-green-500"
                        }`}
                      >
                        <option value="OPEN" className="bg-slate-800 text-white">OPEN</option>
                        <option value="IN_PROGRESS" className="bg-slate-800 text-white">IN PROGRESS</option>
                        <option value="COMPLETED" className="bg-slate-800 text-white">COMPLETED</option>
                      </select>
                    </td>
                    <td className="py-5 px-6">
                      <Link 
                        // href={`/admin/issues/${issue.id}`}
                        href={`/admin/issues/issueDetail/${issue.id}`}
                        className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-purple-400 transition"
                      >
                        VIEW DETAIL <ExternalLink size={14} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {issues.length === 0 && (
              <p className="text-center py-10 text-slate-500">No issues found in the database.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}