import React from 'react';
import { MdOutlineMail, MdOutlineLocationOn } from 'react-icons/md';
import { FaGithub, FaFacebookF } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

function Contact() {
  const contactDetails = [
    {
      icon: <MdOutlineMail className="text-black text-3xl" />,
      title: 'Email',
      content: 'GauravDhungana294@gmail.com',
      link: null,
    },
    {
      icon: <FaGithub className="text-black text-3xl" />,
      title: 'GitHub',
      content: 'Gaurvv',
      link: 'https://github.com/Gaurvv',
    },
    {
      icon: <FaFacebookF className="text-black text-3xl" />,
      title: 'Facebook',
      content: 'Gaurav Dhungana',
      link: 'https://www.facebook.com/gaurav.dhungana.18',
    },
    {
      icon: <MdOutlineLocationOn className="text-black text-3xl" />,
      title: 'Location',
      content: 'Nepal',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen font-sans px-6 py-20 flex flex-col items-center text-black opacity-100 transition-opacity duration-500">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-5xl font-thin uppercase tracking-widest text-center mb-2">
          Let's Work Together
        </h1>
        {/* Removed underline */}
      </div>

      {/* Subtitle */}
      <p className="max-w-xl text-center text-gray-700 font-light mb-12 leading-relaxed">
        Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl w-full mb-16">
        {contactDetails.map((item, i) =>
          item.link ? (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-gray-200"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4 shadow-sm text-black">
                {item.icon}
              </div>
              <h2 className="text-xl font-thin uppercase tracking-widest mb-2">{item.title}</h2>
              <p className="text-gray-700 text-sm font-light">{item.content}</p>
            </a>
          ) : (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-gray-200"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4 shadow-sm text-black">
                {item.icon}
              </div>
              <h2 className="text-xl font-thin uppercase tracking-widest mb-2">{item.title}</h2>
              <p className="text-gray-700 text-sm font-light">{item.content}</p>
            </div>
          )
        )}
      </div>

      {/* Download CV */}
      <a
        href="/cv.pdf"
        download="Gaurav_Dhungana_CV"
        className="bg-black text-white font-semibold py-3 px-10 rounded-md shadow hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
      >
        <FiDownload className="text-2xl" />
        Download CV
      </a>
    </div>
  );
}

export default Contact;
