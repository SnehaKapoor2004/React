import React, { useId } from 'react'
//useId->useid is for generating unique ids that can be passed to accessibility atrributes.
// if we wants to generate key we canaot use useID
function Inputbox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectCurrency="usd",
  amountDisable=false,
  CurrencyDisable=false,
  className = "",
}) {
  const amountInputId=useId()
  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex`}>
        <div className='w-1/2'>
          <label htmlFor={amountInputId} className='tet-black/40 mb-2 inline-block'>
            {label}
          </label>
          <input
          id={amountInputId} //bidding
            className='outline-none w-full bg-transparent py-1.5'
            type="number"
            placeholder='Amount'
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          />
        </div>

        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text black/40 mb-2 w-full">Currenct type</p>
          <select
            className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
             disabled={CurrencyDisable}
            >

         {currencyOptions.map((currency)=>(// agr loops chaiye toh key use krni he hai in react
          <option key={currency} value={currency}>
            {currency}
          </option>
         ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default Inputbox
