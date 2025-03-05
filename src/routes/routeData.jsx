import { Home, About, Contact, Services, Projects,Team } from "./RouteComponents";

const allRoutes = [
  {
    id: 1,
    route: "/",
    element: <Home />,
  },
  {
    id: 2,
    route: "/about",
    element: <About />,
  },
  {
    id: 3,
    route: "/contact",
    element: <Contact />,
  },
  {
    id: 4,
    route: "/services",
    element: <Services />,
  },
  {
    id: 5,
    route: "/projects",
    element: <Projects />,
  },
  {
    id: 6,
    route: "/Team",
    element: <Team />,
  },
];

export default allRoutes;
