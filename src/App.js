import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import { Routes,Route } from 'react-router-dom';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/edu' element={<Education />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

{/* <Routes>
<Route path="contactus" element={<Contact />}></Route>
<Route path="/" element={
    <div className="login">
    <form className="loginform">
        <label htmlFor="username" className="label">User Name:</label>
        <br/>
        <input  type="text" placeholder="Enter UserName" id="username" name="username" onChange={handleclick}/>
        <br />
        <br />
        <Link to="/game" className="button-login">
            <button type="submit" className="button-log" onClick={handleclick1}>Submit</button>
        </Link>
    </form>
  </div>
}></Route>
<Route path="/game" element={<Main  name= {name.username}/>}>
</Route>
</Routes> */}
