import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './menus/Header';
import Home from './menus/Home';
import Footer from './menus/Footer';
import Projects from './menus/Projects';
import About from './menus/About';
import Contact from './menus/Contact';
import Comments from './menus/Comments';

function App() {
  return (
    <Router>
      <Header />
      <Comments />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;