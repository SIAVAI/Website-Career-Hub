import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const job = jobs.find(job=>job.id==id)

    console.log(id,job)

    return (
        <div>
        <div
            className="hero min-h-screen rounded-xl"
            style={{
            backgroundImage: 'url(/src/assets/images/bg1.png)'
        }}>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h2 className="text-5xl mb-5 text-center font-bold text-[#9873FF]">Job Details Of <br /> {job.job_title}</h2>
                </div>
            </div>
        </div>


        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center mt-10 rounded-2xl bg-[#ece5ff]">

            {/* Job Description */}
            <div className="font-normal text-base text-[#757575] text-wrap p-6 ">
                <p className="my-2"><b className="text-[#1A1919] ">Job Description:</b> {job.job_description}</p>
                <p className="my-2"><b className="text-[#1A1919] ">Job Responsibility:</b> {job.job_responsibility}</p>
                <p className="my-2"><b className="text-[#1A1919] ">Education Requirements:</b> {job.educational_requirements}</p>
                <p className="my-2"><b className="text-[#1A1919] ">Experience :</b> {job.experiences}</p>
            </div>

            {/* Job Details */}
            <div className="bg-[#bca7f6] p-8 justify-center items-center rounded-2xl ">
                <h2 className="font-bold">Job Details</h2>
                <br />
                <hr />
                <p className="my-2"><b className="text-[#1A1919] ">Salary:</b> {job.salary}</p>
                <p className="my-2"><b className="text-[#1A1919] ">Job Title:</b> {job.job_title}</p>
                <br />
                <hr />
                <p className="my-2"><b className="text-[#1A1919] ">Contact Info:</b></p>
                <p>{job.contact_information.phone}</p>
                <p>{job.contact_information.email}</p>
                <p>{job.contact_information.address}</p>
                <br />
                <hr />
                <div className="mt-4 text-center">
                    <button className="btn btn-outline ">Apply Now</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default JobDetails;