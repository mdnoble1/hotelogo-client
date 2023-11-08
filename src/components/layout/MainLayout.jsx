import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-[#fdfffc] py-2 lg:pt-8 lg:pb-4">
          <Navbar></Navbar>
        </div>
        {/* Page content here */}
        {children}
      </div>
      {/* sidebar */}
      <Sidebar></Sidebar>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};
export default MainLayout;
