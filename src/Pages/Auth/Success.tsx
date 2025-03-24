import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const RegistrationSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
   
    const timer = setTimeout(() => {
      navigate("/login"); 
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      
      <CheckCircle size={80} className="text-green-500" />
      
      <h2 className="text-2xl font-semibold mt-4">Registration Successful!</h2>
      <p className="text-gray-400 mt-2">You will be redirected shortly...</p>

      <button
        onClick={() => navigate("/login")}
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-white transition"
      >
        Go to Login
      </button>
    </div>
  );
};

export default RegistrationSuccess;
