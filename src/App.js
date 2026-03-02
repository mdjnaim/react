import './App.css';
import Home from './assets/components/home';
import Navbar from './assets/components/navbar';  
import About from './assets/components/about';
import Review from './assets/components/review';
import Contact from './assets/components/contact';  
import Footer from './assets/components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
