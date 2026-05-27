"use client";

import MainLayout from "../layouts/MainLayout";
import {
  FaBullhorn,
  FaChartLine,
  FaRobot,
  FaLaptopCode,
} from "react-icons/fa";

export default function ServicesPage() {

  const services = [
    {
      title: "Performance Marketing",
      icon: <FaBullhorn />,
      desc: "Scale your business with high converting Meta & Google ads.",
    },
    {
      title: "SEO Optimization",
      icon: <FaChartLine />,
      desc: "Rank higher on Google and generate organic traffic.",
    },
    {
      title: "AI Automation",
      icon: <FaRobot />,
      desc: "Automate workflows and improve productivity using AI.",
    },
    {
      title: "Website Development",
      icon: <FaLaptopCode />,
      desc: "Modern responsive websites built with latest technologies.",
    },
  ];

  return (

    <MainLayout>

      <div className="min-h-screen bg-[#0B0B0F] text-white px-6 py-32">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h1 className="text-6xl font-bold mb-6">
              Our Services
            </h1>

            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              We help brands grow using performance marketing,
              AI systems and premium digital solutions.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service, index) => (

              <div
                key={index}
                className="bg-[#14141A] border border-gray-800 rounded-3xl p-8 hover:border-[#FFC919] transition duration-300"
              >

                <div className="text-5xl text-[#FFC919] mb-6">

                  {service.icon}

                </div>

                <h2 className="text-2xl font-bold mb-4">

                  {service.title}

                </h2>

                <p className="text-gray-400 leading-relaxed">

                  {service.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </MainLayout>

  );
}