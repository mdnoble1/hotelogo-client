/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const FeaturedRoom = ({ service }) => {
  const { roomType, roomImage, _id } = service;
  return (
    <div>
      <NavLink to={`/services/${_id}`}>
        <div className="w-11/12 lg:w-[450px] rounded border border-gray-400 mx-auto">
          <h2 className="font-semibold text-2xl text-black my-4 mx-6 text-center">
            {roomType}
          </h2>
          <div className="">
            <img className="w-full rounded-md h-64" src={roomImage} alt="" />
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default FeaturedRoom;
