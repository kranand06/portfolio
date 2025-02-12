import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#121212] text-[#E0E0E0] px-6 text-center">

          <h1 className="text-9xl font-bold text-white">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mt-4">
            Oops! Page Not Found
          </h2>
          <p className="text-md md:text-lg text-[#757575] mt-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
    

          <Link to="/" className="mt-6">
            <button className="px-6 py-3 bg-[#BB86FC] text-[#121212] font-semibold rounded-lg shadow-md hover:bg-[#9B6FEF] transition-all">
              Go Home
            </button>
          </Link>
          <div className="absolute bottom-10 flex space-x-4">
            <span className="w-3 h-3 bg-[#ffffff] rounded-full animate-bounce"></span>
            <span className="w-3 h-3 bg-[#BB86FC] rounded-full animate-bounce delay-400"></span>
            <span className="w-3 h-3 bg-[#ffffff] rounded-full animate-bounce delay-800"></span>
          </div>
        </div>
      );
};

export default Error404;