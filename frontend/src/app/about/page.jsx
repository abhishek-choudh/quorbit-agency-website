"use client";
import MainLayout from "../layouts/MainLayout";

import Navbar from "../components/Navbar";

export default function About() {

  return (

   
    <MainLayout>

      <div className="bg-[#14141A] text-white overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute top-40 left-20 w-72 h-72 bg-yellow-400 opacity-20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-400 opacity-10 blur-[120px] rounded-full"></div>

        {/* Hero Section */}
        <section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6">

          <h1 className="text-6xl md:text-8xl font-bold leading-tight max-w-5xl">

            Building The Future Of <br />

            <span className="text-[#FFC919]">
              Digital Growth
            </span>

          </h1>

          <p className="mt-10 text-xl text-gray-300 max-w-4xl leading-relaxed">

            Quorbit is a futuristic digital marketing agency
            combining creativity, AI, automation and performance
            strategy into one connected ecosystem.

          </p>

        </section>

        {/* Stats Section */}
        <section className="py-20 px-6">

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-10 text-center">

              <h2 className="text-5xl font-bold text-[#FFC919]">
                120+
              </h2>

              <p className="mt-4 text-gray-300 text-lg">
                Projects Completed
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-10 text-center">

              <h2 className="text-5xl font-bold text-[#FFC919]">
                4.8x
              </h2>

              <p className="mt-4 text-gray-300 text-lg">
                Average ROAS
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-10 text-center">

              <h2 className="text-5xl font-bold text-[#FFC919]">
                $12M+
              </h2>

              <p className="mt-4 text-gray-300 text-lg">
                Revenue Generated
              </p>

            </div>

          </div>

        </section>

        {/* Features */}
        <section className="py-24 px-6">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="text-5xl font-bold">

                Why <span className="text-[#FFC919]">Quorbit</span>

              </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="bg-[#1B1B24] border border-gray-800 rounded-3xl p-10 hover:border-[#FFC919] hover:-translate-y-3 transition duration-500">

                <h3 className="text-3xl font-bold text-[#FFC919] mb-5">

                  Innovation

                </h3>

                <p className="text-gray-300 leading-relaxed">

                  We blend AI, automation and modern design
                  systems to build scalable growth experiences.

                </p>

              </div>

              <div className="bg-[#1B1B24] border border-gray-800 rounded-3xl p-10 hover:border-[#FFC919] hover:-translate-y-3 transition duration-500">

                <h3 className="text-3xl font-bold text-[#FFC919] mb-5">

                  Strategy

                </h3>

                <p className="text-gray-300 leading-relaxed">

                  Every campaign and system is built around
                  measurable business outcomes and ROI.

                </p>

              </div>

              <div className="bg-[#1B1B24] border border-gray-800 rounded-3xl p-10 hover:border-[#FFC919] hover:-translate-y-3 transition duration-500">

                <h3 className="text-3xl font-bold text-[#FFC919] mb-5">

                  Growth

                </h3>

                <p className="text-gray-300 leading-relaxed">

                  We create digital ecosystems that increase
                  leads, conversions and long-term brand growth.

                </p>

              </div>

            </div>

          </div>

        </section>

      </div>
   </MainLayout>

  );
}