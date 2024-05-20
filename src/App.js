import logo from "./logo.svg";
import CourseDetails from "./pages/CourseDetails";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
