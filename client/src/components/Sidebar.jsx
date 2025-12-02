import React from "react";
import { Briefcase, Target, Lightbulb, TrendingUp } from "lucide-react";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
 
function Card({ title, children, gradient }) {
    return (
        <div
            className={`flex flex-col gap-4 border p-5 rounded-2xl shadow-lg backdrop-blur-sm
      ${gradient ? "bg-gradient-to-br from-[#3A7BFF]/10 to-[#3A7BFF]/5 border-[#3A7BFF]/20" : "bg-white/5 border-white/10"}`}
        >
            <div className="flex items-center gap-2 mb-2">{title}</div>
            {children}
        </div>
    );
}
 
const difficulties = ["Beginner", "Intermediate", "Advanced"];
const interviewTypes = ["Behavioral", "Technical"];
const jobRoles = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Mobile Developer", "DevOps Engineer", "Data Analyst"];
 
export default function Sidebar({ jobRole, setJobRole, difficulty, setDifficulty, interviewType, setInterviewType }) {
    return (
        <div className="space-y-4">
 
            {/* Job Role Dropdown */}
            <Card
                title={
                    <div className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-[#3A7BFF]" />
                        <span>Job Role</span>
                    </div>
                }
            >
                <Select.Root value={jobRole} onValueChange={setJobRole}>
                    <Select.Trigger className=" w-full flex justify-between items-center px-4 py-3 rounded-xl bg-[#0A0E27]
                                            text-white border border-white/10 cursor-pointer
                                            hover:border-[#3A7BFF]/40 transition-all duration-200
                                            outline-none ring-0 focus:outline-none focus:ring-0
                                            data-[state=open]:outline-none data-[state=open]:ring-0 data-[state=open]:border-white/10">
                        <Select.Value placeholder="Select a job role" />
                        <Select.Icon>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                        </Select.Icon>
                    </Select.Trigger>
 
                    <Select.Portal>
                        <Select.Content
                            className="bg-[#1a1f3a] border border-white/10 text-white rounded-xl shadow-lg z-50"
                            position="popper"
                            sideOffset={5}
                        >
                            <Select.Viewport className="w-[--radix-select-trigger-width]">
                                {jobRoles.map((role) => (
                                    <Select.Item
                                        key={role}
                                        value={role}
                                        className="relative flex items-center px-4 py-2 cursor-pointer rounded-lg text-white select-none
                                                 hover:bg-[#3A7BFF]/10
                                                  outline-none border-none ring-0
                                                  data-[highlighted]:outline-none data-[highlighted]:ring-0 data-[highlighted]:border-none"
                                    >
                                        <Select.ItemText>{role}</Select.ItemText>
                                        <Select.ItemIndicator className="absolute right-4">
                                            <Check className="w-4 h-4 text-[#3A7BFF]" />
                                        </Select.ItemIndicator>
                                    </Select.Item>
                                ))}
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </Card>
 
 
            {/* Difficulty Buttons */}
            <Card
                title={
                    <div className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-[#3A7BFF]" />
                        <span>Difficulty Level</span>
                    </div>
                }
            >
                <div className="flex gap-2">
                    {difficulties.map((lvl) => (
                        <button
                            key={lvl}
                            onClick={() => setDifficulty(lvl)}
                            className={`flex-1 py-2 px-3 rounded-lg text-xs transition-all ${difficulty === lvl ? "bg-[#3A7BFF] text-white" : "bg-white/5 text-gray-400 hover:bg-white/10"
                                }`}
                        >
                            {lvl}
                        </button>
                    ))}
                </div>
            </Card>
 
            {/* Interview Type Buttons */}
            <Card
                title={
                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-[#3A7BFF]" />
                        <span>Interview Type</span>
                    </div>
                }
            >
                <div className="flex gap-2">
                    {interviewTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => setInterviewType(type)}
                            className={`flex-1 py-2 px-3 rounded-lg text-xs transition-all ${interviewType === type ? "bg-[#3A7BFF] text-white" : "bg-white/5 text-gray-400 hover:bg-white/10"
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </Card>
 
            {/* Real-time Score */}
            <Card title="Real-time Score">
                <span className="text-[#3A7BFF] text-sm font-medium">75%</span>
                <div className="w-full h-2 bg-white/10 rounded mt-2 overflow-hidden">
                    <div className="bg-[#3A7BFF] h-full w-3/4 rounded-full transition-all"></div>
                </div>
                <p className="text-xs text-gray-400 mt-2">Based on your responses so far</p>
            </Card>
 
            {/* AI Tips */}
            <Card
                title={
                    <div className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-[#3A7BFF]" />
                        <span>AI Tips</span>
                    </div>
                }
                gradient
            >
                <ul className="space-y-2 text-xs text-gray-300">
                    <li>• Speak confidently and clearly</li>
                    <li>• Use the STAR method for behavioral questions</li>
                    <li>• Avoid long pauses</li>
                    <li>• Provide specific examples from your experience</li>
                </ul>
            </Card>
 
        </div>
    );
}
 