/* eslint-disable react-refresh/only-export-components */
import pageTransition from "../animations/pageTransition";
import AboutPage from "../components/About/AboutPage";

const About = () => {
  return (
    <div data-page-id="about-page">
      <AboutPage />
    </div>
  );
};

export default pageTransition(About);
