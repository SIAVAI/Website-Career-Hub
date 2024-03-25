const Banner = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-b from-white via-gray-200 via-60% to-[#ccbbfa] to-100%  ">
      <div className=" w-[90%] flex flex-col-reverse justify-center items-center md:flex-row lg:flex-row gap-10">
        <div className="mr-2">
          <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /> <span className="text-[#9873FF]">Dream Job</span></h1>
          <p className="py-6 text-lg font-normal">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
          <button className="btn bg-[#9873FF] text-white border-none">Get Started</button>
        </div>
        <img
          src="/src/assets/images/user.png"
          className="max-w-sm rounded-lg shadow-2xl"/>
      </div>
    </div>
  );
};

export default Banner;