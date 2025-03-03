import Navbar from "./components/Static/Navbar";
import Footer from "./components/Static/Footer";
import "./App.css";
import DotsLayout from "./components/Static/layout";
import AppRoutes from "./routes/routes";
import NavShift from "./animations/navbar";

const App = () => {
  return (
    <DotsLayout>
      <div className="App flex flex-col pt-32">
        <NavShift>
          <Navbar />
        </NavShift>
        <AppRoutes />
        <Footer />
      </div>
    </DotsLayout>
  );
};

export default App;


