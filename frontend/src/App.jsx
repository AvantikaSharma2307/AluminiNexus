import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
 import Login from './Pages/Login';
import Home from './Pages/Home';
import Choice from './Pages/Details/Choice';
import StuDetails from './Pages/Details/StuDetails';
import AlmDetails from './Pages/Details/AlmDetails';
// import Navbar from './Pages/Navbar';


function App() {

  return (
    <>
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/select' element={<Choice/>}></Route>
        <Route path='/student-details' element={<StuDetails/>}></Route>
        <Route path='/alumni-details' element={<AlmDetails/>}></Route>
      </Routes>
    </Router>
        
    </>
  )
}

export default App
