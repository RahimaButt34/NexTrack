"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Save, Trash2, Loader2, Edit2 } from "lucide-react";
import Link from "next/link";

export default function IssueDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [issue, setIssue] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`/api/admin/issueDetail/${id}`); // Naya backend path
        const data = await res.json();
        setIssue(data);
        setTitle(data.title);
        setDescription(data.description);
      } catch (err) { console.error(err); }
      finally { setLoading(false); }
    };
    fetchDetail();
  }, [id]);

  const handleUpdate = async () => {
    const res = await fetch(`/api/admin/issueDetail/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });
    if (res.ok) {
      setIsEditing(false);
      router.refresh();
      alert("Changes saved!");
    }
  };

  const handleDelete = async () => {
    if (!confirm("Delete this issue permanently?")) return;
    const res = await fetch(`/api/admin/issueDetail/${id}`, { method: "DELETE" });
    if (res.ok) router.push("/admin/issues");
  };

  if (loading) return <div className="min-h-screen bg-slate-900 flex items-center justify-center"><Loader2 className="animate-spin text-purple-500" /></div>;

  return (
    <div className="p-6 md:p-10 bg-slate-900 min-h-screen text-white">
      <Link href="/admin/issues" className="flex items-center gap-2 text-slate-400 mb-6 hover:text-white">
        <ArrowLeft size={20} /> Back to Management
      </Link>

      <div className="max-w-3xl mx-auto bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
        <div className="flex justify-between items-center mb-8">
          <div className="w-full">
            {isEditing ? (
              <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-slate-900 border border-purple-500 p-3 rounded-lg text-xl font-bold" />
            ) : (
              <h1 className="text-3xl font-bold text-purple-400">{issue?.title}</h1>
            )}
          </div>
          <div className="flex gap-3 ml-4">
            <button onClick={() => setIsEditing(!isEditing)} className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600">
              <Edit2 size={20} />
            </button>
            <button onClick={handleDelete} className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition">
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="text-xs text-slate-500 uppercase font-bold mb-2 block">Issue Description</label>
          {isEditing ? (
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full bg-slate-900 border border-purple-500 p-4 rounded-lg h-48" />
          ) : (
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50 min-h-[150px]">
              <p className="text-slate-300 leading-relaxed">{issue?.description}</p>
            </div>
          )}
        </div>

        {isEditing && (
          <button onClick={handleUpdate} className="w-full bg-purple-600 py-3 rounded-xl font-bold hover:bg-purple-700 flex justify-center items-center gap-2">
            <Save size={20} /> SAVE UPDATED INFORMATION
          </button>
        )}
      </div>
    </div>
  );
}