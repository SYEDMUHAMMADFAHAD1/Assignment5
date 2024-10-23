import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Navbar />

      <div className="flex flex-col md:flex-row justify-around mt-12">
        <div className="w-full md:w-2/3 px-4">
          <h1 className="font-sans font-extrabold py-4 text-blue-800 text-4xl md:text-6xl">
            Governor Sindh
          </h1>
          <h2 className="text-2xl md:text-4xl text-blue-800 font-serif font-medium">
            Kamran Khan Tessori
          </h2>
          <h3 className="text-2xl md:text-4xl text-cyan-500 font-sans font-extrabold py-5">
            Certified Cloud <br /> Applied Generative AI <br /> Engineer (GenEng)
          </h3>
          <h4 className="font-sans font-extrabold text-blue-800 text-2xl md:text-3xl py-4">
            Earn up to $5,000 / month
          </h4>
          <h4 className="font-sans font-extrabold text-blue-800 text-2xl md:text-3xl py-4">
            Now admissions are open in <br /> Karachi
          </h4>
          <button className="font-sans font-bold bg-blue-800 hover:bg-blue-700 text-white text-lg md:text-xl px-6 py-3 rounded-lg mt-4 transition duration-300">
            Apply Now
          </button>
        </div>

        <div className="w-full md:w-96 h-96 bg-[url('/img/KamranTessori.png')] bg-cover bg-center rounded-lg mt-12"></div>
      </div>

      <div className="flex justify-center mt-12">
        <h1 className="font-sans font-extrabold py-12 text-blue-800 text-2xl md:text-3xl text-center">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
          <br /> Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>
      </div>

      <div className="flex justify-center px-10">
        <p className="font-serif text-gray-800 text-base md:text-lg text-center leading-relaxed">
          The pace of technological change is accelerating, with big players like Microsoft, Amazon, Google, and OpenAI leading by providing infrastructure, large AI models, frameworks, and Metaverse experiences.
        </p>
      </div>

      <div className="flex flex-wrap justify-evenly px-4 py-12 gap-4">
        <a href="#card1" className="w-1/2 md:w-1/3 h-96 bg-[url('/img/card1.jpg')] bg-cover rounded-lg shadow-lg transition hover:scale-105"></a>
        <a href="#card2" className="w-1/2 md:w-1/4 h-96 bg-[url('/img/card2.jpg')] bg-cover rounded-lg shadow-lg transition hover:scale-105"></a>
        <a href="#card3" className="w-1/2 md:w-1/3 h-96 bg-[url('/img/card3.jpg')] bg-cover rounded-lg shadow-lg transition hover:scale-105"></a>
      </div>

      <div className="flex flex-wrap justify-evenly px-4 py-12 gap-4">
        <a href="#card4" className="w-1/2 md:w-1/3 h-96 bg-[url('/img/card4.jpg')] bg-cover rounded-lg shadow-lg transition hover:scale-105"></a>
        <a href="#card5" className="w-1/2 md:w-1/3 h-96 bg-[url('/img/card5.jpg')] bg-cover rounded-lg shadow-lg transition hover:scale-105"></a>
      </div>

      <Footer />
    </div>
  );
}
