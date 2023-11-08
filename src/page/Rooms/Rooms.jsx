// import { useQuery } from "@tanstack/react-query";
import UseAxios from "../../hooks/UseAxios";
import Room from "./Room";
import { useEffect, useState } from "react";

const Rooms = () => {
  const axios = UseAxios();


  const [services, setServices] = useState([]);
    useEffect(() => {

        axios.get('/services')
            .then(res => {
                setServices(res.data);
            })
            .catch(err => console.log(err));
    }, [axios]);


    // console.log(services)

  // const getServices = async () => {
  //   const res = await axios.get("/services");
  //   return res;
  // };

  // const { data : services   } = useQuery({
  //   queryKey: ["service"],
  //   queryFn: getServices,
  // });

  return (
    <div>
        <div className="mt-12">
            <h2 className="font-bold text-2xl lg:text-5xl text-[#D31027] text-center">Our Featured Room Collection</h2>
            <p className="font-medium lg:text-xl w-11/12 lg:w-1/2 text-center mx-auto my-4">Indulge in luxury and comfort with our carefully selected featured rooms. From breathtaking views to opulent decor, our handpicked accommodations promise an extraordinary stay. Your dream getaway is just a click away. Explore our featured rooms and experience the pinnacle of indulgence with HoteloGo</p>
        </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
        {services.map((service) => (
          <Room key={service._id} service={service}></Room>
        ))}
      </div>
    </div>
  );
};
export default Rooms;
