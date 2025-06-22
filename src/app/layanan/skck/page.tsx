"use client";
import { useState } from "react";



export default function SkckForm() {
  const [formData, setFormData] = useState({
    ktp: "",
    aktaLahir: "",
    kk: "",
    sidikJari: "",
    identitasLain: "",
    pasFoto: null,
  });
  
  const [__fileName, setFileName] = useState<string>("");

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === "pasFoto") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // handle form submission here (e.g., send to API)
    console.log(formData);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-6">Formulir Pengajuan SKCK Online - WNI</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* KTP */}
        <div>
          <label className="block font-medium">Fotokopi KTP (upload file atau link)</label>
          <input
            type="text"
            name="ktp"
            onChange={handleChange}
            className="w-full mt-1 border p-2 rounded"
            placeholder="Link dokumen KTP"
          />
        </div>

        {/* Akta Lahir / Surat Kenal Lahir / Ijazah / Surat Nikah */}
        <div>
          <label className="block font-medium">Fotokopi Akta Lahir / Ijazah / Surat Nikah</label>
          <input
            type="text"
            name="aktaLahir"
            onChange={handleChange}
            className="w-full mt-1 border p-2 rounded"
            placeholder="Link dokumen"
          />
        </div>

        {/* Kartu Keluarga */}
        <div>
          <label className="block font-medium">Fotokopi Kartu Keluarga (KK)</label>
          <input
            type="text"
            name="kk"
            onChange={handleChange}
            className="w-full mt-1 border p-2 rounded"
            placeholder="Link dokumen KK"
          />
        </div>

        {/* Sidik Jari */}
        <div>
          <label className="block font-medium">Dokumen Sidik Jari</label>
          <input
            type="text"
            name="sidikJari"
            onChange={handleChange}
            className="w-full mt-1 border p-2 rounded"
            placeholder="Link dokumen sidik jari"
          />
        </div>

        {/* Identitas lain */}
        <div>
          <label className="block font-medium">Identitas Lain (jika belum memiliki KTP)</label>
          <input
            type="text"
            name="identitasLain"
            onChange={handleChange}
            className="w-full mt-1 border p-2 rounded"
            placeholder="Link identitas lain (opsional)"
          />
        </div>
     {/* Pas Foto */}
<div className="mb-4">
  <label className="block font-medium mb-1">
    Pas Foto 4x6 (6 lembar, latar belakang merah)
  </label>

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

    <span className="text-sm text-gray-700">
      {__fileName || "No file chosen"}
    </span>
  </div>

  <p className="text-sm text-gray-600 mt-1">
    Foto harus berpakaian sopan, tidak menggunakan aksesoris wajah, dan tampak muka utuh.
  </p>
</div>

        <button
          type="submit"
          className="bg-[#996515] text-white px-6 py-2 rounded hover:bg-yellow-700"
        >
          Kirim Permohonan
        </button>
      </form>
    </div>
  );
}
