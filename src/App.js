import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from "./styles/globalStyle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Blood from "./pages/Blood/Blood";
import Community from "./pages/Community/Community";
import Crew from "./pages/Crew/Crew";
import Live from "./pages/Live/Live";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blood" element={<Blood />} />
          <Route path="/community" element={<Community />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/live" element={<Live />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;