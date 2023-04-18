import "./App.css";
import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import MainRoutes from "./pages/MainRoutes";

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
