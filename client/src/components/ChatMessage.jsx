import {
  UserIcon,
  SparklesIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";

export default function ChatMessage({ sender, message, timestamp }) {
  const isUser = sender === "user";

  // ✅ Format timestamp
  const timeString = timestamp
    ? new Date(timestamp).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  // 🔍 Detect message type
  const isScore = message.startsWith("Score:");
  const isFeedback = message.startsWith("Feedback:");

  // 🎨 Determine bubble styles
  let bubbleClasses = "";
  if (isScore) {
    bubbleClasses =
      "bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-xl text-xs w-fit shadow border border-yellow-300/20";
  } else if (isFeedback) {
    bubbleClasses =
      "bg-[#1B233D] text-blue-200 px-4 py-3 rounded-2xl shadow border border-blue-400/20 w-fit max-w-[80%]";
  } else {
    bubbleClasses = isUser
      ? "bg-[#3A7BFF] text-white px-4 py-3 rounded-2xl shadow"
      : "bg-[#2A3358] text-gray-200 px-4 py-3 rounded-2xl shadow";
  }

  return (
    <div
      className={`flex items-start gap-3 w-full ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* 🤖 AI Icon */}
      {!isUser && !isScore && !isFeedback && (
        <div className="w-8 h-8 bg-[#1F2758] rounded-full flex items-center justify-center shadow">
          <SparklesIcon className="w-5 h-5 text-blue-300" />
        </div>
      )}

      {/* 💬 Message Bubble */}
      <div className="flex flex-col max-w-[80%] sm:max-w-md">
        <div className={bubbleClasses}>
          {/* ⭐ Score */}
          {isScore && <span className="font-semibold">{message}</span>}

          {/* 💡 Feedback */}
          {isFeedback && (
            <div>
              <div className="flex items-center gap-2 mb-1 text-sm text-blue-300 font-semibold">
                <LightBulbIcon className="w-4 h-4" />
                <span>Feedback</span>
              </div>
              <div className="text-sm leading-relaxed">
                {message.replace("Feedback:", "").trim()}
              </div>
            </div>
          )}

          {/* 🧠 Normal Message */}
          {!isScore && !isFeedback && message}
        </div>

        {/* 🕒 Timestamp */}
        <div className="mt-1 text-right text-xs text-gray-400">{timeString}</div>
      </div>

      {/* 👤 User Icon */}
      {isUser && (
        <div className="w-8 h-8 bg-[#3A7BFF] rounded-full flex items-center justify-center shadow">
          <UserIcon className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
}
