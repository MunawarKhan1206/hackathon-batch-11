"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [loanCategory, setLoanCategory] = useState('wedding');
  const [deposit, setDeposit] = useState('');
  const [loanPeriod, setLoanPeriod] = useState('1');
  const [totalAmount, setTotalAmount] = useState(null);
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  // Loan  logic
  const calculateLoan = (e) => {
    e.preventDefault();
    const depositAmount = parseFloat(deposit);
    const period = parseInt(loanPeriod);

    if (isNaN(depositAmount) || depositAmount <= 0 || isNaN(period) || period <= 0) {
      alert('Please provide valid inputs for all fields.');
      return;
    }

    // logic laon ke interest ya calculation ke liye
    let interestRate = 0;
    if (loanCategory === 'wedding') interestRate = 0;
    if (loanCategory === 'home') interestRate = 0;
    if (loanCategory === 'business') interestRate = 0;
    if (loanCategory === 'education') interestRate = 0;
    const totalLoanAmount = depositAmount * (1 + interestRate * period);
    setTotalAmount(totalLoanAmount.toFixed(2)); // amont ko 2 decimal ke liye 

    // Monthly payment calculation 
    const months = period * 12;
    const monthly = totalLoanAmount / months;
    // setMonthlyPayment(monthly.toFixed(2));r 2 decimal places
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-900 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Saylani Microfinance App</h1>
        <p className="mt-4 text-xl">Empowering communities with easy access to loans for various needs.</p>
      </section>
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-semibold text-center">Choose Your Loan Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-4">
          <Link href="/loan-category/personal-loans">
            <div className="block p-6 border rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-center">Personal Loans</h3>
              <p className="text-center mt-2">Explore personal loan options.</p>
            </div>
          </Link>
          <Link href="/loan-category/home-loans">
            <div className="block p-6 border rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-center">Home Loans</h3>
              <p className="text-center mt-2">Find the best home loan deals.</p>
            </div>
          </Link>
          <Link href="/loan-category/car-loans">
            <div className="block p-6 border rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-center">Car Loans</h3>
              <p className="text-center mt-2">Get financing for your car purchase.</p>
            </div>
          </Link>
          <Link href="/loan-category/student-loans">
            <div className="block p-6 border rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-center">Student Loans</h3>
              <p className="text-center mt-2">Discover options for student financing.</p>
            </div>
          </Link>

        </div>
      </section>
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center">Loan Calculator</h2>
        <div className="max-w-lg mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={calculateLoan}>
            <div className="space-y-4">
              <div>
                <label className="block text-lg font-medium">Select Loan Category</label>
                <select
                  className="mt-2 w-full px-4 py-2 border rounded-md"
                  value={loanCategory}
                  onChange={(e) => setLoanCategory(e.target.value)}
                  required
                >
                  <option value="wedding">Wedding Loan</option>
                  <option value="home">Home Construction Loan</option>
                  <option value="business">Business Startup Loan</option>
                  <option value="education">Education Loan</option>
                </select>
              </div>
              <div>
                <label className="block text-lg font-medium">Loan Amount (PKR)</label>
                <input
                  type="number"
                  className="mt-2 w-full px-4 py-2 border rounded-md"
                  value={deposit}
                  onChange={(e) => setDeposit(e.target.value)}
                  placeholder="Enter amount"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium">Loan Period (in years)</label>
                <select
                  className="mt-2 w-full px-4 py-2 border rounded-md"
                  value={loanPeriod}
                  onChange={(e) => setLoanPeriod(e.target.value)}
                  required
                >
                  <option value="1">1 Year</option>
                  <option value="2">2 Years</option>
                  <option value="3">3 Years</option>
                  <option value="4">4 Years</option>
                  <option value="5">5 Years</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              >
                Calculate
              </button>
            </div>
          </form>

          {totalAmount && monthlyPayment && (
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-green-600">
                Total Loan Amount: <span className="text-xl">{totalAmount} PKR</span>
              </p>
              <p className="text-lg font-semibold text-green-600">
                Monthly Payment: <span className="text-xl">{monthlyPayment} PKR</span>
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
