import React from 'react';
import {  Route, Routes, useNavigate } from 'react-router-dom';
import Todo from './Todo';
import Completed from './Completed';

function App() {
 
  return (
    <Routes>
    <Route path="/" element={<Todo/>}/>
    <Route path="/completed" element={<Completed/>}/>
    </Routes>
  );
}

export default App;
