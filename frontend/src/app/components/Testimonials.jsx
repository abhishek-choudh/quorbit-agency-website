function Testimonials() {

  const testimonials = [
    {
      name: "Michael Carter",
      company: "NovaTech",
      review:
        "Quorbit completely transformed our paid marketing strategy. Our ROAS improved massively within weeks."
    },

    {
      name: "Sophia Williams",
      company: "Glow Fashion",
      review:
        "The team built a premium growth system for our brand. From ads to automation, everything became smoother."
    },

    {
      name: "Daniel Smith",
      company: "Skyline Media",
      review:
        "Professional execution, clean reporting and strong communication. Easily one of the best agency experiences we've had."
    }
  ];

  return (

    <section className="py-28 px-6 bg-[#14141A]">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold">

            Client <span className="text-[#FFC919]">Testimonials</span>

          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">

            Real businesses. Real growth. Real results.

          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-10 hover:border-[#FFC919] hover:-translate-y-2 transition duration-500"
            >

              <div className="text-[#FFC919] text-5xl mb-6">
                "
              </div>

              <p className="text-gray-300 leading-relaxed text-lg">

                {item.review}

              </p>

              <div className="mt-10">

                <h3 className="text-2xl font-bold">

                  {item.name}

                </h3>

                <p className="text-gray-400 mt-2">

                  {item.company}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Testimonials;