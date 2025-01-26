// pages/car-loan.js
import { useState } from "react";
import LoanCalculator from "../components/LoanCalculator";
import TermsAndConditions from "../components/TermsAndConditions";

export default function CarLoan() {
  const loanLimit = 800000; // 8 Lakh PKR

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold text-center">Car Loan</h1>
      <p className="mt-4 text-center">
        Get an interest-free loan to drive your dream car. Loans for new, used, or car renovations.
      </p>

      <div className="mt-8">
        <h3 className="text-xl font-semibold">Loan Categories:</h3>
        <ul className="list-disc pl-6 mt-4">
          <li><strong>New Car Loan:</strong> Purchase a new car. Max Loan: PKR 8 Lakh.</li>
          <li><strong>Used Car Loan:</strong> Purchase a used car. Max Loan: PKR 6 Lakh.</li>
          <li><strong>Car Renovation Loan:</strong> Upgrade your existing car. Max Loan: PKR 4 Lakh.</li>
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
