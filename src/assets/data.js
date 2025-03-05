import { PhoneCall, MailIcon, LocateIcon, Computer, Smartphone, PaintBucket, Wifi, ShoppingCart, Megaphone, Code } from "lucide-react";
//import { PhoneCall, MailIcon, LocateIcon, Computer, Smartphone, PaintBucket, Database, Server, Cloud, ShieldCheck, BarChart, Settings } from "lucide-react";
import images from "./images/index";
// import { Layout } from "lucide-react";

export const orgData = {
  name: "Anmaya Softwares",
  description: "Anmaya Softwares",
  image: "Anmaya Softwares",
  contacts: [
    {
      id: 1,
      title: "Email",
      icon: MailIcon,
      value: "info@anmaya.in",
      text: "Email Us",
    },
    {
      id: 2,
      title: "Phone",
      icon: PhoneCall,
      value: "+91-7975179172",
      text: "Contact Us",
    },
    {
      id: 3,
      title: "Address",
      icon: LocateIcon,
      value: "Kukkikatte, Udupi, Karnataka, India",
      text: "Visit Us",
    },
  ],
  socials: {
    // twitter: "https://twitter.com/org",
    // instagram: "https://instagram.com/org",
    // facebook: "https://facebook.com/org",
    // linkedin: "https://linkedin.com/org",
    // github: "https://github.com/org",
  },
  // whatsapp: "https://wa.me/7975179172",
  techStack: ["React", "Tailwind", "Node", "Express", "MongoDB"],
  skills: [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "🔀" },
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Python", icon: "🐍" },
    { name: "AWS", icon: "☁️" },
    { name: "GraphQL", icon: "🔺" },
    { name: "Next.js", icon: "▲" },
    { name: "TailwindCSS", icon: "🎨" },
  ],
  services: [
    {
      id: 1,
      icon: Computer,
      title: "Web Development",
      description:
        "Providing top-notch web development solutions tailored to your specific needs and goals.",
    },
    {
      id: 2,
      icon: Smartphone,
      title: "App Development",
      description:
        "Providing top-notch mobile apps solutions tailored to your specific needs and goals.",
    },
    // {
    //   id: 3,
    //   icon: PaintBucket,
    //   title: "UI/UX Design",
    //   description:
    //     "Providing top-notch ui/ux design solutions tailored to your specific needs and goals.",
    // },
    { id: 3, icon: Code, title: "Software Development", description: "Creating custom software solutions tailored to your needs." },
    { id: 4, icon: Wifi, title: "Communication & Internet Services", description: "Providing reliable and high-speed connectivity solutions." },
    // { id: 5, icon: Tools, title: "Maintenance & Support", description: "Ensuring smooth operation and technical support for your software." },
    { id: 6, icon: ShoppingCart, title: "E-Commerce Portal Development", description: "Building scalable and secure e-commerce solutions." },
    { id: 7, icon: Megaphone, title: "Online Marketing Services", description: "Helping businesses grow through strategic digital marketing." },
   
  ],
 
  websites : [
    {
      title: "Ishna Play School",
      description:
        "Educational institution website for early childhood development",
      link: "https://ishnaplayschool.in/",
      image: "",
      tags: ["Next.js", "Education", "UI/UX"],
    },
    {
      title: "Udupi Chamber of Commerce",
      description:
        "Official website for the Udupi Chamber of Commerce and Industry",
      link: "https://ucciudupi.com/",
      image: "",
      tags: ["React", "Business", "Commerce"],
    },
    {
      title: "Indian Kitchen",
      description: "Restaurant website showcasing authentic Indian cuisine",
      link: "#",
      image: "",
      tags: ["Next.js", "Restaurant", "Food"],
    },
    {
      title: "JaySmiles",
      description: "Dental clinic website with appointment booking system",
      link: "#",
      image: "",
      tags: ["React", "Healthcare", "Booking"],
    },
    {
      title: "Hotel Ashlesh",
      description: "Luxury hotel website with room booking and amenities",
      link: "https://hotelashlesh.com/",
      image: "",
      tags: ["Next.js", "Hospitality", "Booking"],
    },
  ],  
  apps : [
    {
      title: "GST Invoicing",
      description: "Automated GST invoicing and management system",
      image: "",
      tags: ["React", "Finance", "Automation"],
    },
    {
      title: "Publisher Management",
      description: "Complete publishing house management solution",
      image: "",
      tags: ["Next.js", "Management", "Publishing"],
    },
    {
      title: "Travel Management",
      description: "End-to-end travel booking and itinerary management",
      image: "",
      tags: ["React", "Travel", "Booking"],
    },
    {
      title: "Play School Management",
      description:
        "Comprehensive school management and parent communication platform",
      image: "",
      tags: ["Next.js", "Education", "Management"],
    },
    {
      title: "Hydroponics Farm Management",
      description: "Smart farming solution for hydroponics management",
      image: "",
      tags: ["React", "Agriculture", "IoT"],
    },
  ],
  images,
};

export const navItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About Us",
    link: "/about",
  },
  {
    id: 3,
    title: "Services",
    link: "/services",
  },
  {
    id: 4,
    title: "Projects",
    link: "/projects",
  },
  // {
  //   id: 5,
  //   title: "Contact",
  //   link: "/contact",
  // },
];
