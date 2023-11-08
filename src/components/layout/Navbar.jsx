import { NavLink } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import logo from "../../assets/images/logo1.png";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { user, logOut } = UseAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logged out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
      <div className="flex-1">
        <img className="w-28 lg:w-48" src={logo} alt="logo" />
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}

          <NavLink
            to="/rooms"
            className={({ isActive }) =>
              isActive
                ? `btn btn-primary btn-sm font-bold text-lg text-[#D31027]`
                : `btn btn-ghost btn-sm font-bold text-lg text-black`
            }
          >
            Rooms
          </NavLink>
          <NavLink
            to="/myBookings"
            className={({ isActive }) =>
              isActive
                ? `btn btn-ghost btn-sm font-bold text-lg text-[#D31027]`
                : `btn btn-ghost btn-sm font-bold text-lg text-black`
            }
          >
            My Bookings
          </NavLink>
        </ul>
      </div>
      <div className={`hidden lg:block`}>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar text-4xl"
          >
            <CgProfile></CgProfile>
          </label>
          <div
            tabIndex={0}
            className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
          >
            {user ? (
              <>
                <div>
                  <div>
                    <div>
                      <img
                        className="w-10 rounded-full mx-auto my-4"
                        src={user.photoURL}
                      />
                    </div>
                  </div>
                  <div>
                    <span className="block font-semibold text-center mb-4">
                      {user.displayName}
                    </span>
                  </div>
                  <div className="text-center">
                    <button
                      onClick={handleLogOut}
                      className="btn btn-sm btn-outline text-[#D31027]"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="my-8 text-center">
                  <p className="font-semibold text-black text-lg">
                    Please{" "}
                    <NavLink to="/login" className="text-[#D31027]">
                    <button
                      className="btn btn-sm btn-outline text-[#D31027] ml-2"
                    >
                      Login
                    </button>
                    </NavLink>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
