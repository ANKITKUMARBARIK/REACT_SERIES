import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full h-[45px] flex justify-center items-center p-4 bg-gray-900 gap-x-5">
      {NavbarData.map((link, idx) => (
        <NavLink
          key={idx}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-purple-600 font-semibold text-xl"
              : "text-gray-200 font-medium text-xl"
          }
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
