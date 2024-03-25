import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Job = ({job}) => {

  // eslint-disable-next-line react/prop-types
  const {id,logo, job_title, company_name, location, salary,remote_or_onsite,job_type} = job

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={logo}
            alt="logo"
            className="rounded-xl"/>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <p>{location}</p>
          <p>{salary}$</p>
          <div>
            <button className="btn bg-transparent border border-[#9873FF] mr-2">{remote_or_onsite}</button>
            <button className="btn bg-transparent border border-[#9873FF]">{job_type}</button>
            
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
                <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;