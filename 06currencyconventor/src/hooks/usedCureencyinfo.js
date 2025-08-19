 import { useEffect, useState} from "react"

 function useCurrencyInfo(currency){ //this is custom hook that's retuen data
    const[data, setData]=useState({})
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res)=> res.json())//call
    .then((res) => setData(res[currency]) )//call
    console.log(data);    
  }, [currency])
  console.log(data);
  return data;
 }
 export default useCurrencyInfo; //pure method he return kr diye hai