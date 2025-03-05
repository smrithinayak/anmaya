/* eslint-disable react-refresh/only-export-components */
import pageTransition from "../animations/pageTransition";
import TeamPage from './../components/Team/TeamPage';

const Team = () => {
  return (
    <div data-page-id="team-pages">
      <TeamPage />
    </div>
  );
};

export default pageTransition(Team);
