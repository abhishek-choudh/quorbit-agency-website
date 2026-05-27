function Orbit() {

  return (

    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">

      {/* Outer Orbit */}
      <div className="w-[500px] h-[500px] border border-[#FFC919]/20 rounded-full animate-spin-slow absolute"></div>

      {/* Middle Orbit */}
      <div className="w-[350px] h-[350px] border border-[#62FF00]/20 rounded-full animate-spin-reverse absolute"></div>

      {/* Inner Glow */}
      <div className="w-32 h-32 bg-[#FFC919] opacity-20 blur-3xl rounded-full absolute"></div>

    </div>

  );
}

export default Orbit;