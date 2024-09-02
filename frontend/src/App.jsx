import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Login from './Pages/Login';
import Home from './Pages/Home';
// import Navbar from './Pages/Navbar';


function App() {

  return (
    <>
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
        
    </>
  )
}

export default App
