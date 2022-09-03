import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
