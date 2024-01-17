import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React,{useState} from 'react';
import GlobalStyle from "./styles/globalStyle";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Home from "./pages/Home/Home";
import Blood from "./pages/Blood/Blood";
import Community from "./pages/Community/Community";
import Crew from "./pages/Crew/Crew";
import Live from "./pages/Live/Live";
import NotFound from "./pages/NotFound/NotFound";


function App() {

  const [hoveredComponent, setHoveredComponent] = useState(null);

  const handleHeaderHover = (component) => {
    setHoveredComponent(component);
  };

  const handleHeaderLeave =() =>{
    setHoveredComponent(null);
  };


  return (
    <>
      <GlobalStyle/>
      <Router>
        <Header onHover={handleHeaderHover} onLeave={handleHeaderLeave}/>
        <Footer hoveredComponent={hoveredComponent}
                onHover={handleHeaderHover} onLeave={handleHeaderLeave}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blood" element={<Blood />} />
          <Route path="/community" element={<Community />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/live" element={<Live />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;