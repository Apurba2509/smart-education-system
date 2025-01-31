import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import Attendance from "./pages/Attendance";
import Assignments from "./pages/Assignments";
import Kanban from "./pages/Kanban";
import Chat from "./pages/Chat";
import Pomodoro from "./pages/Pomodoro";
import StudyMaterials from "./pages/StudyMaterials";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/study-materials" element={<StudyMaterials />} />
      </Routes>
    </Router>
  );
}

export default App;
