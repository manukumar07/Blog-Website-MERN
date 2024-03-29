import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="flex-none w-10">
          <h3>Mern-BLOG</h3>
        </Link>
        <div className="absolute bg-white w-full top-full mt-0.5 border-b border-grey py-4 px-[5vw]">
          <input
            type="text"
            placeholder="search"
            className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
