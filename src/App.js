import './App.css';
import { Nav } from './Components/Header/Nav';
import { Footer } from './Components/Footer/Footer';
import { AboutUs } from './Components/AboutUs/AboutUs';
import { News } from './Components/News/News';

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutUs />
      <News />
      <Footer />
    </div>
  );
}

export default App;
