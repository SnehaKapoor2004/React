import { useState, useEffect } from "react";
import { Inputbox } from "./components";
import "./App.css";

// 🔹 Custom hook defined inside App.jsx
function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!baseCurrency) return;

    fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates))
      .catch((err) => console.error("Failed to fetch currency data:", err));
  }, [baseCurrency]);

  return data;
}

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  // ✅ Swap currencies and amounts safely
  const swap = () => {
    const prevFrom = from;
    const prevTo = to;
    const prevAmount = amount;
    const prevConverted = convertedAmount;

    setFrom(prevTo);
    setTo(prevFrom);
    setAmount(prevConverted);
    setConvertedAmount(prevAmount);
  };

  // ✅ Convert on button click
  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/32849129/pexels-photo-32849129.jpeg')",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
           <div className="w-full mb-1">
  <Inputbox
    label="From"
    amount={amount}
    currencyOptions={options}
    onCurrencyChange={(currency) => setFrom(currency)}
    selectCurrency={from}   // 👈 correct, "from" state
    onAmountChange={(amt) => setAmount(amt)}
  />
</div>

<div className="relative w-full h-0.5 my-4">
  <button
    type="button"
    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
    onClick={swap}
  >
    Swap
  </button>
</div>

<div className="w-full mt-1 mb-4">
  <Inputbox
    label="To"
    amount={convertedAmount}
    currencyOptions={options}
    onCurrencyChange={(currency) => setTo(currency)}
    selectCurrency={to}   // 👈 correct, "to" state
    amountDisable
  />
  <button
    type="submit"
    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-3"
  >
    Convert {from.toUpperCase()} to {to.toUpperCase()}
  </button>
</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
