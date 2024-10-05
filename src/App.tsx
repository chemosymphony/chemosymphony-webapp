import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './styles/GlobalStyles';
import Background from './components/atoms/Background';
import HomePage from './components/pages/HomePage';
import LoadingPage from './components/pages/LoadingPage';
import BackgroundMusic from './components/atoms/BackgroundMusic';
import ShuttleTravel from './components/pages/ShuttleTravel';

const App: React.FC = () => {
    const musicRef = useRef<{ play: () => void }>(null);

    return (
        <Router>
            <GlobalStyles />

                <BackgroundMusic ref={musicRef} />
                <AnimatePresence>
                    <Routes>
                        <Route path="/" element={<LoadingPage musicRef={musicRef} />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/shuttle-travel" element={<ShuttleTravel />} />
                    </Routes>
                </AnimatePresence>
        </Router>
    );
};

export default App;
