import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

interface NavBarProps {
  authenticatedUser: MaybeAuthenticatedUser;
  clearUser: () => void;
}

const NavBar = ({authenticatedUser, clearUser}: NavBarProps) => (
  const navigate = useNavigate();

  if(authenticatedUser) {
    return(
      
    )
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/cinemas">Cinemas</Link>
    <Link to="/movie-list">My favorite movies</Link>
    <Link to="/add-movie">Add a movie</Link>
  </nav>
);

export default NavBar;
