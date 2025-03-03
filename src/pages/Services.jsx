/* eslint-disable react-refresh/only-export-components */
import pageTransition from "../animations/pageTransition";
import ServicePage from "../components/Services/ServicePage";

const Services = () => {
  return (
    <div data-page-id="services-page">
      <ServicePage />
    </div>
  );
};

export default pageTransition(Services);
