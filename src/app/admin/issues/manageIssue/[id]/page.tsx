
"use client";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Trash2, Edit3, Loader2 } from "lucide-react";
import Link from "next/link";

export default function ManageIssuePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`/api/admin/manageIssue/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title);
        setDescription(data.description);
        setLoading(false);
      });
  }, [id]);

  const handleUpdate = async () => {
    setLoading(true);
    const res = await fetch(`/api/admin/manageIssue/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description })
    });
    if (res.ok) {
      setIsEditing(false);
      alert("Successfully Updated!");
      router.refresh();
    }
    setLoading(false);
  };

  const handleDelete = async () => {
    if (!confirm("Do u want to Delete Issue?")) return;
    setLoading(true);
    const res = await fetch(`/api/admin/manageIssue/${id}`, { method: "DELETE" });
    if (res.ok) {
      alert("Issue Deleted!");
      router.push("/admin/issues"); 
    }
    setLoading(false);
  };

  if (loading && !title) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin text-blue-600" /></div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-black">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border">
        <Link href="/dashboard" className="flex items-center gap-2 text-gray-400 mb-6 hover:text-blue-600">
          <ArrowLeft size={20}/> Back to Dashboard
        </Link>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Edit Issue</h1>
          <div className="flex gap-2">
            <button onClick={() => setIsEditing(!isEditing)} className="p-2 border rounded-lg hover:bg-gray-100"><Edit3 size={18}/></button>
            <button onClick={handleDelete} className="p-2 border border-red-100 text-red-600 rounded-lg hover:bg-red-50"><Trash2 size={18}/></button>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase block mb-1">Issue Title</label>
            {isEditing ? (
              <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 border rounded-xl outline-none focus:border-blue-500 bg-blue-50/20" />
            ) : (
              <p className="text-xl font-semibold text-gray-900">{title}</p>
            )}
          </div>

          <div>
            <label className="text-xs font-bold text-gray-400 uppercase block mb-1">Description</label>
            {isEditing ? (
              <textarea rows={6} value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-3 border rounded-xl outline-none focus:border-blue-500 bg-blue-50/20" />
            ) : (
              <div className="bg-gray-50 p-4 rounded-xl text-gray-600 min-h-[150px] whitespace-pre-wrap">{description}</div>
            )}
          </div>

          {isEditing && (
            <button onClick={handleUpdate} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">
              SAVE CHANGES
            </button>
          )}
        </div>
      </div>
    </div>
  );
}