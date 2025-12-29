import heroImage from "../assets/homePic.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0f2847] to-[#1a3a5c]">
      
      {/* Animated Lines Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#0ea5e9]/40 to-transparent animate-lineSlow" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-[#0ea5e9]/25 to-transparent animate-lineMedium" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[#0ea5e9]/30 to-transparent animate-lineFast" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center text-white">
        
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 bg-[#1a3a5c]/70 text-[#0ea5e9] px-5 py-2 rounded-full text-sm mb-6 border border-slate-700">
            AI-Powered Interview Preparation
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Ace Every <br />
            Interview with{" "}
            <span className="text-[#0ea5e9]">InterXview-AI</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
            Transform your interview skills and perfect your CV with our
            AI-powered platform. Get personalized feedback, practice with
            realistic scenarios, and land your dream job with confidence.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0ea5e9]/20 to-transparent rounded-2xl blur-2xl" />
          <img
            src={heroImage}
            alt="Interview"
            className="relative rounded-2xl shadow-[0_30px_80px_rgba(10,22,40,0.8)] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
