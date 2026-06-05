import React from "react";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <p className="text-8xl font-black text-gray-100 select-none leading-none">
        404
      </p>
      <h1 className="text-2xl font-bold text-gray-800 mt-4">
        Page not found
      </h1>
      <p className="text-gray-400 mt-2 max-w-sm text-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex gap-3 mt-8">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Go back
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 text-sm rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors"
        >
          Go home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;