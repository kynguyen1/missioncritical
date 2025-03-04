const Home = () => {
  return (
    <div className= "w-screen h-screen overflow-hidden snap-y snap-mandatory overflow-y-scroll">
      {/* Banner Section */}
      <div 
        className="relative w-screen h-screen bg-cover bg-center snap-start"
        style={{ backgroundImage: "url('/images/starrysky.jpg')" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Track Your Fitness</h1>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>

      <div className="w-screen h-screen bg-white flex items-center justify-center snap-start">
        <h2 className="text-2xl text-gray-800">Our Features</h2>
      </div>
    </div>

  )
}

export default Home
