const CategoryList = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-20">Job Category List</h2>
      <p className="text-lg font-normal text-[#757575] text-center my-4 ">Explore
        thousands of job opportunities with all the information you need. Its your
        future</p>


      <div className="my-12 flex flex-col justify-center items-center md:flex-row lg:flex-row gap-4">

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img
            src="/src/assets/icons/accounts.png"
            alt="Shoes"/></figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-xl font-bold">Account & Finance</h2>
            <p className="text-[#A3A3A3] text-base ">300 Jobs Available</p>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img
            src="/src/assets/icons/creative.png"
            alt="Shoes"/></figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-xl font-bold">Creative Design</h2>
            <p className="text-[#A3A3A3] text-base ">100+ Jobs Available</p>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img
            src="/src/assets/icons/marketing.png"
            alt="Shoes"/></figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-xl font-bold">Marketing & Sales</h2>
            <p className="text-[#A3A3A3] text-base ">150 Jobs Available</p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img
            src="/src/assets/icons/chip.png"
            alt="Shoes"/></figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-xl font-bold">Engineering Job</h2>
            <p className="text-[#A3A3A3] text-base ">224 Jobs Available</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CategoryList;