
import "./App.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";


const NavBar = () => (
  <nav>
    <Link to="/">Accueil</Link>
    <Link to="/about">Cinéma</Link>
    <Link to="/contact">Films</Link>
  </nav>
);



const App = () => {
  
  return (
    <div>
      <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
        <h1>iMovies</h1>
      </Header>
      <NavBar />
      <Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <p>© 2024 UGC Cinémas</p>
      </Footer>
    </div>
  );
};

export default App;