import "./App.css";
import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import MainRoutes from "./pages/MainRoutes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <MainRoutes /> */}
      <HomePage />
    </div>
  );
}

export default App;
