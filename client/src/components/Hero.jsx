import heroImage from "../assets/homePic.jpg";

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-b from-[#050B1E] via-[#071A2E] to-[#0B2B4A]">
            <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center text-white">

                {/* Left Content */}
                <div>
                    <span className="inline-flex items-center gap-2 bg-[#0B2B4A]/70 text-sky-400 px-5 py-2 rounded-full text-sm mb-6 border border-white/10">
                        AI-Powered Interview Preparation
                    </span>

                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                        Ace Every <br />
                        Interview with{" "}
                        <span className="text-[#4F7CFF]">InterXview-AI</span>
                    </h1>

                    <p className="mt-6 text-lg text-[#A5B4C7] max-w-xl leading-relaxed">
                        Transform your interview skills and perfect your CV with our
                        AI-powered platform. Get personalized feedback, practice with
                        realistic scenarios, and land your dream job with confidence.
                    </p>
                </div>

                {/* Right Image */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#4F7CFF]/20 to-transparent rounded-2xl blur-2xl" />
                    <img
                        src={heroImage}
                        alt="Interview"
                        className="relative rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}