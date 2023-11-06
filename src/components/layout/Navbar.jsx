import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1 px-2 mx-2">
        <h1 className="text-2xl font-bold">HoteloGo</h1>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <NavLink
            to="/rooms"
            className={({ isActive }) =>
              isActive ? `btn btn-primary btn-sm` : `btn btn-ghost btn-sm`
            }
          >
            Rooms
          </NavLink>
          <NavLink
            to="/myBookings"
            className={({ isActive }) =>
              isActive ? `btn btn-primary btn-sm` : `btn btn-ghost btn-sm`
            }
          >
            My Bookings
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? `btn btn-primary btn-sm` : `btn btn-ghost btn-sm`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `btn btn-primary btn-sm` : `btn btn-ghost btn-sm`
            }
          >
            About
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
