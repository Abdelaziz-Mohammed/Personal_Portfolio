import { FaSpinner } from "react-icons/fa";

const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-bl from-gray-800 via-gray-900 to-neutral-800 z-50 text-center">
      <div className="flex flex-col items-center text-primaryColor">
        <FaSpinner className="text-5xl animate-spin slow-spin mb-10" />
        <p className="text-xl font-semibold">
          Please wait, the content is loading...
        </p>
      </div>
    </div>
  );
};

export default FullPageLoader;