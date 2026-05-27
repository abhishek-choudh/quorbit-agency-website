function WhyChooseUs() {

  const features = [
    {
      title: "Data-Driven Strategy",
      description:
        "Every campaign is optimized using real performance metrics and analytics."
    },

    {
      title: "Full Funnel Growth",
      description:
        "From awareness to conversion, every stage is strategically managed."
    },

    {
      title: "Creative + Performance",
      description:
        "We combine design, psychology, and marketing to drive real revenue."
    },

    {
      title: "Transparent Reporting",
      description:
        "Clear reporting with measurable KPIs and business-focused outcomes."
    }
  ];

  return (

    <section className="py-28 px-6 bg-[#14141A]">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold">

            Why <span className="text-[#FFC919]">Choose Us</span>

          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">

            We build modern digital systems that combine strategy,
            automation, performance marketing, and premium experiences.

          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 hover:border-[#FFC919] hover:-translate-y-2 transition duration-500"
            >

              <h3 className="text-3xl font-bold text-[#FFC919] mb-5">

                {item.title}

              </h3>

              <p className="text-gray-300 leading-relaxed text-lg">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default WhyChooseUs;