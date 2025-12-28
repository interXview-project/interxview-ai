import HowItWorksCard from "./HowItWorksCard";
import {
  UserPlusIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

export default function HowItWorks() {
  return (
    <section className="relative bg-[#0A1224] py-32 overflow-hidden">

      {/* Top fade (from previous dark section) */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#050B1E] to-transparent" />

      {/* Bottom fade (to next dark section) */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#050B1E] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">

        {/* Section Title */}
        <h2 className="text-4xl font-bold">
          How <span className="text-[#4F7CFF]">It Works</span>
        </h2>

        <p className="mt-4 text-[#A5B4C7] max-w-2xl mx-auto">
          Get started in minutes and transform your interview skills with our
          simple four-step process.
        </p>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <HowItWorksCard
            icon={<UserPlusIcon className="w-7 h-7" />}
            title="Create Your Profile"
            description="Sign up and tell us about your career goals, experience, and target roles."
          />

          <HowItWorksCard
            icon={<Cog6ToothIcon className="w-7 h-7" />}
            title="Customize Your Path"
            description="AI generates a personalized learning path based on your needs and skill gaps."
          />

          <HowItWorksCard
            icon={<RocketLaunchIcon className="w-7 h-7" />}
            title="Practice & Improve"
            description="Engage in mock interviews, refine your CV, and receive real-time AI feedback."
          />

          <HowItWorksCard
            icon={<TrophyIcon className="w-7 h-7" />}
            title="Land Your Dream Job"
            description="Apply with confidence and ace your interviews with your newfound skills."
          />
        </div>
      </div>
    </section>
  );
}
