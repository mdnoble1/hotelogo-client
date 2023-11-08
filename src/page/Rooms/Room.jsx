/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Room = ({ service }) => {
  const { roomType, roomImage, description, pricePerNight , _id } = service;
  return (
    <div className="w-11/12 lg:w-[450px] rounded border border-gray-400 mx-auto">
      <h2 className="font-semibold text-2xl text-black my-4 mx-6">
        {roomType}
      </h2>
      <div className="">
        <img className="w-full rounded-md h-64" src={roomImage} alt="" />
      </div>
      <p className="font-medium text-lg text-gray-600 my-4 mx-6">
        {description}
      </p>
      <div className="flex justify-between items-center px-6 pb-10">
        <NavLink to={`/services/${_id}`}>
          <button className="btn btn-outline rounded-lg font-semibold text-xl normal-case text-[#D31027]">
            Details
          </button>
        </NavLink>
        <p className="font-semibold text-lg text-[#D31027]">
          {pricePerNight}$ / Night
        </p>
      </div>
    </div>
  );
};

export default Room;
