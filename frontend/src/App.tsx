import Home from "./pages/Home"
import { Route , Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Courses from "./pages/Courses"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />   
      </Routes>
    </>
  )
}

export default App
