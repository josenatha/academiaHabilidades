
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './components/Home';
import './styles/app.css'
import { Link } from 'react-router-dom';
import { About } from './components/About';
import { Contac } from './components/Contac';
import { Course } from './components/Course';
function App() {
  return (
    <div className="App">
       <HashRouter>
      <nav className='nav'>
      <Link to="/">Ir a home</Link>

      <Link to="/about">go to aboud Us</Link>

      <Link to="/contac">go to contac</Link>

      <Link to="/courses">go to courses</Link>      
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
	      <Route path="/contac" element={<Contac />} />
        <Route path="/courses" element={<Course />} />
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
