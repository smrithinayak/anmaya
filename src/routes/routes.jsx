import { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loader from "../utils/Loader";
import allRoutes from "./routeData";
import { AnimatePresence } from "framer-motion";

const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <div className="">
    <Suspense fallback={<Loader />}>
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
          {allRoutes.map((routeItem) => (
            <Route
              key={routeItem.id}
              exact path={routeItem.route}
              element={routeItem.element}
            />
          ))}
        </Routes>
      </AnimatePresence>
    </Suspense>
    </div>
  );
};

export default AppRoutes;
