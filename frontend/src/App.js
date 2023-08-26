import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import img from '../src/assets/HeroSectionImg.svg'
// import img2 from '../src/assets/Vector.svg'

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      {/* <img src={img2} alt="" />
      <img src={img} alt="" /> */}
      <Hero></Hero>
    </div>
  );
}

export default App;
