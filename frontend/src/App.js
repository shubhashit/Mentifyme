import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AchievmentSlab from './components/AchievmentSlab';
import Login from './components/Login';
import LoginOTP from './components/LoginOTP'
import TypeOfperson from './components/TypeOfperson';
import WakeupTime from './components/WakeupTime';
import SleepTime from './components/SleepTime';
import Schooltime from './components/Schooltime';
import CoachingTime from './components/CoachingTime';
import AfterLogin from './components/AfterLogin';
import NavbarAfterLogin from './components/NavbarAfterLogin';
import Name from './components/Name';
import MobileNumber from './components/MobileNumber';
import ExamType from './components/ExamType';
import Class from './components/Class';
import CoachingName from './components/CoachingName';
import Landingpage from './Landingpage';
import Navbar from './components/Navbar';
import Subjects from './components/Subjects';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landingpage></Landingpage>} />
          <Route exact path="/testing" element={<><Navbar></Navbar><Subjects></Subjects></>} />
          <Route exact path="/login" element={<> <Navbar></Navbar> <Login></Login> </>} />
          <Route exact path="/timetable/name" element={<> <Navbar></Navbar> <Name></Name> </>} />
          <Route exact path="/timetable/MobileNumber" element={<> <Navbar></Navbar> <MobileNumber></MobileNumber> </>} />
          <Route exact path="/timetable/ExamType" element={<> <Navbar></Navbar> <ExamType></ExamType> </>} />
          <Route exact path="/timetable/Class" element={<> <Navbar></Navbar> <Class></Class> </>} />
          <Route exact path="/timetable/CoachingName" element={<> <Navbar></Navbar> <CoachingName></CoachingName> </>} />
        </Routes>
      </Router>
      {/* <NavbarAfterLogin></NavbarAfterLogin>
      <AfterLogin></AfterLogin> */}
      {/* personal detalis */}
      {/* <Name></Name> */}
      {/* <MobileNumber></MobileNumber> */}
      {/* <ExamType></ExamType> */}
      {/* <Class></Class> */}
      {/* <CoachingName></CoachingName> */}
      {/* <TypeOfperson></TypeOfperson> */}
      {/* <WakeupTime></WakeupTime> */}
      {/* <SleepTime></SleepTime> */}
      {/* <Schooltime></Schooltime> */}
      {/* <CoachingTime></CoachingTime> */}
      {/* <Login></Login> */}
      {/* <LoginOTP></LoginOTP> */}
      
    </div>
  );
}

export default App;
