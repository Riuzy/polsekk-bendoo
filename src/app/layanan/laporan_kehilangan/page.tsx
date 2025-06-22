export default function LaporanKehilanganForm() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Form Laporan Kehilangan</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Deskripsi laporan kehilangan"
          className="w-full px-4 py-2 border rounded text-sm"
        />
        <button
          type="submit"
          className="bg-[#996515] hover:bg-yellow-700 text-white px-6 py-2 rounded"
        >
          Kirim Laporan
        </button>
      </form>
    </div>
  );
}
