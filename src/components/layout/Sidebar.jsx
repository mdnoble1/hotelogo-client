import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200">
        {/* Sidebar content here */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `btn btn-primary btn-sm` : `btn btn-ghost btn-sm`
          }
        >
          Home
        </NavLink>
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
            to="/register"
            className={({ isActive }) =>
              isActive ? `btn btn-primary btn-sm` : `btn btn-ghost btn-sm`
            }
          >
            Register
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
  );
};

export default Sidebar;
