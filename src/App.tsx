import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './styles/GlobalStyles';
import Background from './components/atoms/Background';
import PlanetPage from './components/pages/PlanetPage';
import BackgroundMusic from './components/atoms/BackgroundMusic';
import LoadingPage from "./components/pages/LoadingPage";
import NewsPastPage from "./components/pages/NewsPastPage";
import NewsFuturePage from "./components/pages/NewsFuturePage";
import HomePage from "./components/pages/HomePage";
import SystemPage from "./components/pages/SystemPage";
import GoingToPlanetPage from "./components/pages/GoingToPlanetPage";
import GamePage from "./components/pages/GamePage";
import ShuttleTravel from './components/pages/ShuttleTravel';
import IcePage from "./components/pages/IcePage";
import CryobotPage from "./components/pages/CryobotPage";
const App: React.FC = () => {
    const musicRef = useRef<{ play: () => void }>(null);
    return (
        <Router>
            <GlobalStyles />
            <BackgroundMusic ref={musicRef} />
            <AnimatePresence mode={"wait"}>
                <Routes>
                    <Route path="/" element={<LoadingPage musicRef={musicRef} />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/news:past" element={<NewsPastPage />} />
                    <Route path="/news:future" element={<NewsFuturePage />} />
                    <Route path="/planet" element={<PlanetPage />} />
                    <Route path="/system" element={<SystemPage />} />
                    <Route path="/travel" element={<ShuttleTravel />} />
                    <Route path="/cryobot" element={<CryobotPage />} />
                    <Route path="/ice" element={<IcePage />} />
                    <Route path="/transition:arriving" element={<GoingToPlanetPage />} />
                    <Route path="/game" element={<GamePage />} />
                </Routes>
            </AnimatePresence>
        </Router>
    );
};
export default App;
