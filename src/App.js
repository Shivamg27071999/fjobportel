
import { Route, Routes } from 'react-router-dom';
import './App.css';
import JobList from './Components/JobList';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <h1>Naukri Portal<span>  Developed by Shivam</span></h1>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
