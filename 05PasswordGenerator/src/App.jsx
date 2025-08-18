import { useState, useCallback , useEffect, useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const pas = useCallback(() => {
    let passe = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxzy";

    if (number) str += "0123456789";
    if (character) str += "1@#$%^&*()~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length+1);
      passe += str.charAt(char);
    }
    setPassword(passe);
  }, [length, number, character,setPassword]);

  const copyPasswordtoclipboard=useCallback(()=>{
    passref.current?.select()// it hightlight aand copy thats why ref use kiya 
    passref.current?.setSelectionRange(0,100)// kitne range ke password sleect krna ho
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    pas();
  }, [length, number, character]); // password ko dependency me rakhne ki zarurat nahi

  // kisi be cheez ke refernce lena ki liye useref hook
  const passref=useRef(null)

  return (
    <>  
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 my-8 text-orange-500 bg-gray-700 min-h-[200px] flex flex-col items-center justify-center">
        <h1 className="text-white text-center mb-4 text-xl font-bold">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden w-full">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 bg-white text-black font-semibold rounded-md text-center"
            placeholder="password"
          
            readOnly
             ref={passref}
          />
          <button onClick={copyPasswordtoclipboard}className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>length:{length}</label>
          </div> 
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div> 
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
