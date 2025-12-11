import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Background from "./pages/Background";
import Displacement from "./pages/Displacement";
import Memory from "./pages/Memory";
import Maps from "./pages/Maps";
import Voices from "./pages/Voices";
import About from "./pages/About";
import WorksCited from "./pages/WorksCited";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/background" element={<Background />} />
            <Route path="/displacement" element={<Displacement />} />
            <Route path="/memory" element={<Memory />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/voices" element={<Voices />} />
            <Route path="/about" element={<About />} />
            <Route path="/works-cited" element={<WorksCited />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

