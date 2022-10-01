import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { MeetingPoint } from '';
import { PhoneContact } from '';
import { Map } from ''; 
import './App.css';

const App:React.FC = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/MeetingPoint" element={<MeetingPoint />} />
        <Route path="/PhoneContact" element={<PhoneContact />} />
        <Route path="/Map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
