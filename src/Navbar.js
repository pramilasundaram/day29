import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/student">List of students</Link>
      </li>
      <li>
        <Link to="/teacher">List of faculties</Link>
      </li>
    </ul>
  );
}
