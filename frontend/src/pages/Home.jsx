"use client";
import MainLayout from "../app/layouts/MainLayout";
import Services from "../app/components/Services";
import Orbit from "../app/components/Orbit";
import WhyChooseUs from "../app/components/WhyChooseUs";
import Stats from "../app/components/Stats";
import Testimonials from "../app/components/Testimonials";

function Home() {
 
 return (

  <MainLayout>

    <div className="overflow-hidden">
        <Orbit/>

      {/* Yellow Glow */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-yellow-400 opacity-20 blur-[120px] rounded-full"></div>

      {/* Green Glow */}
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-400 opacity-10 blur-[120px] rounded-full"></div>

      {/* Hero Section */}

      {/* Hero Section */}
<section className="relative z-10 min-h-screen flex items-center px-6 pt-32">

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

    {/* Left Side */}
    <div>

      <p className="text-[#FFC919] text-lg font-semibold mb-6 tracking-widest uppercase">

        FUTURE OF DIGITAL GROWTH

      </p>

      <h1 className="text-6xl md:text-8xl font-bold leading-tight">

        Scale Your Brand <br />

        <span className="text-[#FFC919]">
          Beyond Limits.
        </span>

      </h1>

      <p className="mt-10 text-xl text-gray-300 leading-relaxed max-w-2xl">

        Quorbit helps brands grow through performance marketing,
        automation, AI-powered systems and premium digital experiences.

      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-6 mt-12">

        <button
         onClick={() => window.location.href="/contact"}
          className="bg-[#FFC919] text-black px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition duration-300 shadow-[0_0_30px_#FFC919]"
        >

          Start Growing

        </button>

        <button
      onClick={() => window.location.href="/services"}  className="border border-gray-700 px-8 py-4 rounded-full text-lg hover:border-[#FFC919] hover:text-[#FFC919] transition duration-300"
>

  View Services

</button>

      </div>

      {/* Mini Stats */}
      <div className="flex gap-10 mt-16 flex-wrap">

        <div>

          <h2 className="text-4xl font-bold text-[#FFC919]">
            120+
          </h2>

          <p className="text-gray-400 mt-2">
            Clients
          </p>

        </div>

        <div>

          <h2 className="text-4xl font-bold text-[#FFC919]">
            4.8x
          </h2>

          <p className="text-gray-400 mt-2">
            Average ROAS
          </p>

        </div>

        <div>

          <h2 className="text-4xl font-bold text-[#FFC919]">
            $12M+
          </h2>

          <p className="text-gray-400 mt-2">
            Revenue
          </p>

        </div>

      </div>

    </div>

    {/* Right Side Dashboard Card */}
    <div className="relative">

      {/* Glow */}
      <div className="absolute inset-0 bg-[#FFC919] opacity-20 blur-[120px] rounded-full"></div>

      {/* Main Card */}
      <div className="relative bg-white/5 border border-white/10 backdrop-blur-lg rounded-[40px] p-10">

        {/* Top */}
        <div className="flex justify-between items-center mb-10">

          <div>

            <h3 className="text-2xl font-bold">
              Growth Analytics
            </h3>

            <p className="text-gray-400 mt-2">
              Real-time marketing performance
            </p>

          </div>

          <div className="w-16 h-16 rounded-2xl bg-[#FFC919] flex items-center justify-center text-black font-bold text-2xl">

            Q

          </div>

        </div>
{/* Analytics Bars */}
<div className="space-y-8">

  {/* Google Ads */}
  <div>

    <div className="flex justify-between mb-3">

      <h4 className="text-gray-300 font-medium">
        Google Ads
      </h4>

      <span className="text-[#FFC919] font-bold">
        85%
      </span>

    </div>

    <div className="h-4 bg-gray-800 rounded-full overflow-hidden">

      <div className="w-[85%] h-full bg-[#FFC919] rounded-full"></div>

    </div>

  </div>

  {/* Meta Ads */}
  <div>

    <div className="flex justify-between mb-3">

      <h4 className="text-gray-300 font-medium">
        Meta Ads
      </h4>

      <span className="text-green-400 font-bold">
        70%
      </span>

    </div>

    <div className="h-4 bg-gray-800 rounded-full overflow-hidden">

      <div className="w-[70%] h-full bg-green-400 rounded-full"></div>

    </div>

  </div>

  {/* LinkedIn Growth */}
  <div>

    <div className="flex justify-between mb-3">

      <h4 className="text-gray-300 font-medium">
        LinkedIn Growth
      </h4>

      <span className="text-blue-400 font-bold">
        92%
      </span>

    </div>

    <div className="h-4 bg-gray-800 rounded-full overflow-hidden">

      <div className="w-[92%] h-full bg-blue-400 rounded-full"></div>

    </div>

  </div>

</div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-2 gap-6 mt-10">

          <div className="bg-[#14141A] rounded-2xl p-6 border border-gray-800">

            <h4 className="text-gray-400">
              Conversion
            </h4>

            <p className="text-3xl font-bold mt-3 text-[#FFC919]">

              +38%

            </p>

          </div>

          <div className="bg-[#14141A] rounded-2xl p-6 border border-gray-800">

            <h4 className="text-gray-400">
              Growth
            </h4>

            <p className="text-3xl font-bold mt-3 text-green-400">

              +74%

            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      <Services />
      <WhyChooseUs />
      <Stats />
      <Testimonials />

    </div>

  </MainLayout>

);
}

export default Home;