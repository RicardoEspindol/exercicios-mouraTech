import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="bg-azulEscuro h-16 px-4 text-gray-600 flex flex-col justify-center w-screen">
      <ul className="h-8 flex flex-row gap-20 text-white text-center justify-end mr-7 text-xl font-light">
        <li>
          <NavLink to="/login" className="hover:underline">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Exemplo1" className="hover:underline">
            Exemplo1
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;