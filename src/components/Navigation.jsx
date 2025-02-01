import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/attendance">Attendance</Link></li>
        <li><Link to="/assignments">Assignments</Link></li>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/study-materials">Study Materials</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
