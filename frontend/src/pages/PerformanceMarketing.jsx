import MainLayout from "../layouts/MainLayout";

function PerformanceMarketing() {

  return (

    <MainLayout>

      <div className="bg-[#14141A] text-white min-h-screen px-6 py-32">

        {/* Hero */}

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">

            Spend Smarter. <br />

            <span className="text-[#FFC919]">
              Scale Faster.
            </span>

          </h1>

          <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">

            Full-funnel paid media management across Google,
            Meta, LinkedIn, YouTube, and beyond —
            built to drive revenue, not just clicks.

          </p>

          <button className="mt-10 bg-[#FFC919] text-black px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition duration-300">

            Schedule a Free Strategy Call

          </button>

        </div>

        {/* Services */}

        <div className="max-w-7xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-[#1B1B24] border border-gray-800 rounded-3xl p-10">

            <h2 className="text-3xl font-bold text-[#FFC919] mb-5">

              Google Ads

            </h2>

            <p className="text-gray-300 leading-relaxed">

              Search, Shopping and Display campaigns optimized
              for conversions, revenue and scalable growth.

            </p>

          </div>

          <div className="bg-[#1B1B24] border border-gray-800 rounded-3xl p-10">

            <h2 className="text-3xl font-bold text-[#FFC919] mb-5">

              Meta Advertising

            </h2>

            <p className="text-gray-300 leading-relaxed">

              Full-funnel Facebook and Instagram advertising
              built for customer acquisition and retention.

            </p>

          </div>

          <div className="bg-[#1B1B24] border border-gray-800 rounded-3xl p-10">

            <h2 className="text-3xl font-bold text-[#FFC919] mb-5">

              LinkedIn Ads

            </h2>

            <p className="text-gray-300 leading-relaxed">

              High-intent B2B advertising focused on decision-makers,
              lead generation and pipeline growth.

            </p>

          </div>

          <div className="bg-[#1B1B24] border border-gray-800 rounded-3xl p-10">

            <h2 className="text-3xl font-bold text-[#FFC919] mb-5">

              YouTube Ads

            </h2>

            <p className="text-gray-300 leading-relaxed">

              Video campaigns designed to build awareness,
              engagement and scalable demand generation.

            </p>

          </div>

        </div>

      </div>

    </MainLayout>

  );
}

export default PerformanceMarketing;