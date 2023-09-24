import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./component/header/Header";
import MainPage from "./pages/mainpage/MainPage";
import ModeSelect from "./pages/modeselect/ModeSelect";
import NormalImage from "./pages/normalimage/NormalImage";
import NormalImageResult from "./pages/normalimageresult/NormalImageResult";
import PremiumImage from "./pages/PremiumImage";
import NotFound from "./pages/NotFound";
import Layout from "./layouts/Layouts";
import OAuth2Redirect from "./oauth2/OAuth2Redirect";
function App() {
  return (
    <>
      {/* <UseConnection /> */}
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/modeSelect" element={<ModeSelect />} />
          <Route path="/normal" element={<NormalImage />} />
          <Route path="/normalResult" element={<NormalImageResult />} />
          <Route path="/premium" element={<PremiumImage />} />
          <Route path="/oauth2/redirect" element={<OAuth2Redirect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
