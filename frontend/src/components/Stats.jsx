function Stats() {

  const stats = [
    {
      number: "120+",
      text: "Projects Completed"
    },

    {
      number: "4.8x",
      text: "Average ROAS"
    },

    {
      number: "$12M+",
      text: "Revenue Generated"
    },

    {
      number: "95%",
      text: "Client Retention"
    }
  ];

  return (

    <section className="py-28 px-6 bg-[#101014]">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-10 text-center hover:border-[#FFC919] hover:-translate-y-2 transition duration-500"
            >

              <h2 className="text-5xl font-bold text-[#FFC919]">

                {item.number}

              </h2>

              <p className="mt-4 text-gray-300 text-lg">

                {item.text}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Stats;