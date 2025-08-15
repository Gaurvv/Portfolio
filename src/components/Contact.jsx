import React from "react";
import { MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";
import { FaGithub, FaFacebookF } from "react-icons/fa";

function Contact() {
  const contactDetails = [
    {
      icon: <MdOutlineMail className="text-black text-3xl" />,
      title: "Email",
      content: "GauravDhungana294@gmail.com",
      link: null,
    },
    {
      icon: <FaGithub className="text-black text-3xl" />,
      title: "GitHub",
      content: "Gaurvv",
      link: "https://github.com/Gaurvv",
    },
    {
      icon: <FaFacebookF className="text-black text-3xl" />,
      title: "Facebook",
      content: "Gaurav Dhungana",
      link: "https://www.facebook.com/gaurav.dhungana.18",
    },
    {
      icon: <MdOutlineLocationOn className="text-black text-3xl" />,
      title: "Location",
      content: "Nepal",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen font-sans px-6 py-20 flex flex-col items-center text-black opacity-100 transition-opacity duration-500">
      {/* Heading */}
      <div className="mb-16">
        <h1 className="font-thin text-5xl sm:text-6xl md:text-7xl text-center tracking-widest uppercase">
          Let's Work Together
        </h1>
      </div>

      {/* Subtitle */}
      <p className="max-w-2xl text-center text-gray-700 font-light mb-16 leading-relaxed text-lg">
        Ready to bring your ideas to life? Let's discuss how we can create
        something amazing together.
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl w-full">
        {contactDetails.map((item, i) =>
          item.link ? (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-gray-200"
            >
              <div className="w-18 h-18 bg-gray-200 rounded-full flex items-center justify-center mb-6 shadow-sm text-black">
                {item.icon}
              </div>
              <h2 className="text-2xl font-thin uppercase tracking-widest mb-3">
                {item.title}
              </h2>
              <p className="text-gray-700 text-base font-light">{item.content}</p>
            </a>
          ) : (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center border border-gray-200"
            >
              <div className="w-18 h-18 bg-gray-200 rounded-full flex items-center justify-center mb-6 shadow-sm text-black">
                {item.icon}
              </div>
              <h2 className="text-2xl font-thin uppercase tracking-widest mb-3">
                {item.title}
              </h2>
              <p className="text-gray-700 text-base font-light">{item.content}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Contact;