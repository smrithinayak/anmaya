/* eslint-disable react-refresh/only-export-components */
import pageTransition from "../animations/pageTransition";
import ProjectPage from "../components/Projects/ProjectPage";

const Projects = () => {
  return (
    <div data-page-id="projects-page">
      <ProjectPage />
    </div>
  );
};

export default pageTransition(Projects);
