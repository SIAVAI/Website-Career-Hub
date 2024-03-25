import {useEffect, useState} from "react";
import Job from "./Job";

const FeaturedJobs = () => {

  const [jobs,
    setJobs] = useState([])

  const [dataLength,
    setDataLength] = useState(4)

  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await fetch('jobs.json');
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mt-20">Featured Jobs</h2>
      <p className="text-lg font-normal text-[#757575] text-center my-4 ">Explore
        thousands of job opportunities with all the information you need. Its your
        future</p>

      {/* Jobs */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 place-items-center">
        {jobs
          .slice(0, dataLength)
          .map(job => <Job key={job.id} job={job}></Job>)
}
      </div>

      <div className={dataLength===jobs.length ? 'hidden':''}>
        <div className="text-center mt-8">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn text-white bg-[#9873FF]">Show All</button>
        </div>
      </div>

    </div>
  );
};

export default FeaturedJobs;