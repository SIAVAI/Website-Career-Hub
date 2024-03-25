import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="flex flex-col justify-center items-center text-6xl gap-10 mt-28 font-black">OOOPPS!!!!</h2>
            <div className="flex flex-col justify-center items-center" >
                <button className="mt-20 text-white bg-red-400 p-6 rounded-2xl">
                    <Link to="/" >Go back to Home</Link>
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;