// pages/personal-loan.js
import { useState } from "react";
import LoanCalculator from "../components/LoanCalculator";
import TermsAndConditions from "../components/TermsAndConditions";

export default function PersonalLoan() {
  const loanLimit = 500000; // 5 Lakh PKR

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold text-center">Personal Loan</h1>
      <p className="mt-4 text-center">
        Apply for an interest-free personal loan to fulfill your personal needs.
      </p>

      <div className="mt-8">
        <h3 className="text-xl font-semibold">Loan Categories:</h3>
        <ul className="list-disc pl-6 mt-4">
          <li><strong>Medical Loan:</strong> For medical emergencies and expenses. Max Loan: PKR 5 Lakh.</li>
          <li><strong>Personal Expenses Loan:</strong> For any personal needs. Max Loan: PKR 5 Lakh.</li>
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
