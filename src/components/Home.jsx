import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url(/images/Bg.jpg)"
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-wide mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] glossy-text animate-gradient">
          Welcome to AstraX Customs
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Redefining the art of automotive customization.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/models"
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Explore Models and Customize
          </Link>
        </div>
      </div>

      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>
  );
}
