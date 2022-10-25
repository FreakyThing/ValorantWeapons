import { BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Guns/layout";
import React from 'react'
import Classic from './Guns/classic'

function App()  {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Layout />} />
        <Route path  = 'classic' element={<Classic />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App