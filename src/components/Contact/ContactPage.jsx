/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { orgData } from "../../assets/data";
import { motion } from "framer-motion";
import React from "react";
import "./contactStyles.css";
import Pageheader from "../Static/pageheader";

const ContactPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-page">
      <Pageheader pageText={"Contact Us"}/>
      <div className="contact-cards-section my-14 mb-20">
        <div className="w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {orgData.contacts.map((contact, index) => (
            <div key={index}>
              <div className="p-4 shadow-lg flex flex-col items-center border-[0.6px] border-white rounded-xl">
                <motion.div
                  className="p-4 rounded-full border-[1px] border-gray-300"
                  whileHover={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <contact.icon className="h-12 w-12 text-white" />
                </motion.div>
                <h3 className="text-xl text-gray-200 mt-6 mb-3 font-bold">
                  {contact.text}
                </h3>
                <p className="text-gray-400">{contact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="contact-form-section mb-20">
        <div className="contact-form-text mb-10">
          <h2 className="text-center text-6xl font-bold">
            Have any questions?
          </h2>
        </div>
        <div className="contact-form w-10/12 mx-auto">
          <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-[#1c1c1c91] border-[1px] border-gray-300 rounded-xl">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
              <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Ask away!</h1>
              </div>
              <motion.form
                className="max-w-lg mx-auto"
                variants={staggerChildren}
              >
                <motion.div className="relative my-8" variants={fadeInUp}>
                  <input
                    type="text"
                    id="name"
                    placeholder=""
                    className="peer form-field-custom"
                    required
                  />
                  <label htmlFor="name" className="form-label-custom">
                    Name
                  </label>
                </motion.div>
                <motion.div className="relative my-8" variants={fadeInUp}>
                  <input
                    type="email"
                    id="email"
                    placeholder=""
                    className="peer form-field-custom"
                    required
                  />
                  <label htmlFor="email" className="form-label-custom">
                    Email
                  </label>
                </motion.div>
                <motion.div className="relative my-8" variants={fadeInUp}>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder=""
                    className="peer form-field-custom"
                    required
                  ></textarea>
                  <label htmlFor="message" className="form-label-custom">
                    Message
                  </label>
                </motion.div>
                <div className="flex justify-center">
                  <motion.button
                    variants={fadeInUp}
                    type="submit"
                    className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-800 py-1 pl-6 pr-14 font-medium text-neutral-50 mx-auto"
                  >
                    <span className="z-10 pr-2">Send Message</span>
                    <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-900 transition-[width] group-hover:w-[calc(100%-8px)]">
                      <div className="mr-3.5 flex items-center justify-center">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-neutral-50"
                        >
                          <path
                            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </motion.button>
                </div>
              </motion.form>
            </div>
            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
              <img
                alt="Background"
                src={orgData.images.formImage}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
