import { ChangeEvent, useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [year, setYear] = useState(2023);
  const [period, setPeriod] = useState("");
  const [baseAmount, setBaseAmount] = useState(15000);
  const [rent, setRent] = useState(0);
  const [stim, setStim] = useState(0);
  const [tax, setTax] = useState(0);
  const [percentage, setPercentage] = useState(20);

  const currentYear: number = new Date().getFullYear();
  let earliestYear: number = 2020;
  let yearsArray: number[] = [];
  while (currentYear >= earliestYear) {
    yearsArray.unshift(earliestYear);
    earliestYear++;
  }

  // ___________________EVENT HANDLERS__________________________
  const handleSubmit = () => {
    alert(`Beep, bop!
    ${baseAmount}
    ${rent}
    ${stim}
    ${tax}
    ${percentage}`);
  };

  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = Number(event.target.value);
    setYear(newValue);
  };

  const handlePeriodChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setPeriod(newValue);
  };

  const handleBaseamountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setBaseAmount(newValue);
  };

  const handleRentChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setRent(newValue);
  };

  const handleStimChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setStim(newValue);
  };

  const handleTaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setTax(newValue);
  };

  const handlePercentageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setPercentage(newValue);
  };

  // _______________HTML ELEMNTS__________________________
  const selectOptions = yearsArray.map((year, index) => {
    return <option key={index} value={year}>{year}</option>;
  });

  return (
    <div className="settings__container">
      <h1 className="content__heading">🛠 Settings</h1>

      <form onSubmit={handleSubmit}>
        <div className="settings__form-input-container">
          <label htmlFor="year">Year</label>
          <select id="year" onChange={handleYearChange} value={year} required>
            {selectOptions}
          </select>
        </div>

        <div className="settings__form-input-container">
          <label htmlFor="period">Period</label>
          <select
            id="period"
            onChange={handlePeriodChange}
            value={period}
            required
          >
            <option value="">--</option>
            <option value="VT">Spring</option>
            <option value="ST">Summer</option>
            <option value="HT">Atumn</option>
            <option value="S&HT">Summer & Atumn</option>

          </select>
        </div>

        <div className="settings__form-input-container">
          <label htmlFor="baseAmount">Base amount</label>
          <input
            id="baseAmount"
            type="number"
            onChange={handleBaseamountChange}
            value={baseAmount}
            min="15000"
            required
          />
        </div>
        <div className="settings__form-input-container">
          <label htmlFor="rent">Rent</label>

          <input
            id="rent"
            type="number"
            onChange={handleRentChange}
            value={rent}
            required
          />
        </div>
        <div className="settings__form-input-container">
          <label htmlFor="stim">STIM</label>
          <input
            id="stim"
            type="number"
            onChange={handleStimChange}
            value={stim}
            required
          />
        </div>
        <div className="settings__form-input-container">
          <label htmlFor="taxes">Employer fees & taxes</label>
          <input
            id="taxes"
            type="number"
            onChange={handleTaxChange}
            value={tax}
            required
          />
        </div>

        <div className="settings__form-input-container">
          <label htmlFor="percentage">
            The organizations part of the profit(%)
          </label>
          <input
            id="percentage"
            type="number"
            onChange={handlePercentageChange}
            value={percentage}
            max="100"
            min="0"
            required
          />
        </div>

        <button type="submit">SAVE</button>
      </form>
    </div>
  );
};

export default Settings;
