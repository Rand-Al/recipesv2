import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 bg-slate-800 text-white">
      <div className="flex container mx-auto">
        <div className="text-xl font-black flex-grow underline">
          Beer Recipes
        </div>
        <div className="flex gap-4">
          <Link className="text-xl" to="/">
            Home
          </Link>
          <Link className="text-xl" to="/about">
            About
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
