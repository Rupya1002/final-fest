// Fest - A simple React app
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './Navbar';
import HomeContainer from './HomeContainer';
import './App.css';
import ScheduleContainer from './Schedule';
import Login from './Login';
import Profile from './Profile';
import Team from './Teams';
import Details from './Details';
import Day1 from "./Day1";
import Day2 from "./Day2";
import Day3 from "./Day3";


function App() {
  return (
    <div>
      <div>
      <BrowserRouter>
        <Navbar />
        <div className='placer'></div>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/schedule" element={<ScheduleContainer />}>
          <Route path="day1" element={<Day1 />} />
          <Route path="day2" element={<Day2 />} />
          <Route path="day3" element={<Day3 />} />
        </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/details" element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </div>

    </div>
  );
}

export default App;
