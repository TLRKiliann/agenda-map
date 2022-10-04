import React from 'react';
//import { DataType } from './Models/model';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { MeetingPoint } from './Pages/MeetingPoint';
import { PhoneContact } from './Pages/PhoneContact';
import { Login } from './Pages/Login';
import './App.scss';

const App:React.FC = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/PhoneContact" element={<PhoneContact />} />
        <Route path="/MeetingPoint" element={<MeetingPoint />} />
      </Routes>
    </div>
  );
}

export default App;
