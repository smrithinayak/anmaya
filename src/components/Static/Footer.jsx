"use client"

import { motion } from "framer-motion"
import { Twitter, Linkedin, Github, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { orgData } from "../../assets/data"

const Footer = () => {
  const socials = [
    { name: "Twitter", icon: Twitter, url: orgData.socials.twitter },
    { name: "LinkedIn", icon: Linkedin, url: orgData.socials.linkedin },
    { name: "GitHub", icon: Github, url: orgData.socials.github },
    { name: "Facebook", icon: Facebook, url: orgData.socials.facebook },
    { name: "Instagram", icon: Instagram, url: orgData.socials.instagram },
  ]

  const websiteInfo = [
    { name: "About", url: "/about" },
    { name: "Conditions", url: "/conditions" },
    { name: "Privacy", url: "/privacy" },
  ]

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 py-12 px-6 md:px-12 lg:px-24 text-center mt-auto">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Socials Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-100">Connect With Anmaya</h3>
          <div className="flex justify-center space-x-4">
            {socials.map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <platform.icon className="w-6 h-6" />
                <span className="sr-only">{platform.name}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Website Info Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-100">Website Info</h3>
          <ul className="space-y-2">
            {websiteInfo.map((item) => (
              <motion.li key={item.name} whileHover={{ scale: 1.05 }}>
                <a href={item.url} className="text-gray-400 hover:text-blue-400 transition-colors">
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex-1 items-left justify-left">
          <h3 className="text-xl font-semibold mb-4 text-gray-100 justify-start">Contact</h3>
          <div className="space-y-3 text-gray-400">
            <div className="flex items-left justify-left space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <p className="text-gray-400">info@anmaya.in</p>
            </div>
            <div className="flex items-left justify-left space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <p className="text-gray-400">+91-7975179172</p>
            </div>
            <div className="flex items-left justify-left space-x-3">
              <MapPin className="w-6 h-6 text-blue-400" />
              <p className="text-gray-400 ">
                Door No. 3-88G17, First Floor,
                <br /> V4 Central Township, Kukkikatte,
                <br /> Udupi - 576101
              </p>
            </div>
          </div>
        </div>
      </div>

     
      <div>
        <p className="text-gray-400 mt-12">
          &copy; {new Date().getFullYear()} {orgData.name}. All rights reserved.
        </p>
        <p className="text-gray-500 mt-2 text-sm">Designed and built with passion</p>
        <p className="text-gray-500 mt-2 text-sm">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className=" text-blue-500 cursor-pointer hover:text-blue-400 transition-colors"
            onClick={() => (window.location.href = "/team")}
          >
           {/* <> Meet our team</>  */}
           <h2 className="text-1xl md:text-2xl  text-blue-500">
                   Meet Our Team
            </h2>

          </motion.span>
        </p>
      </div>
    </footer>
  )
}

export default Footer

