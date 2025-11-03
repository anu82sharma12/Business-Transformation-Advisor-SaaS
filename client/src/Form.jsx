import { useState } from "react";
import BriefPDF from "./BriefPDF";

export default function Form() {
  const [data, setData] = useState({});
  const [brief, setBrief] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/brief", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    setBrief(json.brief);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Transformation Advisor</h1>
      <form onSubmit={submit} className="space-y-6">
        <input placeholder="Company name" onChange={e=>setData({...data,name:e.target.value})} required />
        <input placeholder="Industry" onChange={e=>setData({...data,industry:e.target.value})} />
        <input placeholder="Revenue (M)" type="number" onChange={e=>setData({...data,revenue:e.target.value})} />
        <textarea placeholder="Biggest challenge" rows={4} onChange={e=>setData({...data,challenge:e.target.value})} />
        <button type="submit" className="bg-green-600 text-white px-8 py-3 rounded-lg">
          Generate 12-Page Brief (47 sec)
        </button>
      </form>
      {brief && <BriefPDF brief={brief} />}
    </div>
  );
}
