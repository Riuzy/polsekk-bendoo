"use client";
import { useState } from "react";

export default function IzinKeramaianForm() {
  const [__fileName, setFileName] = useState("");

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Form Izin Keramaian</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Nama acara atau kegiatan"
          className="w-full px-4 py-2 border rounded text-sm"
        />

        <div>
          <label className="block text-sm font-medium text-black-700 mb-1">Dokumen Pendukung</label>
          <div className="flex items-center space-x-3">
            <label className="inline-block px-4 py-2 text-sm font-medium text-black bg-gray-200 border border-gray-400 rounded cursor-pointer hover:bg-gray-300">
              Choose File
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  const name = e.target.files?.[0]?.name || "";
                  setFileName(name);
                }}
              />
            </label>
            <span className="text-sm text-gray-700">{__fileName || "No file chosen"}</span>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#996515] hover:bg-yellow-700 text-white px-6 py-2 rounded"
        >
          Kirim Permohonan
        </button>
      </form>
    </div>
  );
}
