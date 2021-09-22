import './App.css';
import { Nav } from './Components/Header/Nav';
import { Footer } from './Components/Footer/Footer';
import { AboutUs } from './Components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
