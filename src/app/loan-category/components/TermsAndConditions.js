// components/TermsAndConditions.js
export default function TermsAndConditions() {
    return (
      <div className="mt-8 bg-gray-100 p-6 rounded-md shadow-lg">
        <h2 className="text-xl font-semibold">Terms and Conditions</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>Loan approval is subject to verification of the applicant&apos details.</li>
          <li>The applicant must be a Pakistani citizen with valid CNIC.</li>
          <li>All loans are subject to the maximum loan limits of each category.</li>
          <li>Applicants must submit guarantor information (two individuals).</li>
          <li>Late payments will incur a penalty charge.</li>
          <li>Applicants should have a steady income source or valid documents proving their financial standing.</li>
        </ul>
      </div>
    );
  }
  