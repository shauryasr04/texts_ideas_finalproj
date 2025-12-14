import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import History from "./pages/History";
import Exodus from "./pages/Exodus";
import PhysicalExile from "./pages/PhysicalExile";
import MemoryExile from "./pages/MemoryExile";
import GenerationalExile from "./pages/GenerationalExile";
import Gallery from "./pages/Gallery";
import ArtworkDetail from "./pages/ArtworkDetail";
// Keep old pages for backward compatibility if needed
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
            {/* New structure */}
            <Route path="/" element={<Landing />} />
            <Route path="/history" element={<History />} />
            <Route path="/exodus" element={<Exodus />} />
            <Route path="/physical-exile" element={<PhysicalExile />} />
            <Route path="/memory-exile" element={<MemoryExile />} />
            <Route path="/generational-exile" element={<GenerationalExile />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/artwork/:id" element={<ArtworkDetail />} />
            {/* Old pages - kept for backward compatibility */}
            <Route path="/home-old" element={<Home />} />
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

