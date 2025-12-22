export default function UploadSection({ loading, onUpload }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col items-center mb-14">
      {!loading ? (
        <>
          <p className="text-white text-lg mb-2">
            Upload your CV (PDF)
          </p>

          <p className="text-gray-400 mb-6">
            Max size 10MB
          </p>

          <button
            onClick={onUpload}
            // will trigger file picker + upload API
            className="bg-[#4F7CFF] px-8 py-4 rounded-xl"
          >
            <span className="text-white font-semibold">
              Choose File
            </span>
          </button>
        </>
      ) : (
        <>
          {/* Loader */}
          <div className="w-10 h-10 border-4 border-[#4F7CFF] border-t-transparent rounded-full animate-spin" />
          <p className="text-white mt-4">
            Analyzing your CV...
          </p>
        </>
      )}
    </div>
  );
}

