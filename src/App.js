import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Create from './components/Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Read from './components/Read';
import Update from './components/Update';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Create />}/>
          <Route path="/read" element={<Read />}/>
          <Route path="/edit/:id" element={<Update />}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
