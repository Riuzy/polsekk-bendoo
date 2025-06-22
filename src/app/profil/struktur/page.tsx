export default function StrukturPolsek() {
  return (
    <div className="bg-gray-100 min-h-screen pt-24">
      <div className="max-w-screen-xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Struktur Organisasi Tingkat Polsek
        </h1>

        {/* Struktur Polsek */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="overflow-x-auto">
            <img
              src="/images/polsek.png"
              alt="Struktur Organisasi Polsek"
              className="mx-auto max-w-full h-auto"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
