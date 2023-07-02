import React from "react";
import styles from "./Result.module.css";

function Result({ completeData }) {
  const calculateData = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    let totalInterest = 0;
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest
        
      });
    }

    return yearlyData;
  };

  const yearlyData = calculateData(completeData);
  const usdFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  return (
    <table className={styles["result"]}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((currentYear, index) => (
          <tr key={index}>
            <td>{currentYear.year}</td>
            <td>{usdFormatter.format(currentYear.savingsEndOfYear)}</td>
            <td>{usdFormatter.format(currentYear.yearlyInterest)}</td>
            <td>{usdFormatter.format(currentYear.totalInterest)}</td>
            <td>{usdFormatter.format(currentYear.savingsEndOfYear-currentYear.totalInterest)}</td>
          </tr>
        ))}
        <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Result;
