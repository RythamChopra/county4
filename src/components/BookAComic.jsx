import { useState } from "react";
import { countyImages } from "../assets/index.js";
import Section from "./Section.jsx";

const BookAComic = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log("Submitted");
    // e.preventDefault();
    // try {
    //   const response = await fetch("http://localhost:5000/send-email", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     alert("Enquiry sent successfully!");
    //     setFormData({ name: "", email: "", phone: "", city: "", message: "" });
    //   } else {
    //     alert("Failed to send enquiry.");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert("Error sending enquiry.");
    // }
  };

  return (
    <Section
      className="pt-32 mt-6 flex flex-col items-center text-center"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="BookAComic"
    >
      <div className="w-full px-4">
        <h1 className="text-3xl md:text-4xl font-bold">Book a Comedian</h1>
      </div>

      <div className="w-full flex items-center justify-center my-10 px-4">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Register here</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="border-b border-gray-400 py-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent outline-none placeholder-white text-white"
                placeholder="Enter your Name"
                required
              />
            </div>

            <div className="border-b border-gray-400 py-1">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent outline-none placeholder-white text-white"
                placeholder="Your Email Address"
                required
              />
            </div>

            <div className="border-b border-gray-400 py-1">
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent outline-none placeholder-white text-white"
                placeholder="Your Phone Number"
                required
              />
            </div>

            <div className="border-b border-gray-400 py-1">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full bg-transparent outline-none placeholder-white text-white"
                placeholder="City"
                required
              />
            </div>

            {/* Updated Message Box */}
            <div className="border-b border-gray-400 py-1">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent outline-none placeholder-white text-white h-32 resize-none overflow-y-auto"
                placeholder="Your Message"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-black w-full py-2 rounded-sm text-white hover:bg-gray-800 transition"
            >
              Send
            </button>

            <p className="text-sm mt-4 text-gray-300">
              Advice: Laughter is the best medicine!
            </p>
          </form>
        </div>
      </div>

      <div className="w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Comic Gallery</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {countyImages.map((image) => (
            <div
              key={image.id}
              className="bg-gray-200 rounded-lg overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default BookAComic;
