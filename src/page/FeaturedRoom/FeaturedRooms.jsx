// import UseAxios from "../../hooks/UseAxios";
import { useEffect, useState } from "react";
import FeaturedRoom from "./FeaturedRoom";
// import { useEffect, useState } from "react";

const FeaturedRooms = () => {
//   const axios = UseAxios();

//   const [services, setServices] = useState([]);
//   useEffect(() => {
//     axios
//       .get("/services")
//       .then((res) => {
//         setServices(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, [axios]);


// const services = useLoaderData();

// console.log(services)

const [ services , setServices ] = useState([]);

useEffect( () => {
    fetch("http://localhost:5000/services")
     .then( res => res.json())
     .then( data => setServices(data))
} , [])

console.log(services)



  return (
    <div>
      <div className="mt-12">
        <h2 className="font-bold text-3xl lg:text-5xl text-[#D31027] text-center">
          Featured Rooms
        </h2>
        <p className='text-xl lg:text-2xl py-4 font-bold text-center'>Indulge in perfection with HoteloGo featured rooms—where luxury meets comfort</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
        {services.map((service) => (
          <FeaturedRoom key={service._id} service={service[service]}></FeaturedRoom>
        ))}
      </div>
    </div>
  );
};
export default FeaturedRooms;
