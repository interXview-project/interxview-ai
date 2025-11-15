import React from "react";
import CompanyLinksInline from "./CompanyLinksInline"; // عدل المسار حسب مكان الملف

export default function Footer() {
  return (
  <footer
  className="lg:grid lg:grid-cols-5"
  style={{ backgroundColor: "#EFECE3" }}
>
  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <CompanyLinksInline />
  </div>
</footer>

  );
}
