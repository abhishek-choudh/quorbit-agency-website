import MainLayout from "../layouts/MainLayout";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";


function Contact() {

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({

    first_name: "",
    last_name: "",
    email: "",
    company: "",
   
    website: "",

service: "",

budget: "",
 message: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    setLoading(true);

    try {

      const response = await axios.post(

        "http://localhost:5000/contact",

        formData

      );

      toast.success(response.data.message);
      setLoading(false);
      setFormData({

        first_name: "",
        last_name: "",
        email: "",
        company: "",
        message: ""

      });

    } catch (error) {

      console.log(error);

     toast.error("Something went wrong ❌");
     setLoading(false);
    }

  };

  return (

    <MainLayout>

      <div className="min-h-screen bg-[#14141A] text-white px-6 py-32">

        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-20">

            <h1 className="text-6xl md:text-7xl font-bold">

              Let's <span className="text-[#FFC919]">Connect</span>

            </h1>

            <p className="mt-6 text-gray-400 text-xl max-w-3xl mx-auto">

              Tell us about your business, your goals,
              and where you're looking to grow.

            </p>

          </div>

          {/* Form */}
          <div className="bg-[#1B1B24] border border-gray-800 rounded-3xl p-10">

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >

              {/* First Name */}
              <div>

                <label className="block mb-3 text-gray-300">
                  First Name
                </label>

                <input
                  type="text"
                  required
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  className="w-full bg-[#14141A] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-[#FFC919]"
                />

              </div>

              {/* Last Name */}
              <div>

                <label className="block mb-3 text-gray-300">
                  Last Name
                </label>

                <input
                  type="text"
                  required
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  className="w-full bg-[#14141A] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-[#FFC919]"
                />

              </div>

              {/* Email */}
              <div>

                <label className="block mb-3 text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full bg-[#14141A] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-[#FFC919]"
                />

              </div>

              {/* Company */}
              <div>

                <label className="block mb-3 text-gray-300">
                  Company
                </label>

                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  className="w-full bg-[#14141A] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-[#FFC919]"
                />

              </div>

              {/* Website */}
<div>

  <label className="block mb-3 text-gray-300">
    Website
  </label>

  <input
    type="text"
    required
    name="website"
    value={formData.website}
    onChange={handleChange}
    placeholder="Enter website"
    className="w-full bg-[#14141A] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-[#FFC919]"
  />

</div>

{/* Service Interested */}
<div>

  <label className="block mb-3 text-gray-300">
    Interested Service
  </label>

  <select
    required
    name="service"
    value={formData.service}
    onChange={handleChange}
    className="w-full bg-[#14141A] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-[#FFC919]"
  >

    <option value="">
      Select Service
    </option>

    <option>
      Performance Marketing
    </option>

    <option>
      E-Commerce Growth
    </option>

    <option>
      All-In-One Marketing
    </option>

    <option>
      Website & Automation
    </option>

  </select>

</div>


{/* Budget */}
<div>

  <label className="block mb-3 text-gray-300">
    Marketing Budget
  </label>

  <select
    required
    name="budget"
    value={formData.budget}
    onChange={handleChange}
    className="w-full bg-[#14141A] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-[#FFC919]"
  >

    <option value="">
      Select Budget
    </option>

    <option>
      Under $2K
    </option>

    <option>
      $2K–$5K
    </option>

    <option>
      $5K–$20K
    </option>

    <option>
      $20K–$50K
    </option>

    <option>
      $50K+
    </option>

  </select>

</div>


              {/* Message */}
              <div className="md:col-span-2">

                <label className="block mb-3 text-gray-300">
                  Message
                </label>

                <textarea
                  rows="6"
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#14141A] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-[#FFC919]"
                ></textarea>

              </div>



              {/* Button */}
              <div className="md:col-span-2 text-center">

                <button
  type="submit"
  disabled={loading}
  className="bg-[#FFC919] text-black px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition duration-300"
>

  {loading ? "Sending..." : "Send Message"}

</button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </MainLayout>

  );
}

export default Contact;