import { useQuery } from "@tanstack/react-query";
import UseAxios from "../../hooks/UseAxios";
import Room from "./Room";

const Rooms = () => {


    const axios = UseAxios();


    const getServices = async() => {
        const res = await axios.get('/services');
        return res;
    }

    const { data : services } = useQuery({
        queryKey: ['service'],
        queryFn: getServices,
    })



    return (
        <div>
            {
                services?.data?.map( service => <Room key={service._id} service={service}></Room>)
            }
        </div>
    );
};

export default Rooms;