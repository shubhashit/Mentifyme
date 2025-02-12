import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AchievmentSlab from './components/AchievmentSlab';
import Signup from './components/Signup';
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
import { useContext, useState } from 'react';
import Profile from './components/Profile';
import Login2 from './components/Login2';
import UserContext from './components/context/UserContext';
import Login from './components/admin/Login';
import Settime from './components/admin/Settime';
import AdminProfile from './components/admin/AdminProfile';
import Availability from './components/admin/Availbility';
import AdminCal from './components/admin/AdminCal';
import AdminProfileChange from './components/admin/AdminProfileChange';
import ForgotPassword from './components/ForgotPassword';
import Wallet from './components/admin/Wallet';
import Ratings from './components/admin/Ratings';
import TokenContext from './components/context/UserToken';
import PremiumBooking from './components/PremiumBooking';

function App() {
  const {user} = useContext(UserContext);
  const {token , setToken} = useContext(TokenContext);
  console.log(token)
  console.log(user);
  const url = process.env.REACT_APP_BASE_URL;
  console.log(url)
  const[phone_number , setPhone_number] = useState();
  console.log(phone_number)


  // const ProtectedRoute = ({ children }) => {
  //   if (user === null) {
  //     console.log('navigation to login page');
  //     return (<Navigate to="/signin"></Navigate>)
  //   }
  //   return children;
  // }




  return (
    
    <div className="lg:overflow-x-hidden bg-white">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landingpage></Landingpage>} />
          <Route exact path="/Premium" element={<PremiumPage></PremiumPage>} />
          <Route exact path="/BookYourCall" element={<BookYourCall></BookYourCall>} />
          <Route exact path="/payment" element={<Payment></Payment>} />
          <Route exact path="/testing" element={<><Navbar></Navbar><Subjects></Subjects></>} />
          <Route exact path="/signup" element={<> <Navbar></Navbar> <Signup setPhone_number={setPhone_number}></Signup> </>} />
          <Route exact path="/login" element={<> <Navbar></Navbar> <Login2 setPhone_number={setPhone_number}></Login2> </>} />
          <Route exact path="/forgetpassword" element={<> <ForgotPassword></ForgotPassword> </>} />

          {/* <Route exact path="/LoginOTP" element={<> <Navbar></Navbar> <LoginOTP day="day" phone_number={phone_number} setotp={setotp}></LoginOTP> </>} /> */}
          {/* <Route exact path="/LoginPassword" element={<> <Navbar></Navbar> <LoginPassword phone_number={phone_number} otp={otp}></LoginPassword> </>} /> */}
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
          <Route exact path="/Profile" element={<> <NavbarAfterLogin></NavbarAfterLogin> <Profile></Profile> </>} />

        {/* admin paths */}
          <Route exact path="/admin-login" element={<> <Login></Login> </>} />
          <Route exact path="/admin-settime" element={<> <Settime></Settime> </>} />
          <Route exact path="/admin-profile" element={<> <AdminProfile></AdminProfile> </>} />
          <Route exact path="/admin-availability" element={<> <Availability></Availability> </>} />
          <Route exact path="/cal" element={<> <AdminCal></AdminCal> </>} />
          <Route exact path="/admin-profileChange" element={<> <AdminProfileChange></AdminProfileChange> </>} />
          <Route exact path="/admin-wallet" element={<> <Wallet></Wallet> </>} />
          <Route exact path="/admin-rating" element={<> <Ratings></Ratings> </>} />



          {/* premium Booking */}
          <Route exact path="/PremiumBooking" element={<> <PremiumBooking></PremiumBooking> </>} />


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
