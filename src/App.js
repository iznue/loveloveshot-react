import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import MainPage from "./pages/MainPage";
import ModeSelect from "./pages/ModeSelect";
import NormalImage from "./pages/NormalImage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/modeSelect" element={<ModeSelect />} />
          <Route path="/normalImage" element={<NormalImage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
