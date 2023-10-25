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
import PremiumPage from './components/PremiumPage';
import BookYourCall from './components/BookYourCall';
import Payment from './components/Payment';

function App() {
  return (
    <div className="lg:overflow-x-hidden">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landingpage></Landingpage>} />
          <Route exact path="/Premium" element={<PremiumPage></PremiumPage>} />
          <Route exact path="/BookYourCall" element={<BookYourCall></BookYourCall>} />
          <Route exact path="/payment" element={<Payment></Payment>} />
          <Route exact path="/testing" element={<><Navbar></Navbar><Subjects></Subjects></>} />
          <Route exact path="/login" element={<> <Navbar></Navbar> <Login></Login> </>} />
          {/* <Route exact path="/login" element={<> <Navbar></Navbar> <LoginOTP></LoginOTP> </>} /> */}
          <Route exact path="/timetable/name" element={<> <Navbar></Navbar> <Name></Name> </>} />
          <Route exact path="/timetable/MobileNumber" element={<> <Navbar></Navbar> <MobileNumber></MobileNumber> </>} />
          <Route exact path="/timetable/ExamType" element={<> <Navbar></Navbar> <ExamType></ExamType> </>} />
          <Route exact path="/timetable/Class" element={<> <Navbar></Navbar> <Class></Class> </>} />
          <Route exact path="/timetable/CoachingName" element={<> <Navbar></Navbar> <CoachingName></CoachingName> </>} />
          <Route exact path="/timetable/TypeOfperson" element={<> <Navbar></Navbar> <TypeOfperson></TypeOfperson> </>} />
          <Route exact path="/timetable/WakeupTime" element={<> <Navbar></Navbar> <WakeupTime></WakeupTime> </>} />
          <Route exact path="/timetable/SleepTime" element={<> <Navbar></Navbar> <SleepTime></SleepTime> </>} />
          <Route exact path="/timetable/Schooltime" element={<> <Navbar></Navbar> <Schooltime></Schooltime> </>} />
          <Route exact path="/timetable/CoachingTime" element={<> <Navbar></Navbar> <CoachingTime></CoachingTime> </>} />
          <Route exact path="/afterlogin" element={<> <NavbarAfterLogin></NavbarAfterLogin> <AfterLogin></AfterLogin> </>} />
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
