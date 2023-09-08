import './App.css'
import Signup from './components/Signup/Signup'
import SignIn from './components/Signup/SignIn';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import DashboardOverview from './components/dasboard/DashboardOverview';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<DashboardOverview />} />
        <Route path="/dashboards" element={<Sidebar/>} />

      </Routes>
    </Router>
  )
}

export default App
