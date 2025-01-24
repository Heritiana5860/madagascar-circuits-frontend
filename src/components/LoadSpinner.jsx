const LoadingSpinner = () => {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="relative flex flex-col items-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 rounded-full border-8 border-orange-200 border-t-orange-500 animate-[spin_1s_linear_infinite] mb-8"></div>
          </div>
          <div className="mt-32">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Mada Circuits
            </h2>
          </div>
        </div>
      </div>
    );
  };

  export default LoadingSpinner;