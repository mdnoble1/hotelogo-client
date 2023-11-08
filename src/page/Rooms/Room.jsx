const Room = ({service}) => {

    const {roomImage} = service;
    return (
        <div>
            <img src={roomImage} alt="" />
        </div>
    );
};

export default Room;