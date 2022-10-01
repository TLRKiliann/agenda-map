import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { MeetingPoint } from './Pages/MeetingPoint';
import { PhoneContact } from './Pages/PhoneContact';
import { MapMap } from './Pages/MapMap'; 
import './App.scss';

const App:React.FC = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Route path="/" element={<MeetingPoint />} />
        <Route path="/PhoneContact" element={<PhoneContact />} />
        <Route path="/MapMap" element={<MapMap />} />
      </Router>
    </div>
  );
}

export default App;
