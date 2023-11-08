import { NavLink } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";

const Sidebar = () => {

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
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200">
        {/* Sidebar content here */}
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
        <div>
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
                    <NavLink to="/login" className="text-[#D31027]">
                    <button
                      className="btn btn-sm btn-outline text-[#D31027] ml-2"
                    >
                      Login
                    </button>
                    </NavLink>
                </div>
              </>
            )}
      </div>
      </ul>
      
    </div>
  );
};

export default Sidebar;
