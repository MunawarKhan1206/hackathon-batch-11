// pages/home-loan.js
import { useState } from "react";
import LoanCalculator from "../components/LoanCalculator";
import TermsAndConditions from "./TermsAndConditions.js";

export default function HomeLoan() {
  const [loanCategory, setLoanCategory] = useState("home-loan");

  const loanLimit = 1000000; // 10 Lakh PKR

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold text-center">Home Construction Loan</h1>
      <p className="mt-4 text-center">
        Get financial support for building your dream home. Interest-free loans for construction, finishing, and more.
      </p>

      <div className="mt-8">
        <h3 className="text-xl font-semibold">Loan Categories:</h3>
        <ul className="list-disc pl-6 mt-4">
          <li><strong>Structure Loan:</strong> Build the structure of your home. Max Loan: PKR 10 Lakh.</li>
          <li><strong>Finishing Loan:</strong> Complete your home’s interior. Max Loan: PKR 10 Lakh.</li>
          <li><strong>Renovation Loan:</strong> Upgrade your existing home. Max Loan: PKR 10 Lakh.</li>
        </ul>
      </div>

      <LoanCalculator maxLoanAmount={loanLimit} />

      <TermsAndConditions />

      <div className="mt-8 text-center">
        <button
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit Loan Application
        </button>
      </div>
    </div>
  );
}
