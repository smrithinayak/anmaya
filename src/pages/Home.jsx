/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import pageTransition from "../animations/pageTransition";
import ServicesSection from "../components/Home/Services";
import LandingSection from "../components/Home/Landing";
//import ContactSection from "../components/Home/Contact";
import WebsiteSection from "../components/Home/Website";
import ApplicationsSection from "../components/Home/Applications";

const Home = () => {

  return (
    <div className="text-gray-100 min-h-screen" data-page-id="home-page">
      {/* Hero Section */}
      <LandingSection />

      <div className=" bg-gradient-to-r from-gray-900 via-white to-gray-900 py-[1px] text-center mx-auto rounded-full"></div>

      {/* Services Section */}
      <ServicesSection />

      {/* Website Section */}
      <WebsiteSection />

      {/* Application Section */}
      <ApplicationsSection />

      {/* Contact Section */}
      {/* <ContactSection /> */}
    </div>
  );
};

export default pageTransition(Home);
