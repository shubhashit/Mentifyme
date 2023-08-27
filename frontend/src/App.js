import './App.css';
import AchievmentSlab from './components/AchievmentSlab';
import Benifits from './components/Benifits';
import Hero from './components/Hero';
import Login from './components/Login';
import Mentors from './components/Mentors';
import Navbar from './components/Navbar';
import SocialMediaPresence from './components/SocialMediaPresence';
import Students from './components/Students';
import Subsection1 from './components/Subsection1';
import LoginOTP from './components/LoginOTP'
// import img from '../src/assets/HeroSectionImg.svg'
// import img2 from '../src/assets/Vector.svg'

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      {/* <Login></Login> */}
      <LoginOTP></LoginOTP>
      {/* <Benifits></Benifits>
      <Students></Students>
      <Mentors></Mentors>
      <SocialMediaPresence></SocialMediaPresence> */}
    </div>
  );
}

export default App;
