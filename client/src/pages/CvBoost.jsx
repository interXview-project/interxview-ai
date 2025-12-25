import React, { useState } from "react";

import Header from "../components/Header";
import UploadSection from "../components/UploadSection";
import AnalysisSection from "../components/AnalysisSection";
import ImprovedPreview from "../components/ImprovedPreview";
import FinalCTA from "../components/FinalCTA";

export default function CvBoost() {
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleUpload = () => {
    setLoading(true);

    // replace with real API call
    setTimeout(() => {
      setLoading(false);
      setShowResult(true); 
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0B1026] px-6 pt-12 pb-24 overflow-y-auto">
      <Header />

      {/* STEP 1: Upload */}
      {!showResult && (
        <UploadSection loading={loading} onUpload={handleUpload} />
      )}

      {/* STEP 2: Results + Download */}
      {showResult && (
        <div className="space-y-16">
          <AnalysisSection />
          <FinalCTA />
        </div>
      )}
    </div>
  );
}

/*export default function CvBoost() {
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleUpload = () => {
    setLoading(true);

    // replace this with API call
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0B1026] px-6 pt-12 overflow-y-auto">
      <Header />

      {!showResult && (
        <UploadSection loading={loading} onUpload={handleUpload} />
      )}

      {showResult && (
        <>
          <AnalysisSection />
          <ImprovedPreview />
          <FinalCTA />
        </>
      )}
    </div>
  );
}
*/

