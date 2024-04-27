import { Link } from "react-router-dom";

const navLinks = [
  { title: "Home", to: "/Ideal-Mind/" },
  { title: "About", to: "/Ideal-Mind/about" },
  { title: "Solution", to: "/Ideal-Mind/solution" },
  { title: "Chat", to: "/Ideal-Mind/chat" },
];

const NavBar = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
