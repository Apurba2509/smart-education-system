import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/study-materials" element={<StudyMaterials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// Dashboard Page
export function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>Welcome to the Smart Education System Dashboard.</p>
      <ul>
        <li>Quick links to quizzes, assignments, and attendance</li>
        <li>Upcoming deadlines and schedules</li>
        <li>Personalized study recommendations</li>
      </ul>
    </div>
  );
}

// Quiz Page
export function Quiz() {
  return (
    <div className="page">
      <h1>Quiz</h1>
      <p>Test your knowledge with interactive quizzes.</p>
      <button>Start a New Quiz</button>
      <div className="quiz-list">
        <h2>Available Quizzes</h2>
        <ul>
          <li>Math Quiz - 10 Questions</li>
          <li>Science Quiz - 15 Questions</li>
          <li>History Quiz - 12 Questions</li>
        </ul>
      </div>
    </div>
  );
}

// Attendance Page
export function Attendance() {
  return (
    <div className="page">
      <h1>Attendance</h1>
      <p>Track your daily attendance records here.</p>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01 Feb 2025</td>
            <td>Present</td>
          </tr>
          <tr>
            <td>02 Feb 2025</td>
            <td>Absent</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// Assignments Page
export function Assignments() {
  return (
    <div className="page">
      <h1>Assignments</h1>
      <p>View and submit your assignments.</p>
      <ul>
        <li>Math Assignment - Due 5th Feb</li>
        <li>Science Report - Due 10th Feb</li>
      </ul>
      <button>Upload Submission</button>
    </div>
  );
}

// Chat Page
export function Chat() {
  return (
    <div className="page">
      <h1>Class Chat</h1>
      <p>Connect with your classmates and discuss topics.</p>
      <textarea placeholder="Type your message..."></textarea>
      <button>Send</button>
    </div>
  );
}

// Study Materials Page
export function StudyMaterials() {
  return (
    <div className="page">
      <h1>Study Materials</h1>
      <p>Access important study materials and resources.</p>
      <ul>
        <li>Physics Notes - PDF</li>
        <li>Math Formula Sheet - PDF</li>
      </ul>
    </div>
  );
}
