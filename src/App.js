import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./component/header/Header";
import MainPage from "./pages/mainpage/MainPage";
import ModeSelect from "./pages/modeselect/ModeSelect";
import Standard from "./pages/standard/Standard";
import NormalImageResult from "./pages/normalimageresult/NormalImageResult";
import PremiumImage from "./pages/PremiumImage";
import NotFound from "./pages/NotFound";
import Layout from "./layouts/Layouts";
import OAuth2Redirect from "./oauth2/OAuth2Redirect";
import Normal from "./pages/standard/Normal";
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
          <Route path="/standard" element={<Standard />} />
          <Route path="/normalResult" element={<NormalImageResult />} />
          <Route path="/premium" element={<PremiumImage />} />
          <Route path="/oauth2/redirect" element={<OAuth2Redirect />} />
          <Route path="/normal" element={<Normal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
