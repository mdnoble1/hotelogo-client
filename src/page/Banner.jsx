import banner from "../assets/videos/video.mp4";

const Banner = () => {
  return (
    <div className="w-full h-50% relative py-6">
      <video
        className="w-full h-full object-cover"
        src={banner}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 "></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1 className="text-2xl lg:text-5xl  py-4 font-bold text-[#D31027]">
          Welcome to HoteloGo <br /> Your Gateway to Effortless Getaways!
        </h1>
        <h1 className="text-xl lg:text-3xl mb-4">The Ultimate Luxury Experience</h1>
        <div>
          <button data-aos="zoom-out" data-aos-duration="1500"  className="btn btn-outline text-[#D31027] lg:text-xl btn-sm lg:btn-md">
            Learn More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
