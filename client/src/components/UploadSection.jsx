import { SparklesIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

export default function UploadSection({ loading, onUpload, statusMessage }) {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload PDF file only");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("File too large. Max 10MB");
      return;
    }

    onUpload(file);
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 flex flex-col items-center mb-14">
      {!loading ? (
        <>
          <p className="text-white text-lg mb-2">Upload your CV (PDF)</p>

          <p className="text-gray-400 mb-6">Max size 10MB</p>

          <input
            type="file"
            accept="application/pdf"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />

          <button
            onClick={handleButtonClick}
            className="
              bg-[#4F7CFF]
              px-8 py-4
              rounded-xl
              flex items-center gap-2
              transition-all duration-300
              shadow-none
              hover:shadow-[0_0_25px_rgba(79,124,255,0.7)]
            "
          >
            <SparklesIcon className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Choose File</span>
          </button>
        </>
      ) : (
        <>
          <div className="w-12 h-12 border-4 border-[#4F7CFF] border-t-transparent rounded-full animate-spin" />
          <p className="text-white mt-4 text-lg">{statusMessage}</p>

          <p className="text-gray-400 mt-2 animate-pulse">Please wait...</p>
        </>
      )}
    </div>
  );
}
