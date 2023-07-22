import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>Beer Recipes</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  );
};

export default Header;
