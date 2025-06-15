
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import Courses from "./pages/Course";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import AdminCreateCourse from "./pages/AdminCreateCourse";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/create-course" element={<AdminCreateCourse />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
