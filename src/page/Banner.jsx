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
        <h1 className="text-3xl">The Ultimate Luxury Experience</h1>
        <h1 className="lg:text-5xl  py-4 text-4xl font-bold text-[#D31027]">
          The Perfect Base For You
        </h1>
        <div>
          <button className="btn btn-outline text-[#D31027] text-xl">Learn More...</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;