import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import GlobalStyle from './styles/globalStyle';
import Header from './components/Header/Header';
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Blood from './pages/Blood/Blood';
import SinglePost from "./pages/Blood/BloodSinglePost/SinglePost";
import Community from './pages/Community/Community';
import Crew from './pages/Crew/Crew';
import CrewUpload from './pages/Crew/CrewUpload';
import CrewDetail from './pages/Crew/CrewDetail';
import Live from './pages/Live/Live';
import NotFound from './pages/NotFound/NotFound';
import CommunityWrite from './pages/Community/CommunityWrite/CommunityWrite';
import BloodWrite from './pages/Blood/BloodWrite/BloodWrite';
import MyPage from './pages/MyPage/MyPage';

function App() {
  const [hoveredComponent, setHoveredComponent] = useState(null);

  const handleHeaderHover = (component) => {
    setHoveredComponent(component);
  };

  const handleHeaderLeave = () => {
    setHoveredComponent(null);
  };

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header onHover={handleHeaderHover} onLeave={handleHeaderLeave} />
        <HeaderMenu
          hoveredComponent={hoveredComponent}
          onHover={handleHeaderHover}
          onLeave={handleHeaderLeave}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blood" element={<Blood />} />
          <Route path="Blood/BloodSinglePost/SinglePost" element={<SinglePost />} />
          <Route path="/community" element={<BloodWrite />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/crewupload" element={<CrewUpload />} />
          <Route path="/crewdetail/:id" element={<CrewDetail />} />
          <Route path="/live" element={<Live />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />

          
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
