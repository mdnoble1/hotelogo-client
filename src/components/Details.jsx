import { NavLink, useParams } from "react-router-dom";
import UseAxios from "../hooks/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const Details = () => {
  const axios = UseAxios();
  const { id } = useParams();

  console.log(id);

  const { data: service } = useQuery({
    queryKey: ["service"],
    queryFn: async () => {
      const res = await axios.get(`/services/${id}`);
      return res;
    },
  });

  return (
    <div className="container mx-auto mt-12 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <img
            className="rounded-md w-11/12 lg:w-[1020px] mx-auto"
            src={service?.data?.roomImage}
            alt=""
          />
        </div>
        <div className="px-10 py-8 rounded-md border border-gray-400 h-fit w-11/12 mx-auto">
          <h2 className="font-semibold text-2xl text-black mb-4">
            Room : {service?.data?.roomType}{" "}
          </h2>
          <h2 className="font-semibold text-2xl text-black mb-4">
            Price :{" "}
            <span className="text-[#D31027]">
              {service?.data?.pricePerNight}$
            </span>{" "}
            / Night
          </h2>
          <h2 className="font-semibold text-2xl text-black mb-4">
            Available : {service?.data?.availability}
          </h2>
          <NavLink to={``}>
            <button className="btn btn-outline rounded-lg font-semibold text-xl normal-case text-[#D31027]">
              Book Now
            </button>
          </NavLink>
        </div>
      </div>
      <div className="w-11/12 lg:w-1/2 text-center lg:text-left my-6 mx-auto lg:mx-0">
        <p className="font-medium text-xl text-gray-600">
          {service?.data?.description}
        </p>
      </div>
      <div className="flex justify-between items-center w-11/12 lg:w-[1000px] mx-auto lg:mx-0">
        <h2 className="font-medium text-xl text-black">Room Size : <span className="text-gray-600">{service?.data?.roomSize}</span></h2>
        <div>
          <Rating
            emptySymbol={
              <FaRegStar className="text-[#D31027] text-xl lg:text-2xl"></FaRegStar>
            }
            fullSymbol={
              <FaStar className="text-[#D31027] text-xl lg:text-2xl"></FaStar>
            }
            initialRating={service?.data?.review}
            readonly
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
