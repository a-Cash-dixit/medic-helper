// import logo from './logo.svg';
import './App.css';
import { Appointment } from './components/Appointment/Appointment';
import { Doctor } from './components/Doctors/Doctor';
import { Doctor2 } from './components/Doctors/Doctor2';
import { Navbar } from './components/Navbar/Navbar';
import { Review } from './components/PReviews/Review';
import { Review2 } from './components/PReviews/Review2';
import {Services} from './components/Services/Services'
import { Team } from './components/Updates/Team';
import {Footer} from './components/Footer/Footer'
function App() {
  return (
    <body>
  <Navbar/>
  <Services/>
<Doctor/>
<Doctor2/>
<Review/>
<Review2/>
<Appointment/>
<Team/>
<Footer/>
    </body>
  );
}

export default App;
