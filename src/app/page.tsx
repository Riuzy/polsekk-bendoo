"use client";
import { useEffect, useState } from "react";
import "flowbite";
import "daisyui";
import WhatsAppPopup from "./components/popup";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    import("flowbite").then(({ initDropdowns }) => {
      initDropdowns();
    });
  }, []);

  return (
    <>
    {/* navbar */}
     <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg border-b border-[#996515] text-black">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    {/* Logo */}
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src="/images/Lambang_Polda_Jatim.png"
        className="h-8"
        alt="Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
        POLSEK BENDO
      </span>
    </a>

    {/* Navbar Links */}
    <div className="hidden w-full md:flex md:w-auto items-center gap-4" id="navbar-dropdown">
      <ul className="flex flex-col md:flex-row items-center md:space-x-8 mt-4 md:mt-0 font-medium">
        <li>
          <a href="#" className="block py-2 px-3 text-black hover:text-[#996515] md:p-0">
            Home
          </a>
        </li>
        <li className="relative">
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex items-center justify-between w-full py-2 px-3 text-black hover:text-[#996515] md:p-0"
          >
            Profil
            <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-200 rounded-lg shadow w-44">
            <ul className="py-2 text-sm text-black">
              <li>
                <a href="./profil/struktur" className="block px-4 py-2 hover:bg-[#996515] hover:text-white">
                  Struktur
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-[#996515] hover:text-white">
                  Forkopimca
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="relative">
          <button
            id="dropdownLayananPublikLink"
            data-dropdown-toggle="dropdownLayananPublik"
            className="flex items-center justify-between w-full py-2 px-3 text-black hover:text-[#996515] md:p-0"
          >
            Layanan
            <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div
            id="dropdownLayananPublik"
            className="z-10 hidden font-normal bg-white divide-y divide-gray-200 rounded-lg shadow w-44"
          >
            <ul className="py-2 text-sm text-black">
              <li>
                <a href="./layanan/skck" className="block px-4 py-2 hover:bg-[#996515] hover:text-white">
                  SKCK Online
                </a>
              </li>
              <li>
                <a href="./layanan/laporan_kehilangan" className="block px-4 py-2 hover:bg-[#996515] hover:text-white">
                  Laporan Kehilangan
                </a>
              </li>
              <li>
                <a href="./layanan/pengaduan" className="block px-4 py-2 hover:bg-[#996515] hover:text-white">
                  Pengaduan
                </a>
              </li>
              <li>
                <a href="./layanan/izin_keramaian" className="block px-4 py-2 hover:bg-[#996515] hover:text-white">
                  Surat Izin Keramaian
                </a>
              </li>
              <li>
                <a href="./layanan/rencana" className="block px-4 py-2 hover:bg-[#996515] hover:text-white">
                  Rencana Acara
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      {/* Search */}
      <div className="flex items-center gap-4 ms-4">
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-[#996515]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-48 p-2 ps-10 text-sm text-black border border-[#996515] rounded-lg bg-white placeholder-gray-500 focus:ring-[#996515] focus:border-[#996515]"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  </div>
</nav>

<div className="pt-24">

      {/* Carousel */}
       <div className="flex flex-col space-y-12 px-4 py-8 max-w-screen-xl mx-auto">
          <div className="carousel w-full rounded-lg">
            <div id="item1" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                className="w-full object-cover"
                alt="slide1"
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                className="w-full object-cover"
                alt="slide2"
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                className="w-full object-cover"
                alt="slide3"
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                className="w-full object-cover"
                alt="slide4"
              />
            </div>
          </div>
        

      {/* Tentang Kami & Info Kegiatan */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Tentang Kami</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis aliquet ligula sed congue. Nam sodales feugiat felis eget facilisis...
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Info</h2>
          <div className="overflow-x-auto">
            
          </div>
        </div>
      </section>

    <section className="py-10 bg-white">
  <h2 className="text-2xl font-bold mb-10 text-center text-gray-800">Layanan Kami</h2>
  <div className="flex flex-wrap justify-center gap-16">
    
    {/* Item 1 */}
    <a href="./layanan/skck" className="flex items-center gap-3 hover:text-yellow-700 transition-colors">
      <div className="w-12 h-12 flex items-center justify-center border border-gray-400 rounded-sm">
        <img src="/icons/icon-skck.svg" alt="SKCK" className="w-6 h-6" />
      </div>
      <span className="text-base font-semibold text-gray-700">SKCK ONLINE</span>
    </a>

    {/* Item 2 */}
    <a href="./layanan/laporan_kehilangan" className="flex items-center gap-3 hover:text-yellow-700 transition-colors">
      <div className="w-12 h-12 flex items-center justify-center border border-gray-400 rounded-sm">
        <img src="/icons/icon-laporan.svg" alt="Laporan" className="w-6 h-6" />
      </div>
      <span className="text-base font-semibold text-gray-700">Laporan Kehilangan</span>
    </a>

    {/* Item 3 */}
    <a href="./layanan/pengaduan" className="flex items-center gap-3 hover:text-yellow-700 transition-colors">
      <div className="w-12 h-12 flex items-center justify-center border border-gray-400 rounded-sm">
        <img src="/icons/icon-pengaduan.svg" alt="Pengaduan" className="w-6 h-6" />
      </div>
      <span className="text-base font-semibold text-gray-700">Pengaduan Masyarakat</span>
    </a>

    {/* Item 4 */}
    <a href="./layanan/rencana" className="flex items-center gap-3 hover:text-yellow-700 transition-colors">
      <div className="w-12 h-12 flex items-center justify-center border border-gray-400 rounded-sm">
        <img src="/icons/icon-rencana.svg" alt="SIM" className="w-6 h-6" />
      </div>
      <span className="text-base font-semibold text-gray-700">Rencana Acara</span>
    </a>

    {/* Item 5 */}
    <a href="./layanan/izin_keramaian" className="flex items-center gap-3 hover:text-yellow-700 transition-colors">
      <div className="w-12 h-12 flex items-center justify-center border border-gray-400 rounded-sm">
        <img src="/icons/icon-izin.svg" alt="Keramaian" className="w-6 h-6" />
      </div>
      <span className="text-base font-semibold text-gray-700">Izin Keramaian</span>
    </a>

  </div>
</section>
</div>
</div>
<WhatsAppPopup />
    </>
  );
}