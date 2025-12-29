import React, { useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

export default function UploadSection({ loading, onUpload }) {
  const [file, setFile] = React.useState(null); 

  const handleFileChange = (e) => {  
    setFile(e.target.files[0]);
  };

  const handleClick = () => {
    if (file) {
      onUpload(file); 
    } else {
      alert("Please choose a file first"); 
    }
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 flex flex-col items-center mb-14">
      {!loading ? (
        <>
        <CloudArrowUpIcon className="w-12 h-12 text-[#4F7CFF] mb-4" />
          <p className="text-white text-lg mb-2">
            Upload your CV (PDF)
          </p>

          <p className="text-gray-400 mb-6">
            Max size 10MB
          </p>

          <input
            id="cv-upload"
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />

          <label
            htmlFor="cv-upload"
            className="
              cursor-pointer
              mb-4
              px-6 py-3
              rounded-xl
              border border-dashed border-white/20
              text-white/80
              hover:border-[#4F7CFF]
              hover:text-white
              transition
            "
          >
          {file ? file.name : "Choose PDF file"}
          </label>
          {/* <input 
            type="file" 
            accept=".pdf"
            onChange={handleFileChange} 
            className="mb-4"
          /> */}

          <button
            onClick={handleClick}
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
            <span className="text-white font-semibold">
              Analyze your Cv
            </span>
          </button>
        </>
      ) : (
        <>
          <div className="w-10 h-10 border-4 border-[#4F7CFF] border-t-transparent rounded-full animate-spin" />
          <p className="text-white mt-4">
            Analyzing your CV...
          </p>
        </>
      )}
    </div>
  );
}


// export default function UploadSection({ loading, onUpload }) {
//   return (
//     //<div className="rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col items-center mb-14">
//       <div className="w-full max-w-md mx-auto rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 flex flex-col items-center mb-14">

//     {!loading ? (
//         <>
//           <p className="text-white text-lg mb-2">
//             Upload your CV (PDF)
//           </p>

//           <p className="text-gray-400 mb-6">
//             Max size 10MB
//           </p>

//           <button
//   onClick={onUpload}
//   className="
//     bg-[#4F7CFF]
//     px-8 py-4
//     rounded-xl
//     flex items-center gap-2
//     transition-all duration-300
//     shadow-none
//     hover:shadow-[0_0_25px_rgba(79,124,255,0.7)]
//   "
// >
//   <SparklesIcon className="w-5 h-5 text-white" />
//   <span className="text-white font-semibold">
//     Choose File
//   </span>
// </button>


//         </>
//       ) : (
//         <>
//           {/* Loader */}
//           <div className="w-10 h-10 border-4 border-[#4F7CFF] border-t-transparent rounded-full animate-spin" />
//           <p className="text-white mt-4">
//             Analyzing your CV...
//           </p>
//         </>
//       )}
//     </div>
  
//   );
// }
