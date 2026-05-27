import {
  FaBullhorn,
  FaShoppingCart,
  FaChartLine,
  FaRobot
} from "react-icons/fa";

function Services() {
  

  const services = [
  {
    title: "Performance Marketing",
    description:
      "Google Ads, Meta Ads and high-converting paid campaigns built for scale.",
    icon: <FaBullhorn />,
    tag: "Paid Growth",
    link: "/performance-marketing"
  },

  {
    title: "E-Commerce Growth",
    description:
      "Shopify growth systems, conversion optimization and product scaling.",
    icon: <FaShoppingCart />,
    tag: "E-Commerce",
    link: "/ecommerce"
  },

  {
    title: "All-In-One Marketing",
    description:
      "SEO, social media, paid media and omnichannel marketing systems.",
    icon: <FaChartLine />,
    tag: "Full Stack",
    link: "/all-in-one-marketing"
  },

  {
    title: "Website & Automation",
    description:
      "CRM systems, automations, workflows and AI-powered lead management.",
    icon: <FaRobot />,
    tag: "Automation",
    link: "/website-automation"
  }
];
  

  return (

    <section className="py-28 px-6 bg-[#14141A]">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">

          Our <span className="text-[#FFC919]">Services</span>

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (

           <div
  key={index}
  onClick={() => window.location.href=service.link}

  className="group bg-[#1B1B24] border border-gray-800 rounded-[32px] p-10 hover:border-[#FFC919] hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden"
>

  {/* Glow */}
  
<div className="absolute inset-0 bg-yellow-400/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
 
  {/* Icon */}
  <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#FFC919] text-black flex items-center justify-center text-3xl">

    {service.icon}

  </div>

  {/* Tag */}
  <div className="relative z-10 mt-6 inline-block px-4 py-2 rounded-full bg-white/10 text-sm text-[#FFC919]">

    {service.tag}

  </div>

  {/* Title */}
  <h2 className="relative z-10 text-3xl font-bold mt-8">

    {service.title}

  </h2>

  {/* Description */}
  <p className="relative z-10 text-gray-300 mt-6 leading-relaxed text-lg">

    {service.description}

  </p>

  {/* Learn More */}
  <div className="relative z-10 mt-10 text-[#FFC919] font-semibold flex items-center gap-2">

    Learn More →

  </div>

</div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Services;