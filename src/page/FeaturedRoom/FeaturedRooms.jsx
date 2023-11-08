import UseAxios from "../../hooks/UseAxios";
import FeaturedRoom from "./FeaturedRoom";
import { useEffect, useState } from "react";

const FeaturedRooms = () => {
  const axios = UseAxios();

  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("/services")
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => console.log(err));
  }, [axios]);

  return (
    <div>
      <div className="mt-12">
        <h2 className="font-bold text-2xl lg:text-5xl text-[#D31027] text-center">
          Featured Rooms
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
        {services.map((service) => (
          <FeaturedRoom key={service._id} service={service}></FeaturedRoom>
        ))}
      </div>
    </div>
  );
};
export default FeaturedRooms;
