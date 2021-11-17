import './App.css';
import { Nav } from './Components/Header/Nav';
import { Footer } from './Components/Footer/Footer';
import { AboutUs } from './Components/AboutUs/AboutUs';
import { News } from './Components/News/News';

function App() {
  return (
    <div className="App">
      
        <Nav />
        <div className="container">
          <AboutUs />
          <News />
        </div>
        <Footer />
      
    </div>
  );
}

export default App;
