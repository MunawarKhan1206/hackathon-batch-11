"use client"
import { useState } from "react";
import LoanCalculator from "../components/LoanCalculator";
import TermsAndConditions from "../components/TermsAndConditions";

export default function EducationLoan() {
  const loanLimit = 1000000; // 10 Lakh PKR

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold text-center">Education Loan</h1>
      <p className="mt-4 text-center">
        Get financial assistance for your or your child’s education fees. Interest-free loans for tuition and more.
      </p>

      <div className="mt-8">
        <h3 className="text-xl font-semibold">Loan Categories:</h3>
        <ul className="list-disc pl-6 mt-4">
          <li><strong>University Fees Loan:</strong> Support for university tuition. Loan amount based on requirement.</li>
          <li><strong>Child Education Loan:</strong> Support for school/university fees. Loan amount based on requirement.</li>
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
